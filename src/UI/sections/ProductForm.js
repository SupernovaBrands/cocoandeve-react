import React, { useState } from 'react';
import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';

import { ReactComponent as FormulaList1 } from '../../assets/formula-list-1.svg';
import { ReactComponent as FormulaList2 } from '../../assets/formula-list-2.svg';
import { ReactComponent as FormulaList3 } from '../../assets/formula-list-3.svg';
import { ReactComponent as FormulaList4 } from '../../assets/formula-list-4.svg';

const ProductDetail = () => {
    const SHADES = [
        {
            id: '32068891541539',
            text: 'Medium - Subtle glow, lighter skin tones',
            class: 'medium',
        },
        {
            id: '32068891607075',
            text: 'Dark - Subtle glow, lighter skin tones',
            class: 'dark',
        },
        {
            id: '32068891639843',
            text: 'Ultra Dark - Subtle glow, lighter skin tones',
            class: 'ultra-dark',
        }
    ]

    const [selectedVariantId, setSelectedVariantId] = useState('32068891541539');
    const [selectedVariantShadeText, setSelectedVariantShadeText] = useState('Medium - Subtle glow, lighter skin tones')
    const onSelectedVariant = (event) => {
        const variantId = event.target.getAttribute('data-id');
        const shadeText = SHADES.find((shade) => shade.id === variantId)
        setSelectedVariantId(variantId);
        setSelectedVariantShadeText(shadeText.text);
    }

    return (
        <div class="container px-g mb-4 mt-lg-5">
            <div class="row align-items-start">
                <ProductImageCarousel />
                <div class="col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column">
                    <div className="d-flex mb-1">
                        <ReviewStar score={5} />
                        <span className="d-block yotpo-widget__total mt-lg-0 ms-lg-1">4.8/5.0 220 Reviews</span>
                    </div>
                    <p class="font-size-lg order-lg-0 mb-1">Sunny Honey</p>
                    <h1 class="mb-2 order-lg-0">Bali Bronzing Bundle</h1>
                    <p class="font-size-lg">1x Bali Bronzing Foam 200ml<br/>1x Deluxe Vegan Kabuki Brush<br/>1x Hypoallergenic Soft Velvet Mitt</p>
                    <p class="my-1 font-size-lg font-weight-bold">
                        <span class="text-primary mr-25 text-nowrap" data-variant-available="true" data-variant-price="$59.90">$59.90</span>
                        <span class="text-linethrough mr-25 text-nowrap">$96.80</span>
                        <span class="text-primary text-nowrap text-save p-1">(Save 38%)</span>
                    </p>
                    <hr className="mb-2 bg-primary mt-0"/>
                    <div className='d-grid gap-2 d-md-flex mb-lg-2 justify-content-center  justify-content-lg-start align-items-center'>
                        <div className="product-swatch d-flex align-items-center justify-content-center">
                            {SHADES.map((shade) => (
                                <button type="button" onClick={onSelectedVariant} data-variant className={`variant-swatch mr-2 ${shade.class} ${ selectedVariantId === shade.id ? 'border-primary' : ''}`} data-id={shade.id}></button>
                            ))}
                        </div>
                        <span className='mb-1 mg-lg-0'>{selectedVariantShadeText}</span>
                    </div>
                    <p className="d-block bg-gray-100 p-1 rounded mb-2">Not sure which shade to get? Check our <a href="">Shades Guide</a></p>
                    <div class="product-swatch-mobile__trigger order-lg-1">
                        <div class="product-form-submit mb-3 position-relative">
                            <div class="d-flex">
                                <div className="react-quantity-box d-none d-lg-block">
                                <QuantityBox 
                                    quantity='1'
                                />
                                </div>
                                <button class="btn btn-lg btn-primary ms-lg-g w-100 text-white" type="submit">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-2 bg-primary mt-0"/>
                    <ul className='list-unstyled row mb-4'>
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
                        <li className='col-12 d-flex align-items-center'>
                            <FormulaList4 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Developed with a green-grey base for a natural looking, golden glow with no orangey tones.
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
};
export default ProductDetail