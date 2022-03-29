import React, { useState } from 'react';
import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';

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
                    <div className="product-swatch d-flex align-items-center mb-2">
                        {SHADES.map((shade) => (
                            <button type="button" onClick={onSelectedVariant} data-variant className={`variant-swatch mr-2 ${shade.class} ${ selectedVariantId === shade.id ? 'border-primary' : ''}`} data-id={shade.id}></button>
                        ))}
                        <span className="ms-1">{selectedVariantShadeText}</span>
                    </div>
                    <p className="d-block bg-light p-1 rounded mb-2">Not sure which shade to get? Check our <a href="">Shades Guide</a></p>
                    <hr className="mb-2 bg-primary mt-0"/>
                    <ul class="list-unstyled mb-1">
                        <li class="d-flex align-items-center mb-2">[Icon] Blurs pigmentation and perfects skin.</li>
                        <li class="d-flex align-items-center mb-2">[Icon] Tropical mango and guava scent (no biscuit smell!)</li>
                        <li class="d-flex align-items-center mb-2">[Icon] Lightweight, non-sticky formula.</li>
                        <li class="d-flex align-items-center mb-2">[Icon] Developed with a green-grey base for a natural looking, golden glow with no orangey tones.</li>
                        <li class="d-flex align-items-center mb-2">[Icon] Soft tanning mitt and kabuki brush for a perfect fuss-free application.</li>
                    </ul>
                    <div class="product-swatch-mobile__trigger">
                        <div class="product-form-submit mb-3 position-relative">
                            <div class="d-flex">
                                <div className="react-quantity-box">
                                <QuantityBox 
                                    quantity='1'
                                />
                                </div>
                                <button class="btn btn-lg btn-primary ml-1 ms-lg-g w-100 text-white" type="submit">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProductDetail