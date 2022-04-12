import React, { Fragment, lazy, Suspense } from 'react';
// import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import Carousel from '../components/Carousel';

// import FaqAccordion from '../sections/FaqAccordion';
// import SeenIn from '../sections/SeenIn';
// import CustomerReview from '../sections/CustomerReview';
// import SectionIRL from '../sections/SectionIRL';

const ProductForm = lazy(() => import('../sections/ProductForm'));
const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductDetail = () => {
    return (
        <Fragment>
            <Suspense fallback={<div></div>}>
                <ProductForm />
                <CustomerReview />
                <SeenIn />
                <SectionIRL />
                <FaqAccordion />
            </Suspense>
        </Fragment>
    )
};
export default ProductDetail
