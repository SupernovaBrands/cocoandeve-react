import React, { useState } from 'react';
import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';

import { ReactComponent as FormulaList1 } from '../../assets/formula-list-1.svg';
import { ReactComponent as FormulaList2 } from '../../assets/formula-list-2.svg';
import { ReactComponent as FormulaList3 } from '../../assets/formula-list-3.svg';
import { ReactComponent as FormulaList4 } from '../../assets/formula-list-4.svg';

const ProductForm = () => {
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
    const [quantity, setQuantity] = useState(1);
    const [selectedVariantShadeText, setSelectedVariantShadeText] = useState('Medium - Subtle glow, lighter skin tones')
    const [buttonUrl, setButtonUrl] = useState(`https://dev.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${quantity}`);
    const onSelectedVariant = (event) => {
        const variantId = event.target.getAttribute('data-id');
        const shadeText = SHADES.find((shade) => shade.id === variantId)
        setSelectedVariantId(variantId);
        setSelectedVariantShadeText(shadeText.text);
        const url = selectedVariantId !== '' && `https://dev.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${quantity}`;
        setButtonUrl(url);
    }

    const onChangeQuantity = (qty) => {
        const url = selectedVariantId !== '' && `https://dev.cocoandeve.com?itemtoadd=${selectedVariantId}&quantity=${qty}`;
        setQuantity(qty);
        setButtonUrl(url);
    }

    const onAddToCart = () => {
        window.location.href = buttonUrl;
    }

    return (
        <div className="container px-g mb-4 mt-lg-4">
            <div className="row align-items-start">
                <ProductImageCarousel />
                <div className="col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column text-center text-lg-start">
                    <p className="font-size-lg order-lg-0 mb-1">Sunny Honey</p>
                    <h1 className="mb-1 mb-lg-2 order-lg-0 h2">Bali Bronzing Bundle</h1>
                    <div className="d-flex mb-0 mb-lg-1 justify-content-center justify-content-lg-start">
                        <ReviewStar score={5} />
                        <a href="https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set#write-a-review" className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1">4.8/5.0 220 Reviews</a>
                    </div>
                    <p className="font-size-lg d-none d-lg-block">The only self-tanner you need ever need. <br/>100% Natural DHA. Cruelty Free. Vegan. </p>
                    <p className="my-1">
                        <span className="text-primary mr-25 text-nowrap h2 " data-variant-available="true" data-variant-price="$62.80">$62.80</span>
                        <span className="text-linethrough mr-25 text-nowrap ms-1 h2 ">$89.80</span>
                        <span className="text-primary text-nowrap text-save p-1 h2 fw-normal">(Save 38%)</span>
                    </p>
                    <hr className="mb-2 bg-primary-light-second mt-0"/>
                    <div className='d-grid gap-2 d-md-flex mb-lg-2 justify-content-center  justify-content-lg-start align-items-center'>
                        <div className="product-swatch d-flex align-items-center justify-content-center">
                            {SHADES.map((shade) => (
                                <button key={shade.id} type="button" onClick={onSelectedVariant} data-variant className={`variant-swatch mr-2 ${shade.class} ${ selectedVariantId === shade.id ? 'border-primary' : ''}`} data-id={shade.id}></button>
                            ))}
                        </div>
                        <span className='mb-1 mb-lg-0 mg-lg-0'>{selectedVariantShadeText}</span>
                    </div>
                    <p className="d-block bg-gray-100 p-1 rounded mb-2">Not sure which shade to get? Check our <a href="">Shades Guide</a></p>
                    <div className="product-swatch-mobile__trigger order-lg-1">
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
                    <hr className="mb-2 bg-primary-light-second mt-0"/>
                    <ul className='list-unstyled row mb-4 text-start'>
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
export default ProductForm