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
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/076fb4a7-a3d0-4b7f-4f8c-3f26d0460400',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e673f56-7011-41f4-0076-c4fe81e67000',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1950f6db-f70a-4680-fe91-de8248953400',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c230678d-097c-4c4e-35ee-2df25efcba00',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9e7d1cb9-0d18-4755-6037-d860c7a02e00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/979c96b6-c8d1-44eb-b08c-ce31a8d86500',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92fce513-c585-48fe-1a42-b5cc3cbbf700',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b4fe917-bc28-48aa-aec2-5e6620e71600',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5d1b97ef-e9e5-439c-23e1-4ef0c885cc00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4326a114-43dc-438e-c394-d92615239b00',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8aaabdcd-fde4-4e41-daba-10ef508e5d00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b248874b-dca6-44ba-85c9-cd5a70a6ec00',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/79303a66-7bf3-4244-0974-544d8bb53400',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b568e2c7-9c2b-41b9-0950-78394c86ab00',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1105da83-a237-4ac5-132f-bcd15143c100',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/09e14d12-2fdb-4d92-4aa9-c9005d99a600',
        }
    ];

    return (
        <Fragment>
            <div key="product-image-carousel__container" className="product-image-carousel__container col-12 col-lg-6 order-lg-2">
                <figure id="product-image-carousel" className="product-image-carousel carousel slide mb-1 mb-lg-0 g-0__in-container" data-bs-ride="carousel" data-bs-interval="false">
                    <div key="div-carousel-1" className="carousel-inner">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <ProductImageCarouselItem
                                key={image.jpg}
                                jpg={image.jpg}
                                webp={image.webp}
                                index={index}
                            />
                        ))} 
                    </div>
                    <div key="div-carousel-2" className="carousel-indicators d-lg-none">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <button key={image.jpg} type="button" data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`rounded-circle bg-gray-800 border-gray-800 ${index === 0 ? 'active': ''}`}></button>
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

            <div key="product-image-carousel__indicator" id="product-image-carousel__indicator" className="product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g  d-none d-lg-block" data-bs-slide-number="5" data-bs-ride="carousel" data-bs-interval="false">
                <button  key="btn4" className="carousel-indicator chevron-up btn-unstyled d-none d-lg-flex mx-auto mb-1 mb-lg-3 text-center align-items-center" data-bs-slide="prev" data-bs-target="#product-image-carousel__indicator" disabled>
                    <ChevronUp className='svg text-primary'/>
                </button>
                <div key="carousel-inner" className="carousel-inner d-flex flex-nowrap flex-lg-column">
                    {PRODUCT_IMAGES.map((image, index) => (
                    <div key={image.jpg} data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`product-image-carousel__indicator__item carousel-item col-12 px-lg-0 pb-lg-3 mw-100 ${ index === 0 ? 'active':''}`}>
                        <button className={`btn-unstyled border d-block w-100 ${index === 0 ? 'border-white': 'border-white'}`}>
                            <picture className="ratio ratio-1x1 w-100 d-block">
                                <source type="image/webp" srcSet={`${image.webp}/200x`}/>
                                <source type="image/jpeg" srcSet={`${image.jpg}/200x`}/>
                                <img src={`${image.jpg}/200x`}  />
                            </picture>
                        </button>
                    </div>
                    ))}
                </div>
                <button  key="btn3" className="carousel-indicator chevron-down btn-unstyled d-none d-lg-flex mx-auto mt-1 mt-lg-3 text-center align-items-center" data-bs-slide="next" data-bs-target="#product-image-carousel__indicator">
                    <ChevronDown className='svg text-primary'/>
                </button>
            </div>
        </Fragment>
    )
};
export default ProductImageCarousel