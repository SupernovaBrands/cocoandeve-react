import { Fragment } from 'react';
import PropTypes from 'prop-types';

const RangeSlideImages = (props) => {
    const { 
        answers,
        images,
    } = props;

    return (
        <div>Range slide images</div>
    )
};

RangeSlideImages.propTypes = {
    answers: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
};

export default RangeSlideImages;
