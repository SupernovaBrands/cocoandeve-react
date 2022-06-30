import React, { lazy, Suspense } from 'react';

import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
import RangeCarousel from "../sections/RangeCarousel";
import RangeProvider from "../../store/RangeProvider";
import StoreProvider from "../../store/StoreProvider";
import IRLProvider from '../../store/IRLProvider';
import FaqProvider from '../../store/FaqProvider';
import ReviewProvider from '../../store/ReviewProvider';
import ProductProvider from '../../store/ProductProvider';
// import ProductForm from '../sections/ProductForm';
// import RangeFormula from "../sections/RangeFormula";
// import FaqAccordion from "../sections/FaqAccordion";
// import SectionIRL from "../sections/SectionIRL";
// import SeenIn from "../sections/SeenIn";
// import CustomerReview from "../sections/CustomerReview";

// const RangeCarousel = lazy(() => import('../sections/RangeCarousel'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const RangeFormula = lazy(() => import('../sections/RangeFormula'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));
const CustomerReview = lazy(() => import('../sections/CustomerReview'));

const TanRange = () => {
    return (
        <RangeProvider>
            <RangeBanner range='tan' />
            <StoreProvider>
                <RangeCarousel range='tan' />
            </StoreProvider>
            <Suspense fallback={<div></div>}>
                <RangeFormula range="tan" />
                <IRLProvider>
                    <SectionIRL range="tan" />
                </IRLProvider>
                <ProductProvider>
                    <SeenIn range="tan" />
                </ProductProvider>
                <FaqProvider>
                    <FaqAccordion range="tan" />
                </FaqProvider>
                <ReviewProvider>
                    <CustomerReview range="tan" />
                </ ReviewProvider>
                {/* <ProductForm /> */}
            </Suspense>
        </RangeProvider>
    )
};
export default TanRange
