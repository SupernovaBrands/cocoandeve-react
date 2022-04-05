import { Fragment, lazy } from "react";
import CustomerReview from "../sections/CustomerReview";

import RangeBanner from "../sections/RangeBanner";
import RangeCarousel from "../sections/RangeCarousel";
// import RangeFormula from "../sections/RangeFormula";
// import FaqAccordion from "../sections/FaqAccordion";
import SectionIRL from "../sections/SectionIRL";
import SeenIn from "../sections/SeenIn";

const RangeFormula = lazy(() => import('../sections/RangeFormula'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));

const TanRange = () => {
    return (
        <Fragment>
            <RangeBanner />
            <RangeCarousel />
            <RangeFormula />
            <SectionIRL />
            <SeenIn />
            <FaqAccordion />
            <CustomerReview />
        </Fragment>
    )
};
export default TanRange
