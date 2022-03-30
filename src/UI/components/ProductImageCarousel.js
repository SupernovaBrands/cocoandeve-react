import { Fragment } from 'react';
import ProductImageCarouselItem from './ProductImageCarouselItem';
import carouselLoop from "../../modules/carousel-loop";

const ProductImageCarousel = () => {
    carouselLoop('product-image-carousel__indicator');
    const PRODUCT_IMAGES = [
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/BronzingFoam_828x828.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam2_1140x.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam3_1140x.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam4_1140x.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam5_1140x.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam6_1140x.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam7_1140x.jpg?v=1644832516',
        'https://cdn.shopify.com/s/files/1/0243/8817/3888/products/SH_Foam8_1140x.jpg?v=1644832516',
    ];

    return (
        <Fragment>
            <div className="product-image-carousel__container col-12 col-lg-6 order-lg-2">
                <figure id="product-image-carousel" className="product-image-carousel carousel slide mb-1 mb-lg-0 g-0__in-container" data-bs-ride="carousel" data-bs-interval="false">
                    <div className="carousel-inner">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <ProductImageCarouselItem
                                imageUrl={image}
                                index={index}
                            />
                        ))} 
                    </div>
                    <div class="carousel-indicators d-lg-none">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <button type="button" data-bs-target="#product-image-carousel" data-bs-slide-to={index} class={`rounded-circle ${index === 0 ? 'active': ''}`}></button>
                        ))}
                    </div>
                </figure>
            </div>

            <div id="product-image-carousel__indicator" className="d-none d-lg-block product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g" data-bs-slide-number="5" data-bs-ride="carousel" data-bs-interval="false">
                <button className="carousel-indicator chevron-up btn-unstyled d-none d-lg-flex mx-auto mb-1 mb-lg-3 text-center align-items-center" data-bs-slide="prev" data-bs-target="#product-image-carousel__indicator" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" className="svg text-primary"><path d="M20.7 17.2l-9.4-9.4-9.4 9.4L0 15.3 11.3 4l11.3 11.3-1.9 1.9z"></path></svg>
                </button>
                <div className="carousel-inner d-flex flex-nowrap flex-lg-column justify-content-center justify-content-lg-start">
                    {PRODUCT_IMAGES.map((image, index) => (
                    <div data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`product-image-carousel__indicator__item carousel-item col-12 px-lg-0 pb-lg-3 mw-100 ${ index === 0 ? 'active':''}`}>
                        <button className="btn-unstyled border d-block w-100">
                            <picture className="ratio ratio-1x1 w-100 d-block">
                                <img  src={image} alt="Slide {{@index}}" />
                            </picture>
                        </button>
                    </div>
                    ))}
                </div>
                <button class="carousel-indicator chevron-down btn-unstyled d-none d-lg-flex mx-auto mt-1 mt-lg-3 text-center align-items-center" data-bs-slide="next" data-bs-target="#product-image-carousel__indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg text-primary"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg>
                </button>
            </div>
        </Fragment>
    )
};
export default ProductImageCarousel