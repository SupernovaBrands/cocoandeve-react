import React from 'react';
import PropTypes from 'prop-types';

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

    return (
        <div className={`${colSize} col-12 d-flex flex-wrap justify-content-center`}>
            <h1 className={caption ? 'w-100' : 'w-100 mb-4'}>{question}</h1>
            { caption && (<p className="w-100 mb-4">{caption}</p>)}
            <SurveyContext.Provider value={{answerAction: answer, currentQuestion: currentQuestion}}>
                { children }
            </SurveyContext.Provider>
            <button className="mt-4 btn btn-lg btn-primary text-white" onClick={nextAction}>Next</button>
            {
                currentQuestion > 1 && (<a href="/" className="d-block text-underline text-black w-100 mt-2" onClick={prevAction}>&#60; Previous question</a>)
            }
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
};

export default QuestionBox;
