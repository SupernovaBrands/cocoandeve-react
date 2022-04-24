import React, { useEffect, useState, useRef } from "react";
import '../../survey.scss';
import Questions from "../../modules/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';
import SingleChoiceIcon from '../components/SingleChoiceIcon';
import SingleChoiceImage from '../components/SingleChoiceImage';
import { useResizeDetector } from 'react-resize-detector';

import { setCookie, getCookie } from "../../modules/Utils";
import ProductVariants from "../../modules/ProductVariants";
import { useSearchParams } from "react-router-dom";

const Survey = () => {
    const [searchParams] = useSearchParams();
    const site = searchParams.get('site');
    const gId = searchParams.get('gaid');

    // refference width and height
    const targetRef = useRef();
    const { width, height } = useResizeDetector({ targetRef });

    // initial data
    const initialState = getCookie('surveyPosition') || 'start';
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const answerData = getCookie('answeredQuestion') ? JSON.parse(getCookie('answeredQuestion')) : {};

    const selectedSite = site ? site : 'dev.cocoandeve.com';

    const variants = ProductVariants[selectedSite];

    // states
    const [currentPosition, setPosition] = useState(initialState);
    const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [progressValue, setProgress] = useState(currentQuestion / Questions.length * 100);
    const [currentAnswer, setAnswer] = useState(answerData);
    const [selectedVariant, setSelectedVariant] = useState(null); // dummy selected array variants

    const postMessageCookie = (key, val) => {
        if (window.top === window.self) return;

        window.parent.postMessage({
            'func': 'setCookieFromMessage',
            'key': key,
            'value': val,
        }, `https://${site}`);
    }

    // handler hook side effect when state changed
    useEffect(() => {
        if (currentPosition === 'start') {
            document.body.classList.add('bg-primary-light-second');
        } else {
            document.body.classList.remove('bg-primary-light-second');
        }

        setCookie('surveyPosition', currentPosition);
        // postMessageCookie('surveyPosition', currentPosition); don't send to parent window when initialize survey state
    }, [currentPosition]);

    useEffect(() => {
        if (currentQuestion <= Questions.length && currentPosition !== 'finished' && currentPosition !== 'start') {
            setCookie('currentQuestion', currentQuestion);
            setCookie('surveyPosition', `question-${currentQuestion}`);
            // send cookie data to the parent window
            postMessageCookie('currentQuestion', currentQuestion);
            postMessageCookie('surveyPosition', `question-${currentQuestion}`);
        }

        setProgress(currentQuestion / Questions.length * 100);
    }, [currentQuestion, currentPosition]);

    const answerAction = (question, answers) => {
        currentAnswer[question] = answers;
        setAnswer(currentAnswer);
        setCookie('answeredQuestion', JSON.stringify(currentAnswer));

        // send cookie data to the parent window
        postMessageCookie('answeredQuestion', JSON.stringify(currentAnswer));
    };

    const gettingResult = (close=false) => {
        // check first answer
        const firstAnswer = currentAnswer[1];
        const firstQuestion = Questions[0];
        const firstAnswered = firstQuestion.answers.indexOf(firstAnswer) + 1;

        // check second answer
        // const secondAnswer = currentAnswer[2];
        // const secondQuestion = Questions[1];
        // const secondAnswered = firstQuestion.answers.indexOf(secondAnswer) + 1;

        // check third answer
        const thirdAnswer = currentAnswer[3];
        const thirdQuestion = Questions[2];
        const thirdAnswered = thirdQuestion.answers.indexOf(thirdAnswer) + 1;

        let sku = 'CE0000032020'; // foam medium
        if (firstAnswered === 1) {            
            if (thirdAnswered === 1) {
                sku = 'CE0000032020'; // foam medium
            } else if (thirdAnswered === 2) {
                sku = 'CE0000432020'; // drops medium
            } else {
                sku = 'CE0001202020'; // glow essential medium
            }
        } else if (firstAnswered === 2) {
            if (thirdAnswered === 1) {
                sku = 'CE0000032040'; // foam dark
            } else if (thirdAnswered === 2) {
                sku = 'CE0000432030'; // drops dark
            } else {
                sku = 'CE0001962020'; // glow essential dark
            }
        } else if (firstAnswered === 3) {
            if (thirdAnswered === 1) {
                sku = 'CE0000032060'; // foam ultra dark
            } else if (thirdAnswered === 2) {
                sku = 'CE0000432030'; // drops dark because drops don't have variant ultra dark
            } else {
                sku = 'CE0001962020'; // glow essential dark because don't have variant ultra dark
            }
        }

        const findVariant = variants.find((variant) => variant.sku === sku);
        if (findVariant) {
            setSelectedVariant([findVariant]);
            
            if (window.top !== window.self && currentPosition === 'finished') {
                postMessageCookie('surveyResult', findVariant.product_handle);
                postMessageCookie('surveyResultSku', findVariant.sku);
                window.top.location.href = `https://${selectedSite}/products/${findVariant.product_handle}?survey=result&sku=${findVariant.sku}`;
            }

            if (close) {
                setCookie('surveyPosition', 'finished');
                setPosition('finished');
                postMessageCookie('surveyPosition', 'finished');
                postMessageCookie('surveyResult', findVariant.product_handle);
                postMessageCookie('surveyResultSku', findVariant.sku);
                window.top.location.href = `https://${selectedSite}/products/${findVariant.product_handle}?survey=result&sku=${findVariant.sku}`;
            }
        }
    }

    const setQuestionState = (questionIndex) => {
        if (questionIndex <= Questions.length) {
            setQuestion(questionIndex);
        } else if (questionIndex >= Questions.length) {
            gettingResult(true);
            // call saving data to analytics and database
            saveData();
            postMessageGaParent();
        }
    }

    const postMessageGaParent = () => {
        if (window.top === window.self) return;
        const keys = Object.keys(currentAnswer);

        keys.forEach((key,index) => {
            const q = Questions[index];
            const a = currentAnswer[key];
            const label = q.question;
            const action = typeof(a) === 'object' ? a.join(',') : a;
            window.parent.postMessage({
                'func': 'callGaEvent',
                'category': 'Survey',
                'action': action,
                'label': label,
            }, `https://${site}`);
        });
    }

    const saveData = () => {
        const dataForSaving = {};
        for (const [key, value] of Object.entries(currentAnswer)) {
            const idxQ = key - 1;
            if (Questions[idxQ]) {
                const questionText = `${key}: ${Questions[idxQ].question}`;
                dataForSaving[questionText] = value;
            }
        }
        const data = { _ga: gId, questions_answers: dataForSaving };
        fetch('https://api.cocoandeve.com/surveys', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }

    const addToCart = (variantId, qty) => {
        if (window.top === window.self) return;
        window.parent.postMessage({
            'func': 'addToCartFromMessage',
            'variantId': variantId,
            'quantity': qty,
       }, `https://${site}`);
    }

    useEffect(() => {
        if (currentPosition === 'finished') gettingResult();

        // listener message from parent
        window.onMessage = (event) => {
            const data = event.data;
            if (typeof (window[data.func]) === 'function') {
                window[data.func].call(null, data);
            }
        };

        window.setupDataFromParent = (data) => {
            if (data.key === 'currentQuestion') {
                setQuestion(parseInt(data.value, 10));
            } else if (data.key === 'surveyPosition') {
                setPosition(data.value);
            } else if (data.key === 'answeredQuestion') {
                setAnswer(JSON.parse(data.value));
            }

            if (currentAnswer) {
                gettingResult();
            }
        }
        
        if (window.addEventListener) {
            window.addEventListener('message', window.onMessage, false);
        } else if (window.attachEvent) {
            window.attachEvent('onmessage', window.onMessage, false);
        }        
    }, [currentQuestion, currentPosition, currentAnswer]);

    return (
            <div ref={targetRef} className="container">
                <div className="row justify-content-center align-items-center survey-content">
                    { currentPosition === 'start' && (
                    <>
                        <div className="col-12 col-lg-4 pt-4 text-center text-lg-start">
                            <h1 className="pt-sm-2">Find your perfect tan <br/>in 90 seconds!</h1>
                            <p className="mb-0">Take the Tan matching quiz to find your perfect shade of gorgeous glow. It only takes 90 seconds to find your true colour match</p>
                            <button className="btn btn-primary text-white mt-4" onClick={() => setPosition('question-1')}>Take the Quiz</button>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 fixed-sm-bottom zindex-n1">
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02a8805f-afab-4d9d-31bb-c0c245264100/828x" />
            					<source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b426a652-ee5d-4534-5039-4b10fe9a3200/1140x" />
                                <img className="w-100" loading="lazy" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02a8805f-afab-4d9d-31bb-c0c245264100/828x" alt="Tan Variants"/>
                            </picture>
                        </div>
                    </>) }

                    { currentPosition !== 'start' && currentPosition !== 'finished' && (
                        <>
                            <div className="text-center col-12 col-lg-6 px-lg-0 pt-4 pb-2 pb-lg-4">
                                <p>Your perfect shade is just a few clicks away</p>
                                <div className="progress progress bg-primary-light-second">
                                    <div className="progress-bar" style={{ width: `${progressValue}%` }} role="progressbar" defaultValue={progressValue} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="mt-2 d-inline-block">{currentQuestion}/{Questions.length}</span>
                            </div>
                            <div className="text-center col-12 col-lg-8">
                                    {
                                        Questions.map((item, index) => {
                                            const key = `question-${index}`;
                                            if (currentQuestion === index + 1) {
                                                switch(item.type) {
                                                case 'MultipleChoice':
                                                    return (
                                                        <QuestionBox currentAnswer={currentAnswer} width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
                                                            <MultipleChoice answers={item.answers}
                                                                lastFull={item.lastFull}
                                                                maxChoose={item.maxChoose}
                                                                lastDisableForAll={item.lastDisableForAll}
                                                                />
                                                        </QuestionBox>
                                                        );
                                                case 'SingleChoiceIcon':
                                                    return (
                                                        <QuestionBox currentAnswer={currentAnswer} width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question} caption={item.caption}>
                                                            <SingleChoiceIcon className='single-choice-icon' answers={item.answers} icons={item.icons} buttonType={item.buttonType}/>
                                                        </QuestionBox>
                                                    )
                                                case 'SingleChoiceImage':
                                                    return (
                                                        <QuestionBox currentAnswer={currentAnswer} width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question} caption={item.caption}>
                                                            <SingleChoiceImage className='single-choice-image' answers={item.answers} images={item.images}/>
                                                        </QuestionBox>
                                                    )
                                                default:
                                                    return (
                                                        <QuestionBox currentAnswer={currentAnswer} width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
                                                            <SingleChoice answers={item.answers} buttonType={item.buttonType}/>
                                                        </QuestionBox>
                                                        );
                                                }
                                            }
                                            return false;
                                        })
                                    }
                             </div>
                        </>
                    )
                    }
                    {/* { currentPosition === 'finished' && (
                            <>
                                <h1 className="text-center mt-4 mb-2">We found your perfect match!</h1>
                                <Results variantSelectorStyle="flex" titleHeading="h1" addToCart={addToCart} noReviews={true} variants={selectedVariant} hideProductCaption={true} cartPosition="top"/>
                            </>
                        )
                    } */}
            </div>
        </div>
    )
};
export default Survey;
