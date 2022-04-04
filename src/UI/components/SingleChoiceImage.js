import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SurveyContext } from './QuestionBox';
import { getCookie } from '../../modules/Utils';

const SingleChoiceImage = (props) => {
    const ctx = useContext(SurveyContext);
    const { 
        answers,
        // images,
    } = props;

    const changeHandle = ((index) => {
        return (e) => {
            setSelectedItem(answers[index]);
            ctx.answerAction(answers[index]);
        };
    });

    const defaultSelected = getCookie('answeredQuestion') 
        && JSON.parse(getCookie('answeredQuestion'))[ctx.currentQuestion] ? JSON.parse(getCookie('answeredQuestion'))[ctx.currentQuestion] : answers.at(0);

    const [selectedItem, setSelectedItem] = useState(defaultSelected);

    return (
        <div className='single-choice d-flex flex-wrap justify-content-center'>
            {
                answers.map((item,index) => {
                    // const image = images[index];
                    return (
                        <div key={index} className='col-6 col-lg-3 px-1'>
                            <figure onClick={changeHandle(index)}>
                                <picture>
                                    <img src={`//via.placeholder.com/375x375?text=${index + 1}`} alt={item} className={`${item === selectedItem && ctx.width < 992 ? 'border border-5 border-primary' : ''} d-block rounded rounded-circle w-100 p-0 p-lg-1`}/>
                                </picture>
                                <figcaption className="pt-2 pt-lg-0">
                                    <div className={`${item === selectedItem ? 'selected' : ''} single-choice__lines position-relative ms-n1 me-n1 d-none d-lg-block`}>
                                        <hr className={`${index === 0 ? 'rounded-start' : index + 1 === answers.length ? 'rounded-end' : '' } single-choice__lines__hr bg-primary-light-second`} size="2"/>
                                    </div>
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
