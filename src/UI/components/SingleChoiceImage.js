import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SurveyContext } from './QuestionBox';
import { getCookie, setCookie } from '../../modules/Utils';

const SingleChoiceImage = (props) => {
    const { 
        answerAction, 
        currentQuestion, 
        setDisable, 
        width,
        currentAnswer,
    } = useContext(SurveyContext);
    const { 
        answers,
        images,
    } = props;

    const dataRange = [12, 38, 63, 89];
    const range = 12;
    let timing = null;

    const changeHandle = ((index) => {
        return (e) => {
            setSelectedItem(answers[index]);
            answerAction(answers[index]);
            setDisable(false);
            document.getElementById('slide-selector').value = dataRange[index];
            setCurrentSlide(dataRange[index]);
        };
    });

    const selectedRangeIndex = (number) => {
        let selectedIndex = 0;
        dataRange.forEach((item, index) => {
            const minRange = item - range;
            const maxRange = item + range;

            if (number >= minRange && number <= maxRange) {
                selectedIndex = index;
            }
        });
        return selectedIndex;
    }

    const rangeChange = (() => {
        return (e) => {
            const currentValue = e.target.value;
            const selected = selectedRangeIndex(currentValue);
            clearTimeout(timing);
            timing = setTimeout(() => {
                setSelectedItem(answers[selected]);
                answerAction(answers[selected]);
                setCurrentSlide(e.target.value);
            }, 500);
        }
    })

    const getRangeNumber = (answ) => {
        const selected = selectedRangeIndex(answ);
        const currentRange = dataRange[selected];
        return currentRange;
    }

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion] : answers[0];
    const currentSlideValue = getCookie(`slide-question-${currentQuestion}`) ? getCookie(`slide-question-${currentQuestion}`) : defaultSelected ? getRangeNumber(answers.indexOf(defaultSelected)) : range;
    const [selectedItem, setSelectedItem] = useState(defaultSelected);
    const [currentSlide, setCurrentSlide] = useState(currentSlideValue);
    setTimeout(() => {
        answerAction(defaultSelected);
        setDisable(false);
    });
    
    useEffect(() => {
        if (currentSlide) setCookie(`slide-question-${currentQuestion}`, currentSlide);
        if (width && width > 992) {
            const selected = selectedRangeIndex(currentSlide);
            answerAction(answers[selected]);
            setDisable(false);
        }
    }, [currentSlide, currentQuestion, width]);

    return (
        <div className='single-choice row position-relative w-100'>
            <input type="range" onChange={rangeChange()} className="form-range position-absolute single-choice__slide d-none d-lg-block" id="slide-selector" defaultValue={currentSlide}></input>
            {
                answers.map((item,index) => {
                    return (
                        <div key={index} className='col-6 col-lg-3 px-1 pb-sm-2'>
                            <figure onClick={changeHandle(index)}>
                                <picture className={`${item === selectedItem && window.innerWidth < 992 ? 'border border-5 border-primary' : ''} rounded rounded-circle d-block m-auto single-choice__image`}>
                                    <source type="image/webp" srcSet={images[index].webp} />
                					<source type="image/jpeg" srcSet={images[index].jpg} />
                                    <img src={`${images[index].webp}`} alt={item} className='d-block rounded rounded-circle w-100 p-0' loading="lazy"/>
                                </picture>
                                <figcaption className="pt-2 pt-lg-4">
                                    <span>{item}</span>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })
            }
        </div>
    )
};

SingleChoiceImage.propTypes = {
    answers: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
};

export default SingleChoiceImage;
