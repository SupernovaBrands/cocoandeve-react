import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import Carousel from '../components/Carousel';
import ProductProvider from '../../store/ProductProvider';
import FaqProvider from '../../store/FaqProvider';
import ReviewProvider from '../../store/ReviewProvider';
import { isABTest } from "../../modules/Utils";
import IRLProvider from '../../store/IRLProvider';

const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm range={props.range} handle={props.handle} />
            <Suspense fallback={<div></div>}>
                {props.handle !== 'repairing-restoring-hair-mask' && (
                    <ReviewProvider>
                        <CustomerReview range={props.range} handle={props.handle} />
                    </ ReviewProvider>
                )}
                <ReviewProvider>
                <SeenIn handle={props.handle} range={props.range} />
                </ReviewProvider>
                <IRLProvider>
                    <SectionIRL range={props.range} handle={props.handle} />
                </IRLProvider>
                <FaqProvider>
                    <FaqAccordion range={props.range} handle={props.handle} />
                </FaqProvider>
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
