import React, { Fragment, lazy, Suspense } from 'react';

import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
// import RangeCarousel from "../sections/RangeCarousel";
// import RangeFormula from "../sections/RangeFormula";
// import FaqAccordion from "../sections/FaqAccordion";
// import SectionIRL from "../sections/SectionIRL";
// import SeenIn from "../sections/SeenIn";
// import CustomerReview from "../sections/CustomerReview";

const RangeCarousel = lazy(() => import('../sections/RangeCarousel'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const RangeFormula = lazy(() => import('../sections/RangeFormula'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));
const CustomerReview = lazy(() => import('../sections/CustomerReview'));

const TanRange = () => {
    return (
        <Fragment>
            {/* <RangeBanner /> */}
            <Suspense fallback={<div></div>}>
                {/* <RangeCarousel /> */}
                {/* <RangeFormula /> */}
                {/* <SectionIRL /> */}
                {/* <SeenIn /> */}
                {/* <FaqAccordion /> */}
                {/* <CustomerReview /> */}
            </Suspense>
        </Fragment>
    )
};
export default TanRange
