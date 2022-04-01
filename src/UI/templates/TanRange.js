import { Fragment } from "react";
import CustomerReview from "../sections/CustomerReview";
import FaqAccordion from "../sections/FaqAccordion";
import RangeBanner from "../sections/RangeBanner";
import RangeCarousel from "../sections/RangeCarousel";
import RangeFormula from "../sections/RangeFormula";
import SectionIRL from "../sections/SectionIRL";
import SeenIn from "../sections/SeenIn";

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
