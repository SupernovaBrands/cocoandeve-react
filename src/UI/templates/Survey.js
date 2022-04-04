import React, { useEffect, useState, useRef } from "react";
import Questions from "../../modules/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';
import SingleChoiceIcon from '../components/SingleChoiceIcon';
import SingleChoiceImage from '../components/SingleChoiceImage';
import CountrySelect from '../components/CountrySelect';
import ProductForm from '../sections/ProductForm';
import { useResizeDetector } from 'react-resize-detector';

import { setCookie, getCookie } from "../../modules/Utils";
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

    const variants = [
        {
            id: '32068891541539',
            text: 'Your perfect shade – Medium',
            class: 'medium',
            caption: 'will give you subtle glow',
        },
        {
            id: '32068891607075',
            text: 'Your perfect shade – Dark',
            class: 'dark',
            caption: 'Subtle glow, lighter skin tones',
        },
        {
            id: '32068891639843',
            text: 'Your perfect shade – Ultra Dark',
            class: 'ultra-dark',
            caption: 'Subtle glow, lighter skin tones',
        }
    ];

    // states
    const [currentPosition, setPosition] = useState(initialState);
    const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [progressValue, setProgress] = useState(currentQuestion / Questions.length * 100);
    const [currentAnswer, setAnswer] = useState(answerData);
    const [selectedVariant] = useState([variants.at(0)]); // dummy selected array variants

    // handler hook side effect when state changed
    useEffect(() => {
        if (currentPosition === 'start') {
            document.body.classList.add('bg-primary-light-second');        
        } else {
            document.body.classList.remove('bg-primary-light-second');
        }

        setCookie('surveyPosition', currentPosition);
    }, [currentPosition]);

    useEffect(() => {
        if (currentQuestion <= Questions.length && currentPosition !== 'finished') {
            setCookie('currentQuestion', currentQuestion);
            setCookie('surveyPosition', `question-${currentQuestion}`);
        }
        setProgress(currentQuestion / Questions.length * 100);
    }, [currentPosition, currentQuestion]);

    const answerAction = (question, answers) => {
        currentAnswer[question] = answers;
        setAnswer(currentAnswer);
        setCookie('answeredQuestion', JSON.stringify(currentAnswer));
    };

    const setQuestionState = (questionIndex) => {
        if (questionIndex <= Questions.length) {
            setQuestion(questionIndex);
            postMessageGaParent('Survey', `Submit question: ${questionIndex - 1}`);
        } else if (questionIndex >= Questions.length) {
            setCookie('surveyPosition', 'finished');
            setPosition('finished');

            // call saving data to analytics and database
            saveData();
        }
    } 

    const postMessageGaParent = (category, action) => {
        if (window.top === window.self) return;
        window.parent.postMessage({
            'func': 'callGaEvent',
            'category': category,
            'action': action,
       }, `https://${site}`);
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

    return (
            <div ref={targetRef} className="container">
                <div className="row justify-content-center align-items-center">
                    { currentPosition === 'start' && (
                    <>
                        <div className="col-12 col-lg-4 pt-4 text-center text-lg-start">
                            <h1 className="pt-sm-4">Find your perfect tan <br/>in 90 seconds!</h1>
                            <p className="mb-0">Take the Tan matching quiz to find your perfect shade of gorgeous glow. It only takes 90 seconds to find your true colour match</p>
                            <button className="btn btn-primary text-white mt-4" onClick={() => setPosition('question-1')}>Take the Quiz</button>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 fixed-sm-bottom">
                            <picture>
                                <img className="w-100" src="../images/tan-types.png" alt="Tan Variants"/>
                            </picture>
                        </div>
                    </>) }

                    { currentPosition !== 'start' && currentPosition !== 'finished' && (
                        <>
                            <div className="text-center col-12 col-lg-6 px-lg-0 py-4">
                                <p>Your perfect shade is just a few clicks away</p>
                                <div className="progress progress bg-primary-light-second">
                                    <div className="progress-bar" style={{ width: `${progressValue}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
                                                        <QuestionBox width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
                                                            <MultipleChoice answers={item.answers} 
                                                                lastFull={item.lastFull} 
                                                                maxChoose={item.maxChoose}
                                                                lastDisableForAll={item.lastDisableForAll}
                                                                />
                                                        </QuestionBox>
                                                        );
                                                case 'SingleChoiceIcon':
                                                    return (
                                                        <QuestionBox width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question} caption={item.caption}>
                                                            <SingleChoiceIcon className='single-choice-icon' answers={item.answers} icons={item.icons} buttonType={item.buttonType}/>
                                                        </QuestionBox>
                                                    )
                                                case 'SingleChoiceImage':
                                                    return (
                                                        <QuestionBox width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question} caption={item.caption}>
                                                            <SingleChoiceImage className='single-choice-image' answers={item.answers} images={item.images}/>
                                                        </QuestionBox>
                                                    )
                                                case 'CountrySelect':
                                                    return (
                                                        <QuestionBox width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
                                                            <CountrySelect answers={item.answers} placeholder="(Choose country)"/>
                                                        </QuestionBox>
                                                        );
                                                default:
                                                    return (
                                                        <QuestionBox width={width} height={height} totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
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
                    { currentPosition === 'finished' && (
                            <>
                                <h1 className="text-center mt-4 mb-2">We found your perfect match!</h1>
                                <ProductForm variantSelectorStyle="flex" titleHeading="h1" addToCart={addToCart} noReviews={true} variants={selectedVariant} hideProductCaption={true} cartPosition="top"/>
                            </>
                        )
                    }
            </div>
        </div>
    )
};
export default Survey;
    