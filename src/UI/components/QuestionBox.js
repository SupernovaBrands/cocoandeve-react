import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Questions from '../../modules/questions';

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
        currentAnswer,
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

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion] : null;
    const [isDisabled, setDisable] = useState(defaultSelected ? false : true);
    const isLastQuestion = Questions.length === currentQuestion;

    return (
        <div className={`${colSize} col-12 d-flex flex-wrap justify-content-center question-box mobile-wrapper`}>
                <p className={`${caption ? 'w-100' : 'w-100 mb-4'} question-box__title`}>{question}</p>
                { caption && (<p className="w-100 mb-4">{caption}</p>)}
                <SurveyContext.Provider value={{answerAction: answer, currentQuestion: currentQuestion, width, height, setDisable: setDisable, currentAnswer }}>
                    { children }
                </SurveyContext.Provider>
                <div className="footer-action w-100 fixed-sm-bottom pb-2 bg-white">
                    <button className="mt-2 mt-lg-4 btn btn-lg btn-primary text-white btn-next" onClick={nextAction} disabled={isDisabled}>{ isLastQuestion ? 'See results!' : 'Next' }</button>
                    {
                        currentQuestion > 1 && (<a href="/" className="d-block text-underline text-black w-100 mt-2 mb-lg-4" onClick={prevAction}>Previous question</a>)
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
    currentAnswer: PropTypes.object,
};

export default QuestionBox;
