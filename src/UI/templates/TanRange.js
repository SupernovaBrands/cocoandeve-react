import { Fragment } from "react";
import MagicIRL from "../sections/MagicIRL";
import RangeBanner from "../sections/RangeBanner";
import RangeCarousel from "../sections/RangeCarousel";
import RangeFormula from "../sections/RangeFormula";

const TanRange = () => {
    return (
        <Fragment>
            <RangeBanner />
            <RangeCarousel />
            <RangeFormula />
            <MagicIRL />
        </Fragment>
    )
};
export default TanRange
