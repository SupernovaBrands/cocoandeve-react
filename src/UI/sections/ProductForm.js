import React, { useEffect, useState } from 'react';
import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';

import { ReactComponent as FormulaList1 } from '../../assets/skin-protection.svg';
import { ReactComponent as FormulaList2 } from '../../assets/guava.svg';
import { ReactComponent as FormulaList3 } from '../../assets/diet.svg';
import { ReactComponent as FormulaList4 } from '../../assets/clean.svg';
import { ReactComponent as FormulaList5 } from '../../assets/mitt.svg';

import PropTypes from 'prop-types';

const ProductForm = (props) => {
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
            text: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            class: 'medium',
        },
        {
            id: 'dark',
            text: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            class: 'dark',
        },
        {
            id: 'ultra-dark',
            text: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
            class: 'ultra-dark',
        }
    ]


    const [productVariants, setProductVariants] = useState(variants ? variants : SHADES);

    useEffect(() => {
        if (variants) {
            setProductVariants(variants);
            setSelectedVariantId(variants[0].id);
            setSelectedVariantShadeText(variants[0].text);
            setSelectedVariantShadeCaption(variants[0].caption);
            setSelectedVariant(variants[0]);
        }
    }, [variants]);

    const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);
    const [selectedVariantId, setSelectedVariantId] = useState(productVariants[0].id); // set to the first variant as default
    const [quantity, setQuantity] = useState(1);
    const [selectedVariantShadeText, setSelectedVariantShadeText] = useState(productVariants[0].text);
    const [selectedVariantShadeCaption, setSelectedVariantShadeCaption] = useState(productVariants[0].caption);

    const [buttonUrl, setButtonUrl] = useState(`https://www.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${quantity}`);
    const onSelectedVariant = (event) => {
        const variantId = event.target.getAttribute('data-id');
        const shadeText = productVariants.find((shade) => shade.id === variantId)
        setSelectedVariantId(variantId);
        setSelectedVariantShadeText(shadeText.text);
        const url = selectedVariantId !== '' && `https://www.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${quantity}`;
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
        console.log('', selectedVariant);
        if (!selectedVariant.compare_at_price) return 0;
        const compareAtPrice = parseFloat(selectedVariant.compare_at_price.replace('$','').replace('£','').replace('€'));
        const price = parseFloat(selectedVariant.compare_at_price.replace('$','').replace('£','').replace('€'));
        const discountedPrice =  compareAtPrice - price;
        const saving = discountedPrice / compareAtPrice * 100;
        return saving;
    }
    
    return (
        <div className="container px-g mb-0 mt-lg-4">
            <div className="row align-items-start">
                <ProductImageCarousel />
                <div className={`col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column ${variantSelectorStyle === 'flex' ? 'text-start': 'text-center text-lg-start'}`}>
                    <p className="font-size-lg mb-1 order-lg-1">Sunny Honey</p>
                    <h1 className={`${titleHeading ? titleHeading : ''} mb-1 mb-lg-2 order-lg-1`}>{ selectedVariant && selectedVariant.product_title ? selectedVariant.product_title : 'Bali Bronzing Bundle' }</h1>
                    { !noReviews && (
                        <div className="d-flex mb-0 mb-lg-1 justify-content-center justify-content-lg-start order-lg-0">
                            <ReviewStar score={4.8} />
                            <span className='d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1'><span className='d-none d-lg-inline-block'>4.8/5.0</span> <a href="https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set#write-a-review">220 Reviews</a></span>
                        </div>
                    )}
                    { !hideProductCaption && (
                        <p className="font-size-lg d-none d-lg-block order-lg-2">The only self-tanner you need ever need. <br/>100% Natural DHA. Cruelty Free. Vegan. </p>
                    )}
                    { !selectedVariant.price && (
                        <p className="my-1 order-lg-2">
                            <span className="text-linethrough mr-25 text-muted h2 ">$89.80</span>
                            <span className="mr-25 text-nowrap ms-1 h2 ">$62.80</span>
                            <span className="text-primary text-nowrap text-save p-1 h2 fw-normal">(Save 30%)</span>
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
                                    <button key="ProductFormButton2" className="btn btn-lg btn-primary ms-lg-g w-100 text-white" type="submit" onClick={onAddToCart}>Add to Cart</button>
                                </div>
                            </div>
                    </div>
                    <hr className="mb-2 bg-primary-light-second mt-0 order-lg-2"/>
                    <h2 className='d-block d-lg-none order-lg-2'>All you need for a perfect tan</h2>
                    <ul className={`${cartPosition === 'top' ? 'order-lg-4' : ''} list-unstyled row mb-4 text-start order-lg-2`}>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList1 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Blurs pigmentation and perfects skin.
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList2 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Tropical mango and guava scent<br />(no biscuit smell!)
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList3 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Lightweight, non-sticky formula.
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormulaList4 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Developed with a green-grey base for a natural looking, golden glow with no orangey tones.
                        </li>
                        <li className='col-12 d-flex align-items-center'>
                            <FormulaList5 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Soft tanning mitt and kabuki brush for a perfect fuss-free application.
                        </li>
                    </ul>
                    <div className='fixed-bottom d-lg-none mx-g mb-2 product-swatch-mobile'>
                        <button className='d-flex btn btn-primary btn-lg px-2 w-100' onClick={onAddToCart}>
                            <span className="text-white w-100 m-0 d-block text-start" >Add to cart</span>
                            <p className="d-block m-0">
                                <span className="text-white text-linethrough mr-25 text-nowrap fw-normal">$89.80</span>
                                <span className="text-white mr-25 text-nowrap ms-1">$62.80</span>
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
