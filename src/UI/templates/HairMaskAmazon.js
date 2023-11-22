import React, { lazy, Suspense, Fragment, useContext, useEffect, useState } from 'react';
import '../../product.scss';
import ProductProvider from '../../store/ProductProvider';
import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';
import ProductContext from '../../store/product-context';
import FaqProvider from '../../store/FaqProvider';
import ReviewProvider from '../../store/ReviewProvider';
import IRLProvider from '../../store/IRLProvider';

import { ReactComponent as FormulaList1 } from '../../assets/skin-protection.svg';
import { ReactComponent as FormulaList2 } from '../../assets/guava.svg';
import { ReactComponent as FormulaList3 } from '../../assets/diet.svg';
import { ReactComponent as FormulaList4 } from '../../assets/clean.svg';
import { ReactComponent as FormulaList5 } from '../../assets/mitt.svg';

import { ReactComponent as FormulaList6 } from '../../assets/hair_icon_drop.svg';
import { ReactComponent as FormulaList7 } from '../../assets/hair_icon_shield.svg';
import { ReactComponent as FormulaList8 } from '../../assets/hair_icon_nourish.svg';
import { ReactComponent as FormulaList9 } from '../../assets/hair_icon_signature.svg';
import { ReactComponent as FormulaList10 } from '../../assets/hair_icon_pore.svg';

