import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import Carousel from '../components/Carousel';
import ProductProvider from '../../store/ProductProvider';
import { isABTest } from "../../modules/Utils";
import IRLProvider from '../../store/IRLProvider';

const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm mainContent={props.mainContent} />
            <Suspense fallback={<div></div>}>
                <CustomerReview />
                <SeenIn />
                <IRLProvider>
                    <SectionIRL />
                </IRLProvider>
                <FaqAccordion />
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
