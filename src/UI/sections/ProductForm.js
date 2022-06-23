import React, { useContext, useEffect, useState } from 'react';
import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';
import ProductContext from '../../store/product-context';

import { ReactComponent as FormulaList1 } from '../../assets/skin-protection.svg';
import { ReactComponent as FormulaList2 } from '../../assets/guava.svg';
import { ReactComponent as FormulaList3 } from '../../assets/diet.svg';
import { ReactComponent as FormulaList4 } from '../../assets/clean.svg';
import { ReactComponent as FormulaList5 } from '../../assets/mitt.svg';

import PropTypes from 'prop-types';

const ProductForm = (props) => {
    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get("utm_store") || 'us';

    const productCtx = useContext(ProductContext);
    productCtx.storeChange(activeStore);

    const defaultPrice = productCtx.price;
    const defaultCompareAtPrice = productCtx.compareAtPrice;
    const defaultSaving = productCtx.saving;
    const {
        noReviews,
        variants,
        addToCart,
        hideProductCaption,
        cartPosition,
        titleHeading,
        variantSelectorStyle,
    } = props;

    const SHADES = [
        {
            id: 'medium',
            text: productCtx.shades.medium,
            class: 'medium',
        },
        {
            id: 'dark',
            text: productCtx.shades.dark,
            class: 'dark',
        },
        {
            id: 'ultra-dark',
            text: productCtx.shades.ultra,
            class: 'ultra-dark',
        }
    ]


    const [productVariants, setProductVariants] = useState(SHADES);

    useEffect(() => {
        setSelectedVariantId(SHADES[0].id);
        setSelectedVariantShadeText(SHADES[0].text);
        setSelectedVariantShadeCaption(SHADES[0].caption);
        setSelectedVariant(SHADES[0]);
    }, [productCtx]);

    const [selectedVariant, setSelectedVariant] = useState(SHADES[0]);
    const [selectedVariantId, setSelectedVariantId] = useState(SHADES[0].id); // set to the first variant as default
    const [quantity, setQuantity] = useState(1);
    const [selectedVariantShadeText, setSelectedVariantShadeText] = useState(SHADES[0].text);
    const [selectedVariantShadeCaption, setSelectedVariantShadeCaption] = useState(SHADES[0].caption);

    const [buttonUrl, setButtonUrl] = useState(`https://www.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${quantity}`);
    const onSelectedVariant = (event) => {
        const variantId = event.target.getAttribute('data-id');
        const shadeText = SHADES.find((shade) => shade.id === variantId)
        setSelectedVariantId(variantId);
        setSelectedVariantShadeText(shadeText.text);
        const url = selectedVariantId !== '' && `https://www.cocoandeve.com?itemtoadd=${variantId}&quantity=${quantity}`;
        setButtonUrl(url);
    }

    const onChangeQuantity = (qty) => {
        const url = selectedVariantId !== '' && `https://www.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${qty}`;
        setQuantity(qty);
        setButtonUrl(url);
    }

    const onAddToCart = () => {
        if (typeof addToCart === 'function') {
            addToCart(selectedVariantId, quantity);
        } else {
            if (typeof (ga) === 'function') {
                window.ga('send', 'event', {
                    eventCategory: 'Add to Cart',
                    eventAction: 'lp_pdp_cta',
                    eventLabel: 'sunny-honey-bali-bronzing-self-tan-set',
                    eventValue: 0,
                });
            }
            window.location.href = buttonUrl;
        }
    }

    setTimeout(function () {
        const mobileSwatch = document.querySelector('.product-swatch-mobile');
        const mobileSwatchTrigger = document.querySelector('.product-swatch-mobile__trigger');
        if (mobileSwatchTrigger && mobileSwatch) {
            const observerCallback = (entries) => {
                entries.forEach((entry) => {
                    if (window.innerWidth < 768) {
                        if (entry.isIntersecting) {
                            mobileSwatch.classList.remove('show');
                        } else {
                            mobileSwatch.classList.add('show');
                        }
                    }
                });
            }
            const observer = new IntersectionObserver(observerCallback);
            observer.observe(mobileSwatchTrigger);
        }
    }, 500);
    

    const getSavingSelectedVariant = () => {
        if (!selectedVariant.compare_at_price) return 0;
        const compareAtPrice = parseFloat(selectedVariant.compare_at_price.replace('$','').replace('£','').replace('€'));
        const price = parseFloat(selectedVariant.compare_at_price.replace('$','').replace('£','').replace('€'));
        const discountedPrice =  compareAtPrice - price;
        const saving = discountedPrice / compareAtPrice * 100;
        return saving;
    }
    
    return (
        <div className="product-form container px-g mb-0 mt-lg-4">
            <div className="row align-items-start">
                <ProductImageCarousel />
                <div className={`col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column ${variantSelectorStyle === 'flex' ? 'text-start': 'text-center text-lg-start'}`}>
                    <p className="font-size-lg mb-1 order-lg-1" >{productCtx.title1}</p>
                    <h1 className={`${titleHeading ? titleHeading : ''} mb-1 mb-lg-2 order-lg-1`}>{ selectedVariant && selectedVariant.product_title ? selectedVariant.product_title : productCtx.title2 }</h1>
                    { !noReviews && (
                        <div className="d-flex mb-0 mb-lg-1 justify-content-center justify-content-lg-start order-lg-0">
                            <ReviewStar score={4.8} />
                            <span className='d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1'><span className='d-none d-lg-inline-block'>4.8 stars</span> <a className="link-secondary text-underline" href="https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set#write-a-review">(220)</a></span>
                        </div>
                    )}
                    { !hideProductCaption && (
                        <p className="font-size-lg d-none d-lg-block order-lg-2" dangerouslySetInnerHTML={{ __html: productCtx.description }}></p>
                    )}
                    { !selectedVariant.price && (
                        <p className="my-1 order-lg-2 d-block">
                            <span className="text-linethrough mr-25 text-muted h2 d-inline-block mb-0">{defaultCompareAtPrice}</span>
                            <span className="mr-25 text-nowrap ms-1 h2 d-inline-block mb-0">{defaultPrice}</span>
                            <span className="text-primary text-nowrap text-save p-1 h2 fw-normal d-inline-block mb-0 py-0">({defaultSaving})</span>
                        </p>
                    )}
                    {  selectedVariant.price && (
                        <p className="my-1 order-lg-2">
                            { selectedVariant.compare_at_price && (<span className="text-linethrough mr-25 text-muted h2 ">{selectedVariant.compare_at_price}</span>)}
                            <span className="mr-25 text-nowrap ms-1 h2 ">{selectedVariant.price}</span>
                            { selectedVariant.compare_at_price && (<span className="text-primary text-nowrap text-save p-1 h2 fw-normal">(Save {getSavingSelectedVariant()}%)</span>)}
                        </p>
                    )}
                    <hr className="mb-2 bg-primary-light-second mt-0 order-lg-2 d-none d-lg-block"/>
                    <div className={`${variantSelectorStyle === 'flex' ? 'd-flex mb-2 justify-content-start' : 'd-grid gap-2 justify-content-center justify-content-lg-start d-md-flex'} mb-lg-2 align-items-center order-lg-2`}>
                        <div className="product-swatch d-flex align-items-center justify-content-center">
                            {productVariants.map((shade) => (
                                <button key={shade.id} type="button" onClick={onSelectedVariant} data-variant className={`${variantSelectorStyle === 'flex' ? 'me-1' : ''} variant-swatch ${shade.class} ${ selectedVariantId === shade.id ? 'border-primary' : ''}`} data-id={shade.id}></button>
                            ))}
                        </div>
                        <span className={`${selectedVariantShadeCaption ? 'fw-bold' : 'mb-1' } mb-lg-0 mg-lg-0`}>
                            {selectedVariantShadeText}
                            { selectedVariantShadeCaption && (<span className='fw-normal w-100 d-block text-start'>{selectedVariantShadeCaption}</span>)}
                        </span>
                    </div>
                    <p className="d-none bg-gray-100 p-1 rounded mb-2 order-lg-2">Not sure which shade to get? Check our <a href="">Shades Guide</a></p>
                    <div className="product-swatch-mobile__trigger order-lg-3">
                            <div className="product-form-submit mb-3 position-relative">
                                <div className="d-flex">
                                    <div className="react-quantity-box d-none d-lg-block">
                                    <QuantityBox
                                        quantity='1'
                                        onChangeQuantity={onChangeQuantity}
                                    />
                                    </div>
                                    <button key="ProductFormButton2" className="btn btn-lg btn-primary ms-lg-g w-100 text-white" type="submit" onClick={onAddToCart}>{productCtx.atc}</button>
                                </div>
                            </div>
                    </div>
                    <hr className="mb-2 bg-primary-light-second mt-0 order-lg-2"/>
                    <h2 className='d-block d-lg-none order-lg-2'>All you need for a perfect tan</h2>
                    <ul className={`${cartPosition === 'top' ? 'order-lg-4' : ''} list-unstyled row mb-4 text-start order-lg-2`}>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList1 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            {productCtx.benefits.formula1}
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList2 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            {productCtx.benefits.formula2}
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList3 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            {productCtx.benefits.formula3}
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList4 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            {productCtx.benefits.formula4}
                        </li>
                        <li className='col-12 d-flex align-items-center'>
                            <FormulaList5 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            {productCtx.benefits.formula5}
                        </li>
                    </ul>
                    <div className='fixed-bottom d-lg-none mx-g mb-2 product-swatch-mobile'>
                        <button className='d-flex btn btn-primary btn-lg px-2 w-100' onClick={onAddToCart}>
                            <span className="text-white w-100 m-0 d-block text-start" >Add to cart</span>
                            <p className="d-block m-0">
                                <span className="text-white text-linethrough mr-25 text-nowrap fw-normal">{defaultCompareAtPrice}</span>
                                <span className="text-white mr-25 text-nowrap ms-1">{defaultPrice}</span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

ProductForm.propTypes = {
    addToCart: PropTypes.func,
    noReviews: PropTypes.bool,
    variants: PropTypes.array,
    cartPosition: PropTypes.string,
    hideProductCaption: PropTypes.bool,
    titleHeading: PropTypes.string,
    variantSelectorStyle: PropTypes.string,
};

export default ProductForm
