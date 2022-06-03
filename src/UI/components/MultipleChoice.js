import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SurveyContext } from './QuestionBox';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Check } from '../../assets/check.svg';

const MultipleChoice = (props) => {
    const {
        answerAction,
        currentQuestion,
        setDisable,
        currentAnswer,
    } = useContext(SurveyContext);
    const {
        answers,
        lastFull,
    } = props;

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion].split(",") : [];
    const [selectedItems, setSelectedItems] = useState(defaultSelected);

    let disableData = false;
    if (defaultSelected && selectedItems.length === 1) {
        const disableAllButtons = answers.find((item) => item.label === defaultSelected[0]);
        if (disableAllButtons && disableAllButtons.type === 'checkboxAll') disableData = true;
    }

    const [disableRest, setDisableRest] = useState(disableData);

    const clearOther = () => {
        let currentItems = [...selectedItems];
        currentItems = currentItems.filter((item,index)=> !item.includes('other:'))
        setSelectedItems(currentItems);
        answerAction(currentItems);
    }

    const updateItems = (text, disableAll = false) => {
        let currentItems = [...selectedItems];
        if (text.includes('other:')) {
            // clear other answer
            currentItems = currentItems.filter((item,index)=> !item.includes('other:'))
            if (text.trim() !== 'other:') currentItems.push(text);
        } else {
            // clear when disableAll
            if (disableAll) {
                currentItems = [];
                setDisableRest(true);
            } else {
                setDisableRest(false)
            }

            const disableType = answers.find((answer) => answer.type === 'checkboxAll');

            if (disableType)
                currentItems = currentItems.filter((item) => item !== disableType.label);

            if (currentItems.includes(text)) {
                // slice item
                const curIndex = currentItems.indexOf(text);
                currentItems.splice(curIndex, 1);
            } else {
                // push item
                currentItems.push(text);
            }
        }
        setDisable(false);
        setSelectedItems(currentItems);
        answerAction(currentItems);
    };

    const chooseItems = (index) => {
        return (e) => {
            if (e.target.localName === 'input') { // execute only for target label, since click on label would trigger click by input also
                updateItems(answers[index].label, answers[index].type === 'checkboxAll');
            }
        }
    };

    const inputChangeHandle = (e) => {
        if (e.target.value) {
            updateItems(`other: ${e.target.value}`);
        } else if (e.target.value === '') {
            clearOther();
        }
    };

    return (
        <div className="row">
            {answers.map((answer, index) => {
                const full = lastFull && index + 1 === answers.length ? 'col-12' : 'col-6';
                if (answer.type !== 'input') {
                    return (
                        <div key={index} className={full}>
                            <div className={`${disableRest && !selectedItems.includes(answer.label) ? 'disabled' : ''} ${selectedItems.includes(answer.label) ? 'border-primary bg-primary-light-second' : 'border-light'} d-flex rounded border border-1 text-start justify-content-start align-items-center mb-2`}>
                                <label className={`${answer.type === 'checkboxNumber' ? 'd-flex checkbox-number align-items-center px-sm-1' : 'd-flex checkbox-number align-items-center'} w-100 p-2`} htmlFor={`${index}-flexCheckDefault`} onClick={chooseItems(index)}>
                                    { answer.type === 'checkboxNumber' && selectedItems.includes(answer.label) && (
                                        <span className="multiple-choice-counter
                                            fade-in-left d-inline-flex
                                            justify-content-center
                                            bg-white rounded-circle align-items-center me-1 text-primary">{selectedItems.indexOf(answer.label) + 1}</span>
                                    )}
                                    <input className='d-none' type="checkbox" defaultChecked={selectedItems.includes(answer.label)} value={answer} id={`${index}-flexCheckDefault`}/>
                                    <div className={`${answer.type !== 'checkbox' ? 'd-none' : ''} ${selectedItems.includes(answer.label) ? 'border-0 bg-primary': ''} custom-check me-1 mt-0 form-check-input text-center d-flex align-items-center justify-content-center`}>
                                        <Check className={`${!selectedItems.includes(answer.label) ? 'd-none': ''} svg text-white`}/>
                                    </div>
                                    { answer.label }
                                </label>
                            </div>
                        </div>
                    )
                }

                const otherFilled = selectedItems.find((item) => item.includes('other:'));
                const textOther = otherFilled ? otherFilled.replace('other: ','') : '';
                return (
                    <div key={index} className={full}>
                        <div className='input-group'>
                            <input className={`${textOther ? 'border-end-0 border-primary bg-primary-light-second' : ''} form-control h-auto py-2 text-black`} type='text' value={textOther} onChange={inputChangeHandle} placeholder={answer.label}/>
                            { textOther && (
                                <button onClick={clearOther} className={`${textOther ? 'border-primary bg-primary-light-second' : ''} btn border border-start-0 ps-0 pe-2`} type="button" id="inputGroupFileAddon04">
                                    <Close/>
                                </button>
                                )
                            }
                        </div>
                    </div>
                );
            })
        }</div>
        )
};

MultipleChoice.propTypes = {
    answers: PropTypes.array.isRequired,
    lastFull: PropTypes.bool,
};

export default MultipleChoice;
