import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import Carousel from '../components/Carousel';
import ProductProvider from '../../store/ProductProvider';
import FaqProvider from '../../store/FaqProvider';
import ReviewProvider from '../../store/ReviewProvider';
import { isABTest } from "../../modules/Utils";

const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm mainContent={props.mainContent} />
            <Suspense fallback={<div></div>}>
                <ReviewProvider>
                    <CustomerReview />
                </ ReviewProvider>
                <SeenIn />
                <SectionIRL />
                <FaqProvider>
                    <FaqAccordion />
                </FaqProvider>
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
