import React, { lazy, Suspense } from 'react';
import RangeProvider from "../../store/RangeProvider";
import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
import RangeCarousel from "../sections/RangeCarousel";
const AmazonHairRange = () => {
	return (
		<RangeProvider>
			<RangeBanner range='amazonHair' />
			<RangeCarousel range='amazonHair' />
		</RangeProvider>
	);
};

export default AmazonHairRange;
