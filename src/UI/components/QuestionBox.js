import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getCookie } from '../../modules/Utils';

export const SurveyContext = React.createContext();
const QuestionBox = (props) => {
    const {
        question,
        caption,
        children,
        colSize,
        currentQuestion,
        setCurrentQuestion,
        answerAction,
        width,
        height,
    } = props;

    const prevAction = (e) => {
        setCurrentQuestion(currentQuestion - 1);
        e.preventDefault();
    }

    const nextAction = (e) => {
        setCurrentQuestion(currentQuestion + 1);
        e.preventDefault();
    }

    const answer = (data) => {
        answerAction(currentQuestion, data);
    }

    const defaultSelected = getCookie('answeredQuestion') ? JSON.parse(getCookie('answeredQuestion'))[currentQuestion] : null;
    const [isDisabled, setDisable] = useState(defaultSelected ? false : true);

    return (
        <div className={`${colSize} col-12 d-flex flex-wrap justify-content-center`}>
            <h1 className={caption ? 'w-100' : 'w-100 mb-4'}>{question}</h1>
            { caption && (<p className="w-100 mb-4">{caption}</p>)}
            <SurveyContext.Provider value={{answerAction: answer, currentQuestion: currentQuestion, width, height, setDisable: setDisable }}>
                { children }
            </SurveyContext.Provider>
            <div className="footer-action w-100">
                <button className="mt-4 btn btn-lg btn-primary text-white" onClick={nextAction} disabled={isDisabled}>Next</button>
                {
                    currentQuestion > 1 && (<a href="/" className="d-block text-underline text-black w-100 mt-2" onClick={prevAction}>&#60; Previous question</a>)
                }
            </div>
        </div>
    )
};

QuestionBox.propTypes = {
	question: PropTypes.string.isRequired,
    caption: PropTypes.string,
    colSize: PropTypes.string,
    currentQuestion: PropTypes.number,
    setCurrentQuestion: PropTypes.func,
    answerAction: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default QuestionBox;
