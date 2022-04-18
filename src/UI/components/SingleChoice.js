import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { SurveyContext } from './QuestionBox';

const SingleChoice = (props) => {
    const {
        answers,
        buttonType,
    } = props;

    const { 
        answerAction, 
        currentQuestion, 
        setDisable,
        currentAnswer,
    } = useContext(SurveyContext);

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion] : null;

    const [selectedItem, setSelectedItem] = useState(defaultSelected);

    const selectItem = (answersIndex) => {
        const selected = answers[answersIndex];
        setSelectedItem(selected);
        answerAction(selected);
        setDisable(false);
    };

    const classesCol = buttonType === 'full' ? 'col-12' : 'col-6';

    return (
                answers.map((answer, index) => {
                    const classes = answer === selectedItem ? 'border-primary bg-primary-light-second' : 'border-light';
                    return (
                        <div key={index} className={`${classesCol} mt-2 mobile-wrapper`}>
                            <button className={`${classes} btn btn-lg w-100 btn-outline text-black fw-normal border-1 py-2`}
                                onClick={() => selectItem(index)}>
                                {answer}
                            </button>
                        </div>
                    );
                })            
        )
};

SingleChoice.propTypes = {
    answers: PropTypes.array.isRequired,
    buttonType: PropTypes.string,
};

export default SingleChoice;
