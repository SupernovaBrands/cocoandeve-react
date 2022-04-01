import PropTypes from 'prop-types';
import { Fragment } from 'react';

const RangeSlideIcon = (props) => {
    const { 
        answers,
        icons,
    } = props;

    answers.forEach((answer) => console.log(answer));

    return (
        <>
            <div className="col-12 col-lg-10 px-lg-1">
                <input type="range" className="form-range" id="customRange1"/>
            </div>
        </>
    )
};

RangeSlideIcon.propTypes = {
    answers: PropTypes.array.isRequired,
    icons: PropTypes.array.isRequired,
};

export default RangeSlideIcon;
