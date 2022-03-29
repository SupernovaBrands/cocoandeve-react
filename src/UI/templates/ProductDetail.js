import React, { useState } from 'react';
import { Fragment } from 'react';
import ProductForm from '../sections/ProductForm';
import FaqAccordion from '../sections/FaqAccordion';
import SeenIn from '../sections/SeenIn';
import CustomerReview from '../sections/CustomerReview';

const ProductDetail = () => {
    return (
        <Fragment>
            <ProductForm />
            <CustomerReview />
            <FaqAccordion />
            <SeenIn />
        </Fragment>
    )
};
export default ProductDetail