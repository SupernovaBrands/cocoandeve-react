import PropTypes from 'prop-types';
import { ReactComponent as SunSvg } from '../../assets/sun.svg';
import { ReactComponent as CloudRainSvg } from '../../assets/cloud-rain.svg';
import { useContext, useState, useRef } from 'react';
import { SurveyContext } from './QuestionBox';
import { getCookie } from '../../modules/Utils';

const SingleChoiceIcon = (props) => {
    const ctx = useContext(SurveyContext);
    const { 
        answers,
        icons,
        buttonType,
    } = props;

    const LoadSvg = ({ name, ...rest }) => {
        if (name === 'sun') {
            return (<SunSvg {...rest} />)
        }
        return (<CloudRainSvg {...rest} />);
    };

    const changeHandle = ((index) => {
        return (e) => {
            setSelectedItem(answers[index]);
            ctx.answerAction(answers[index]);
        };
    });

    const defaultSelected = getCookie('answeredQuestion') 
        && JSON.parse(getCookie('answeredQuestion'))[ctx.currentQuestion] ? JSON.parse(getCookie('answeredQuestion'))[ctx.currentQuestion] : answers.at(0);

    const [selectedItem, setSelectedItem] = useState(defaultSelected);
    const classesCol = buttonType === 'full' ? 'col-12' : 'col-6';

    return (
        <div className='col-12 col-lg-10 single-choice single-choice--icon d-flex flex-wrap justify-content-center p-lg-0'>
            {

                ctx.width > 991 && answers.map((item,index) => {
                    // const image = images[index];
                    return (
                        <div key={index} className='col-6 col-lg-4 px-1 px-lg-0'>
                            <div onClick={changeHandle(index)}>
                                <div className={`${index === 0 ? 'text-start' : index === answers.length - 1 ? 'text-end': ''} single-choice__icon-box`}>
                                { icons[index] && (
                                    <LoadSvg name={icons[index]} />
                                )}
                                </div>
                                <div className="pt-2 pt-lg-0">
                                    <div className={`${item === selectedItem ? 'selected' : ''} single-choice__lines position-relative d-none d-lg-block`}>
                                        <hr className={`${index === 0 ? 'rounded-start' : index + 1 === answers.length ? 'rounded-end' : '' } single-choice__lines__hr bg-primary-light-second`} size="2"/>
                                    </div>
                                    <p className="single-choice__title">{item}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                ctx.width < 992 && answers.map((answer, index) => {
                    const classes = answer === selectedItem ? 'border-primary bg-primary-light-second' : 'border-light';
                    return (
                        <div key={index} className={`${classesCol} mt-2`}>
                            <button className={`${classes} btn btn-lg w-100 btn-outline text-black fw-normal border-1 py-2`}
                                onClick={changeHandle(index)}>
                                {answer}
                            </button>
                        </div>
                    );
                })            

            }
        </div>
    )
};

SingleChoiceIcon.propTypes = {
    answers: PropTypes.array.isRequired,
    icons: PropTypes.array.isRequired,
    buttonType: PropTypes.string,
};

export default SingleChoiceIcon;
