import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import Carousel from '../components/Carousel';
import ProductProvider from '../../store/ProductProvider';
import { isABTest } from "../../modules/Utils";

// import FaqAccordion from '../sections/FaqAccordion';
// import SeenIn from '../sections/SeenIn';
// import CustomerReview from '../sections/CustomerReview';
// import SectionIRL from '../sections/SectionIRL';

const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

isABTest('o3JFdSN0S1Ogpio5tWJmBg').then(({ test, value }) => {
    if (test && value === '1') {
        console.log('variant', value);
        var main = document.querySelector('main');
        var cs = document.querySelector('.customer-reviews');
        var faq = document.querySelector('.faq-accordion');
        faq.classList.add('mt-2');
        faq.classList.add('mt-lg-4');
        main.insertBefore(faq, cs);
    }
});

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm mainContent={props.mainContent} />
            <Suspense fallback={<div></div>}>
                <CustomerReview />
                <SeenIn />
                <SectionIRL />
                <FaqAccordion />
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