const CustomerReview = lazy(() => import('../sections/CustomerReview'));
const SeenIn = lazy(() => import('../sections/SeenIn'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const SectionIRL = lazy(() => import('../sections/SectionIRL'));

const ProductForm = (props) => {
    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get("utm_store") || 'us';

    const productCtx = useContext(ProductContext);
    const phandle = 'super-nourishing-coconut-fig-hair-masque';
    productCtx.storeChange(activeStore, phandle);

    const host = 'https://www.cocoandeve.com';

    const {
        price,
        compareAtPrice,
        saving,
        title1,
        title2,
        description,
        handle,
        shades
    } = productCtx;

    const [selectedSwatch, setSelectedSwatch] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSwatchText, setSelectedSwatchText] = useState('');
    const [buttonUrl, setButtonUrl] = useState(host);

    useEffect(() => {
        setUrl();
    }, [quantity, selectedSwatch]);

    useEffect(() => {
        setUrl();
        if (shades.length > 0 && selectedSwatch === null) {
            setSelectedSwatch(shades[0].swatch);
            setSelectedSwatchText(shades[0].text);
        }
    }, [productCtx])

    const onSelectedVariant = (event) => {
        const dataId = event.target.getAttribute('data-id');
        if (shades.length > 0) {
            const swatch = shades.find((shade) => shade.swatch === dataId)
            setSelectedSwatchText(swatch.text);
            setSelectedSwatch(swatch.swatch);
        }
    }

    const onChangeQuantity = (qty) => {
        setQuantity(qty);
    }

    const setUrl = () => {
        let url = `${host}?lp_handle=${handle}&lp_quantity=${quantity}`;
        url = shades.length > 0 && selectedSwatch !== null ? `${url}&lp_swatch=${selectedSwatch}` : url;
        setButtonUrl(url);
    }

    const onAddToCart = () => {
        if (typeof (ga) === 'function') {
            window.ga('send', 'event', {
                eventCategory: 'Add to Cart',
                eventAction: 'lp_pdp_cta',
                eventLabel: handle,
                eventValue: 0,
            });
        }
        window.dataLayer.push({
			event: 'lp_pdp_cta',
			category: 'Add to Cart',
			target: 'add_to_cart_lp_pdp',
			product: handle,
		});
        window.location.href = 'https://www.amazon.com/dp/B07B8JN5NP?maas=maas_adg_91E11A1B83FFF6EFFF03CF12BEB03141_afap_abs&ref_=aa_maas&tag=maas';

    }

    setTimeout(function () {
        const mobileSwatch = document.querySelector('.product-swatch-mobile');
        const mobileSwatchTrigger = document.querySelector('.product-swatch-mobile__trigger');
        if (mobileSwatchTrigger && mobileSwatch) {
            const observerCallback = (entries) => {
                entries.forEach((entry) => {
                    window.onscroll = function(ev) {
                        if (window.innerWidth < 768) {
                            if (entry.isIntersecting || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                                mobileSwatch.classList.remove('show');
                            } else {
                                mobileSwatch.classList.add('show');
                            }
                        }
                    }
                });
            }
            const observer = new IntersectionObserver(observerCallback);
            observer.observe(mobileSwatchTrigger);
        }
    }, 500);

    return (
        <div className="product-form container px-g mb-0 mt-lg-4">
            <div className="row align-items-start">
                <ProductImageCarousel handle={phandle} />
                <div className="col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column text-center text-lg-start">
                    <p className="font-size-lg mb-1 order-lg-1" >{title1}</p>
                    <h1 className="mb-1 mb-lg-2 order-lg-1">{ title2 }</h1>
                    <div className="d-flex mb-0 mb-lg-1 justify-content-center justify-content-lg-start order-lg-0">
                        <ReviewStar score={4.8} />
                        <span className='d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1'><span className='d-none d-lg-inline-block'>4.8 stars</span> <a className="link-secondary text-underline" href={`${host}/products/${props.handle}#write-a-review`}>(220)</a></span>
                    </div>
                    {props.range === 'hair' ? (
                        <p className="font-size-lg d-lg-block order-lg-2 mt-1 text-start" dangerouslySetInnerHTML={{ __html: description }}></p>
                    ) : (
                        <p className="font-size-lg d-none d-lg-block order-lg-2" dangerouslySetInnerHTML={{ __html: description }}></p>
                    )}

                    <p className="my-1 order-lg-2 d-block">
                        {compareAtPrice !== '' && (<span className="text-linethrough mr-25 h2 d-inline-block mb-0 me-1">{compareAtPrice}</span>)}
                        <span className="mr-25 text-nowrap h2 d-inline-block mb-0">$31.20</span>
                        <span className="mr-25 text-nowrap h2 d-inline-block mb-0 ms-1 text-linethrough">$39.00</span>
                        <span className="text-primary text-nowrap text-save p-1 h2 d-inline-block mb-0 py-0">(20% Off)</span>
                    </p>
                    {shades.length > 0 && (
                        <Fragment>
                            <hr className="mb-2 bg-primary-light-second mt-0 order-lg-2 d-none d-lg-block"/>
                            <div className="d-grid gap-2 justify-content-center justify-content-lg-start d-md-flex mb-lg-2 align-items-center order-lg-2">
                                <div className="product-swatch d-flex align-items-center justify-content-center">
                                    {shades.map((shade) => (
                                        <button key={shade.id} type="button" onClick={onSelectedVariant} data-variant className={`variant-swatch ${shade.class} ${ selectedSwatch === shade.swatch ? 'border-primary' : ''}`} data-id={shade.swatch}></button>
                                    ))}
                                </div>
                                <span className='mb-1 mb-lg-0 mg-lg-0'>
                                    {selectedSwatchText}
                                </span>
                            </div>
                        </Fragment>
                    )}
                    <p className="d-none bg-gray-100 p-1 rounded mb-2 order-lg-2">Not sure which shade to get? Check our <a href="">Shades Guide</a></p>
                    <div className="product-swatch-mobile__trigger order-3">
                            <div className="product-form-submit mb-3 position-relative">
                                <div className="d-flex">
                                    <button key="ProductFormButton2" className="btn btn-lg btn-primary w-100 text-white" type="submit" onClick={onAddToCart}>Shop on Amazon</button>
                                </div>
                            </div>
                    </div>
                    <hr className="mb-2 bg-primary-light-second mt-0 order-lg-2"/>
                    {activeStore === 'fr' && (
                        <h2 className='d-block d-lg-none order-lg-2'>{props.range === 'tan' ? 'All you need for a perfect tan' : 'Tout ce dont tu as besoin pour des cheveux de rêve'}</h2>
                    )}
                    {activeStore === 'de' && (
                        <h2 className='d-block d-lg-none order-lg-2'>{props.range === 'tan' ? 'All you need for a perfect tan' : 'Alles, was du für perfektes Haar brauchst'}</h2>
                    )}
                    {activeStore !== 'de' && activeStore !== 'fr' && (
                        <h2 className='d-block d-lg-none order-lg-2'>{props.range === 'tan' ? 'All you need for a perfect tan' : 'All you need for perfect hair'}</h2>
                    )}
                    <ul className="list-unstyled row mb-2 text-start order-lg-2">
                        {handle === 'sunny-honey-bali-bronzing-self-tan-set' ? (
                            <Fragment>
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
                            </Fragment>
                        ) : (
                            <Fragment>
                                <li className='col-12 d-flex align-items-center mb-2'>
                                    <FormulaList6 className='me-g d-flex flex-shrink-0 justify-content-center' />
                                    {productCtx.benefits.formula1}
                                </li>
                                <li className='col-12 d-flex align-items-center mb-2'>
                                    <FormulaList7 className='me-g d-flex flex-shrink-0 justify-content-center' />
                                    {productCtx.benefits.formula2}
                                </li>
                                <li className='col-12 d-flex align-items-center mb-2'>
                                    <FormulaList8 className='me-g d-flex flex-shrink-0 justify-content-center' />
                                    {productCtx.benefits.formula3}
                                </li>
                                {handle === 'repairing-restoring-hair-mask' ? (
                                <li className='col-12 d-flex align-items-center mb-2'>
                                    <FormulaList10 className='me-g d-flex flex-shrink-0 justify-content-center' />
                                    {productCtx.benefits.formula4}
                                </li>
                                ) : (
                                <li className='col-12 d-flex align-items-center mb-2'>
                                    <FormulaList9 className='me-g d-flex flex-shrink-0 justify-content-center' />
                                    {productCtx.benefits.formula4}
                                </li>)}
                            </Fragment>
                        )}

                    </ul>
                    <picture className="order-lg-2 mb-2">
                        <source media="(min-width:992px)"  type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/559b0538-bc70-4a30-9fb7-8a0cfda3e300/1140x" />
                        <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/559b0538-bc70-4a30-9fb7-8a0cfda3e300/828x" className="w-100" />
                    </picture>
                    <div className='fixed-bottom d-lg-none mx-g mb-2 product-swatch-mobile'>
                        <button className='d-flex btn btn-primary btn-lg px-2 w-100' onClick={onAddToCart}>
                            <span className="text-white w-100 m-0 d-block text-start" >Shop now  on Amazon</span>
                            <p className="d-block m-0">
                                <span className="text-white text-linethrough mr-25 text-nowrap fw-normal">{compareAtPrice}</span>
                                <span className="text-white mr-25 text-nowrap ms-1">{price}</span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm handle={props.handle} />
            <Suspense fallback={<div></div>}>
                <ReviewProvider>
                    <CustomerReview range="hair" handle={props.handle} disabledLink={true} />
                </ ReviewProvider>
                <ReviewProvider>
                <SeenIn handle={props.handle} range="hair" />
                </ReviewProvider>
                <IRLProvider>
                    <SectionIRL range="hair" handle={props.handle} disabledLink={true} />
                </IRLProvider>
                <FaqProvider>
                    <FaqAccordion range="hair" handle={props.handle} />
                </FaqProvider>
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
