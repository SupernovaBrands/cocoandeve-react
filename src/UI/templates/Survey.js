import React, { useEffect, useState } from "react";
import '../../survey.scss';
import Questions from "../../modules/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';
import SingleChoiceIcon from '../components/SingleChoiceIcon';
import SingleChoiceImage from '../components/SingleChoiceImage';
import EmailForm from '../components/EmailForm';
import ResultContent from '../components/ResultContent';
// import { useResizeDetector } from 'react-resize-detector';

import { setCookie, getCookie } from "../../modules/Utils";
import ProductVariants from "../../modules/ProductVariants";
import { useSearchParams } from "react-router-dom";

import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';
import Translations from '../../modules/translations';

const Survey = () => {
    const [searchParams] = useSearchParams();
    const site = searchParams.get('site');
    const gId = searchParams.get('gaid');
    const surveyState = searchParams.get('state');
    const language = searchParams.get('lang');
    const abTest = searchParams.get('abtest');

    const setCookieAnsweredQuestion = (object) => {
        if (typeof object === 'object') {
            Object.entries(object).forEach((data) => {
                const key = data[0];
                const value = decodeURI(data[1]);
                object[key] = encodeURI(value);
            });
            setCookie('answeredQuestion', JSON.stringify(object));
        } else {
            setCookie('answeredQuestion', '');
        }
    }

    const getCookieAnsweredQuestion = () => {
        if (getCookie('answeredQuestion')) {
            const object = JSON.parse(getCookie('answeredQuestion'));
            Object.entries(object).forEach((data) => {
                const key = data[0];
                const value = data[1];
                object[key] = decodeURI(value);
            });
            return object;
        }
        return null;
    }

    const decodeAnswers = (object) => {
        Object.entries(object).forEach((data) => {
            const key = data[0];
            const value = data[1];
            object[key] = decodeURI(value);
        });
        return object;
    }

    // refference width and height
    // const targetRef = useRef();
    // const { width, height } = useResizeDetector({ targetRef });

    // initial data
    let initialState = getCookie('surveyPosition') || 'start';
    if (surveyState === 'started' && (getCookie('surveyPosition') === 'start' || getCookie('surveyPosition') === null || getCookie('surveyPosition') === '')) {
        postMessageData('Survey', 'started');
        initialState = 'question-1';
        setCookie('answeredQuestion', '');
    }
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const initialSubmitted = getCookie('quizEmail') ? true : false;
    const answerData = getCookieAnsweredQuestion() ? getCookieAnsweredQuestion() : {};

    const selectedSite = site ? site : 'dev.cocoandeve.com';

    const variants = ProductVariants[selectedSite];

    // states
    const [currentPosition, setPosition] = useState(initialState);
    const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [progressValue, setProgress] = useState(currentQuestion / Questions.length * 100);
    const [currentAnswer, setAnswer] = useState(answerData);
    const [submitted, setSubmitted] = useState(initialSubmitted);
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const additionalStep = true;

    let lang = 'en';

    if (language && ['en','de','fr'].includes(language)) {
        lang = language;
    }

    // handler hook side effect when state changed
    useEffect(() => {
        if (currentPosition === 'start') {
            document.getElementById('root').classList.add('bg-primary-light-second');
        } else {
            document.getElementById('root').classList.remove('bg-primary-light-second');
        }

        setCookie('surveyPosition', currentPosition);
        if (currentPosition === 'finished' && !additionalStep) clearCookie();
    }, [currentPosition]);

    useEffect(() => {
        if (currentQuestion <= Questions.length && currentPosition !== 'finished' && currentPosition !== 'start') {
            setCookie('currentQuestion', currentQuestion);
            setCookie('surveyPosition', `question-${currentQuestion}`);
        }

        setProgress(currentQuestion / Questions.length * 100);
    }, [currentQuestion, currentPosition]);

    const answerAction = (question, answers) => {
        currentAnswer[question] = answers;
        setAnswer(decodeAnswers(currentAnswer));
        setCookieAnsweredQuestion(decodeAnswers(currentAnswer));
    };

    const clearCookie = () => {
        setCookie('currentQuestion', 1);
        setCookie('surveyPosition', 'start');
        setCookie('answeredQuestion', '');
        setCookie('quizEmail', '');
    }

    const gettingResult = async (close=false) => {
        // check first answer
        const firstAnswer = currentAnswer[1];
        const firstQuestion = Questions[0];
        const firstAnswered = firstQuestion.answers[lang].indexOf(firstAnswer) + 1;

        // check second answer
        // const secondAnswer = currentAnswer[2];
        // const secondQuestion = Questions[1];
        // const secondAnswered = firstQuestion.answers.indexOf(secondAnswer) + 1;

        // check third answer
        const thirdAnswer = currentAnswer[3];
        const thirdQuestion = Questions[2];
        const thirdAnswered = thirdQuestion.answers[lang].indexOf(thirdAnswer) + 1;

        let sku = 'CE0000032020'; // foam medium
        if (firstAnswered === 1) {
            if (thirdAnswered === 2) {
                sku = 'CE0000032020'; // foam medium
            } else if (thirdAnswered === 1) {
                sku = 'CE0001512020'; // face tanning micromist
            } else {
                sku = 'CE0000072020'; // bali bronzing bundle medium
            }
        } else if (firstAnswered === 2) {
            if (thirdAnswered === 2) {
                sku = 'CE0000032040'; // foam dark
            } else if (thirdAnswered === 1) {
                sku = 'CE0000432030'; // drops dark
            } else {
                sku = 'CE0000072040'; // bali bronzing bundle dark
            }
        } else if (firstAnswered === 3) {
            if (thirdAnswered === 2) {
                sku = ['us.cocoandeve.com', 'www.cocoandeve.com'].includes(site) ? 'CE0000036060' : 'CE0000032060'; // foam ultra dark
            } else if (thirdAnswered === 1) {
                sku = 'CE0000432030'; // drops dark
            } else {
                sku = 'CE0000072040'; // bali bronzing bundle dark
            }
        }

        // mapping for US,CA,UK store since foam medium and dark has different sku
        const diffSkus = ['www.cocoandeve.com', 'us.cocoandeve.com', 'ca.cocoandeve.com', 'uk.cocoandeve.com']
        const caUs = ['www.cocoandeve.com', 'us.cocoandeve.com', 'ca.cocoandeve.com'];
        const us = ['www.cocoandeve.com', 'us.cocoandeve.com'];
        if (diffSkus.includes(selectedSite)) {
            if (sku === 'CE0000032020') {
                sku = 'CE0000036020';
            } else if (sku === 'CE0000032040' && us.includes(selectedSite)) {
                sku = 'CE0000036040';
            } else if (sku === 'CE0000032060' && caUs.includes(selectedSite)) {
                sku = 'CE0000036060';
            }
        }

        const findVariant = variants.find((variant) => variant.sku === sku);
        console.log(sku, findVariant, 'variant data');

        if (findVariant) {
            // handle when inside iframe
            if (window.top !== window.self && currentPosition === 'finished') {
                await saveData(findVariant.product_handle, findVariant.sku);
                completed(findVariant.product_handle,findVariant.sku);
            }

            if (close) {
                await saveData(findVariant.product_handle, findVariant.sku);
                setFinished();
                completed(findVariant.product_handle,findVariant.sku);
            }
        }
    }

    const completed = (handle, sku) => {
        postMessageToParentCookie('surveyResult', handle);
        postMessageToParentCookie('surveyResultSku', sku);
        postMessageToParentCookie('surveySubmitNew', 'true');

        setTimeout(function(){
            clearCookie();
            window.top.location.href = `https://${selectedSite}/products/${handle}?survey=result&sku=${sku}`;
        }, 3000);
    }

    const setFinished = () => {
        setCookie('surveyPosition', 'finished');
        setPosition('finished');
    }

    const setQuestionState = (questionIndex) => {
        if (questionIndex <= Questions.length) {
            const targetQuestion = Questions[questionIndex];
            if (targetQuestion && targetQuestion.rule && targetQuestion.rule.skipped) {
                const targetAnswer = decodeAnswers(currentAnswer)[targetQuestion.rule.question];
                if (targetAnswer === targetQuestion.rule.answer[lang]) {
                    answerAction(questionIndex, '');
                    const targetQuestionIndex = currentQuestion < questionIndex ? questionIndex + 1 : questionIndex - 1;
                    setQuestion(targetQuestionIndex);
                } else {
                    setQuestion(questionIndex);
                }
            } else {
                setQuestion(questionIndex);
            }
        } else if (questionIndex >= Questions.length) {
            if (additionalStep) {
                setFinished();
            } else {
                // call saving data to analytics and database
                setRedirect(true);
                postMessageGaParent();
                gettingResult(true);
            }
        }
    }

    const postMessageToParentCookie = (key, val) => {
        if (window.top === window.self) return;

        window.parent.postMessage({
            'func': 'setCookieFromMessage',
            'key': key,
            'value': val,
        }, `https://${site}`);
    }

    const postMessageData = (category,action,label) => {
        if (window.top === window.self) return;
        window.parent.postMessage({
            'func': 'callGaEvent',
            'category': category,
            'action': action,
            'label': label,
        }, `https://${site}`);
    }

    const postMessageGaParent = () => {
        if (window.top === window.self) return;

        // send completed event
        postMessageData('Survey', 'completed', email);

        const gaAnswers = decodeAnswers(currentAnswer)
        const keys = Object.keys(gaAnswers);

        keys.forEach((key,index) => {
            const q = Questions[index];
            const a = gaAnswers[key];
            const label = q.question[lang];
            const action = typeof(a) === 'object' ? a.join(',') : a;
            postMessageData('Survey',action,label);
        });
    }

    const saveData = (product, sku) => {
        const dataForSaving = {};
        for (const [key, value] of Object.entries(currentAnswer)) {
            const idxQ = key - 1;
            if (Questions[idxQ]) {
                const questionText = `${key}: ${Questions[idxQ].question[lang]}`;
                dataForSaving[questionText] = value;
            }
        }

        const gAid = gId !== null ? gId : getCookie('_gid');
        const data = { _ga: gAid, questions_answers: dataForSaving, email, product, sku, store: site };

        return fetch('https://api.cocoandeve.com/surveys', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }

    const onSubmit = (email) => {
        setCookie('quizEmail', email);
        setEmail(email);
        setSubmitted(true);
        postMessageToParentCookie('quizEmail', email);

        if (window.top !== window.self) {
            window.parent.postMessage({
                'func': 'callGaEvent',
                'category': 'Survey',
                'action': 'submitEmail',
                'label': email,
            }, `https://${site}`);
        }
    }

    const viewMyResult = () => {
        setRedirect(true);
        postMessageGaParent();
        gettingResult(true);
    }

    const postIframeHeight = (key, val) => {
        if (window.top === window.self) return;

        window.parent.postMessage({
            'func': 'updateIframeHeight',
            'key': key,
            'value': val,
        }, `https://${site}`);
    }

    const startQuiz = () => {
        postMessageData('Survey', 'started');
        setPosition('question-1');
    }

    // useEffect(() => {
    //     postIframeHeight('height', height);
    // }, [height]);

    return (
            <div className={`${currentPosition === 'start' ? 'cover' : ''} container container--survey`}>
                <div className="row justify-content-center align-items-center survey-content">
                    { currentPosition === 'start' && (
                    <>
                        <div className="col-12 col-lg-4 pt-4 text-center text-lg-start zindex-1">
                            <h1 className="pt-sm-2">{Translations[lang].heading}</h1>
                            <p className="mb-0">{Translations[lang].subheading}</p>
                            <button className="btn btn-primary text-white mt-4" onClick={() => startQuiz()}>{Translations[lang].btn.start}</button>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 survey-lp-image zindex-0">
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02a8805f-afab-4d9d-31bb-c0c245264100/828x" />
            					<source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b426a652-ee5d-4534-5039-4b10fe9a3200/828x" />
                                <img className="w-100" loading='lazy' src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02a8805f-afab-4d9d-31bb-c0c245264100/828x" alt="Tan Variants"/>
                            </picture>
                        </div>
                    </>) }

                    { currentPosition !== 'start' && currentPosition !== 'finished' && (
                        <>
                            <div className="text-center col-12 col-lg-6 px-lg-0 pt-4 pb-2 pb-lg-4">
                                <div className="mobile-wrapper">
                                <p>{Translations[lang].caption}</p>
                                <div className="progress progress bg-primary-light-second">
                                    <div className="progress-bar" style={{ width: `${progressValue}%` }} role="progressbar" defaultValue={progressValue} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="mt-2 d-inline-block">{currentQuestion}/{Questions.length}</span>
                                </div>
                            </div>
                            <div className="text-center col-12 col-lg-8">
                                    {
                                        Questions.map((item, index) => {
                                            const key = `question-${index}`;
                                            if (currentQuestion === index + 1) {
                                                switch(item.type) {
                                                case 'MultipleChoice':
                                                    return (
                                                        <QuestionBox lang={lang} currentAnswer={decodeAnswers(currentAnswer)} totalQuestions={item.answers[lang].length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question[lang]} caption={item.caption ? item.caption[lang] : ''}>
                                                            <MultipleChoice answers={item.answers[lang]}
                                                                lastFull={item.lastFull}
                                                                maxChoose={item.maxChoose}
                                                                lastDisableForAll={item.lastDisableForAll}
                                                                />
                                                        </QuestionBox>
                                                        );
                                                case 'SingleChoiceIcon':
                                                    return (
                                                        <QuestionBox lang={lang} currentAnswer={decodeAnswers(currentAnswer)} totalQuestions={item.answers[lang].length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question[lang]} caption={item.caption ? item.caption[lang] : ''}>
                                                            <SingleChoiceIcon className='single-choice-icon' answers={item.answers[lang]} icons={item.icons} buttonType={item.buttonType}/>
                                                        </QuestionBox>
                                                    )
                                                case 'SingleChoiceImage':
                                                    return (
                                                        <QuestionBox lang={lang} currentAnswer={decodeAnswers(currentAnswer)} totalQuestions={item.answers[lang].length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question[lang]} caption={item.caption ? item.caption[lang] : ''}>
                                                            <SingleChoiceImage className='single-choice-image' answers={item.answers[lang]} images={item.images}/>
                                                        </QuestionBox>
                                                    )
                                                default:
                                                    return (
                                                        <QuestionBox lang={lang} currentAnswer={decodeAnswers(currentAnswer)} totalQuestions={item.answers[lang].length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question[lang]} caption={item.caption ? item.caption[lang] : ''}>
                                                            <SingleChoice answers={item.answers[lang]} buttonType={item.buttonType}/>
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

                    { currentPosition === 'finished' && !submitted && additionalStep && !redirect && (
                        <EmailForm lang={lang} onSubmit={onSubmit} viewMyResult={viewMyResult} />
                    )
                    }

                    { currentPosition === 'finished' && submitted && additionalStep && !redirect && (
                        <ResultContent lang={lang} viewMyResult={viewMyResult}/>
                    )
                    }

                    { currentPosition === 'finished' && redirect && (
                        <div className="question-box analyzing d-flex justify-content-center align-items-center flex-column">
                            <p className="question-box__title">{Translations[lang].loading}</p>
                            <LoaderSvg className="loader mt-0 mb-0"/>
                        </div>
                    )
                    }
            </div>
        </div>
    )
};
export default Survey;
