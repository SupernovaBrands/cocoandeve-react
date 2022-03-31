import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarIcon } from '../../assets/pink-star.svg';

const ReviewStar = (props) => {
	const full = Math.floor(props.score);
	const line = 5 - Math.ceil(props.score);
	const half = 5 - full - line;
	
	const stars = [];
	for (let x = 0; x < full; x += 1) {
		stars.push(<StarIcon key={`rs1${x}`} />);
	}
	for (let x = 0; x < half; x += 1) {
		stars.push(<StarIcon key={`rs2${x}`} />);
	}
	for (let x = 0; x < line; x += 1) {
		stars.push(<StarIcon key={`rs3${x}`} />);
	}

	return (
		<div className="d-flex">
			{stars}
		</div>
	);
};

ReviewStar.propTypes = {
	score: PropTypes.number.isRequired,
};

export default ReviewStar;
