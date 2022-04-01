import React, { useEffect, useState } from "react";
import Questions from "../../data/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';
import RangeSlideIcon from '../components/RangeSlideIcon';
import RangeSlideImages from '../components/RangeSlideImages';
import CountrySelect from '../components/CountrySelect';
import ProductForm from '../sections/ProductForm';

import { setCookie, getCookie } from "../../scripts/Utils";

const Survey = () => {
    
    // initial data
    const initialState = getCookie('surveyPosition') || 'start';
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const answerData = getCookie('answeredQuestion') ? JSON.parse(getCookie('answeredQuestion')) : {};


    console.log(initialState, 'testing');
    // states
    const [currentPosition, setPosition] = useState(initialState);
    const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [progressValue, setProgress] = useState(currentQuestion / Questions.length * 100);
    const [currentAnswer, setAnswer] = useState(answerData);

    // handler hook side effect when state changed
    useEffect(() => {
        if (currentPosition === 'start') {
            document.body.classList.add('bg-primary-light-second');        
        } else {
            document.body.classList.remove('bg-primary-light-second');
        }

        console.log(currentPosition, 'testing bro');
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
        } else if (questionIndex >= Questions.length) {
            setCookie('surveyPosition', 'finished');
            setPosition('finished');
        }
    } 

    return (
            <div className="container">
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
                            <div className="text-center col-12 col-lg-6 px-lg-0 py-lg-4">
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
                                                        <QuestionBox totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
                                                            <MultipleChoice answers={item.answers} 
                                                                lastFull={item.lastFull} 
                                                                maxChoose={item.maxChoose}
                                                                lastDisableForAll={item.lastDisableForAll}
                                                                />
                                                        </QuestionBox>
                                                        );
                                                case 'RangeSlideIcon':
                                                    return (
                                                        <QuestionBox totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question} caption={item.caption}>
                                                            <RangeSlideIcon answers={item.answers} icons={item.icons}/>
                                                        </QuestionBox>
                                                    )
                                                case 'RangeSlideImages':
                                                    return (
                                                        <QuestionBox totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="" question={item.question} caption={item.caption}>
                                                            <RangeSlideImages answers={item.answers} images={item.images}/>
                                                        </QuestionBox>
                                                    )
                                                case 'CountrySelect':
                                                    return (
                                                        <QuestionBox totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
                                                            <CountrySelect answers={item.answers} placeholder="(Choose country)"/>
                                                        </QuestionBox>
                                                        );
                                                default:
                                                    return (
                                                        <QuestionBox totalQuestions={item.answers.length} answerAction={answerAction} setCurrentQuestion={setQuestionState} currentQuestion={currentQuestion} key={key} colSize="col-lg-10 offset-lg-1" question={item.question} caption={item.caption}>
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
                                <ProductForm/>
                            </>
                        )
                    }
            </div>
        </div>
    )
};
export default Survey;
    