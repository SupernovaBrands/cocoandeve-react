import { Fragment, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";


import RangeBanner from "../sections/RangeBanner";
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
            <Helmet>
                <link rel="preload" as="image" href="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/1400x" media="(min-width: 768px)" imagesrcset="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/1400x" type="image/webp" />
                <link rel="preload" as="image" href="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x" media="(max-width: 767px)" imagesrcset="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x" type="image/webp" />
                <link rel="icon" href="/public/favicon.ico" />
            </Helmet>
            <RangeBanner />
            <Suspense fallback={<div></div>}>
                <RangeCarousel />
                <RangeFormula />
                <SectionIRL />
                <SeenIn />
                <FaqAccordion />
                <CustomerReview />
            </Suspense>
        </Fragment>
    )
};
export default TanRange
