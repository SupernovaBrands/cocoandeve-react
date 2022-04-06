import { Fragment } from 'react';
import ProductImageCarouselItem from './ProductImageCarouselItem';
import carouselLoop from "../../modules/carousel-loop";

import { ReactComponent as ChevronPrev } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext } from '../../assets/chevron-next.svg';
import { ReactComponent as ChevronUp } from '../../assets/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';

const ProductImageCarousel = () => {
    carouselLoop('product-image-carousel__indicator');
    const PRODUCT_IMAGES = [
        'pimage1.jpg',
        'pimage2.jpg',
        'pimage3.jpg',
        'pimage4.jpg',
        'pimage5.jpg',
        'pimage6.jpg',
        'pimage7.jpg',
    ];

    return (
        <Fragment>
            <div key="product-image-carousel__container" className="product-image-carousel__container col-12 col-lg-6 order-lg-2">
                <figure id="product-image-carousel" className="product-image-carousel carousel slide mb-1 mb-lg-0 g-0__in-container" data-bs-ride="carousel" data-bs-interval="false">
                    <div key="div-carousel-1" className="carousel-inner">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <ProductImageCarouselItem
                                key={image}
                                imageUrl={image}
                                index={index}
                            />
                        ))} 
                    </div>
                    <div key="div-carousel-2" className="carousel-indicators d-lg-none">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <button key={image} type="button" data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`rounded-circle bg-gray-800 border-gray-800 ${index === 0 ? 'active': ''}`}></button>
                        ))}
                    </div>
                    <button key="btn1" className="carousel-control-prev d-block d-lg-none" type="button" data-bs-target="#product-image-carousel" data-bs-slide="prev">
                        <ChevronPrev className="text-primary svg" />
                    </button>
                    <button key="btn2" className="carousel-control-next d-block d-lg-none" type="button" data-bs-target="#product-image-carousel" data-bs-slide="next">
                        <ChevronNext className="text-primary svg" />
                    </button>
                </figure>
            </div>

            <div key="product-image-carousel__indicator" id="product-image-carousel__indicator" className="d-none d-lg-block product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g" data-bs-slide-number="5" data-bs-ride="carousel" data-bs-interval="false">
                <button  key="btn4" className="carousel-indicator chevron-up btn-unstyled d-none d-lg-flex mx-auto mb-1 mb-lg-3 text-center align-items-center" data-bs-slide="prev" data-bs-target="#product-image-carousel__indicator" disabled>
                    <ChevronUp className='svg text-primary'/>
                </button>
                <div key="carousel-inner" className="carousel-inner d-flex flex-nowrap flex-lg-column justify-content-center justify-content-lg-start">
                    {PRODUCT_IMAGES.map((image, index) => (
                    <div key={image} data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`product-image-carousel__indicator__item carousel-item col-12 px-lg-0 pb-lg-3 mw-100 ${ index === 0 ? 'active':''}`}>
                        <button className={`btn-unstyled border d-block w-100 ${index === 0 ? 'border-primary': 'border-white'}`}>
                            <picture className="ratio ratio-1x1 w-100 d-block">
                                <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/${image.replace('jpg', 'webp')}`}/>
                                <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/${image}`}/>
                                <img src={`${process.env.PUBLIC_URL}/images/${image}`}  />
                            </picture>
                        </button>
                    </div>
                    ))}
                </div>
                <button  key="btn3" className="carousel-indicator chevron-down btn-unstyled d-none d-lg-flex mx-auto mt-1 mt-lg-3 text-center text-primary align-items-center" data-bs-slide="next" data-bs-target="#product-image-carousel__indicator">
                    <ChevronDown className='svg text-primary'/>
                </button>
            </div>
        </Fragment>
    )
};
export default ProductImageCarousel