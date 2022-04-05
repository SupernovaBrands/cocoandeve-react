import React from 'react';
import { Fragment } from 'react';
import ProductForm from '../sections/ProductForm';

import FaqAccordion from '../sections/FaqAccordion';
import SeenIn from '../sections/SeenIn';
import CustomerReview from '../sections/CustomerReview';
import SectionIRL from '../sections/SectionIRL';

// const CustomerReview = lazy(() => import('../sections/CustomerReview'));
// const SeenIn = lazy(() => import('../sections/SeenIn'));
// const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
// const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductDetail = () => {
    return (
        <Fragment>
            <ProductForm />
            <CustomerReview />
            <SeenIn />
            <SectionIRL />
            <FaqAccordion />
        </Fragment>
    )
};
export default ProductDetail