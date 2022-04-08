import React, { Fragment, lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import Carousel from '../components/Carousel';
import { Helmet } from "react-helmet";

// import FaqAccordion from '../sections/FaqAccordion';
// import SeenIn from '../sections/SeenIn';
// import CustomerReview from '../sections/CustomerReview';
// import SectionIRL from '../sections/SectionIRL';

const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductDetail = () => {
    return (
        <Fragment>
            <Helmet>
                <link rel="preload" as="image" href="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e673f56-7011-41f4-0076-c4fe81e67000/828x" imagesrcset="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e673f56-7011-41f4-0076-c4fe81e67000/828x" type="image/webp" />
                <link rel="icon" href="./favicon.ico" />
            </Helmet>
            <ProductForm />
            <Suspense fallback={<div></div>}>
                <CustomerReview />
                <SeenIn />
                <SectionIRL />
                <FaqAccordion />
            </Suspense>
        </Fragment>
    )
};
export default ProductDetail
