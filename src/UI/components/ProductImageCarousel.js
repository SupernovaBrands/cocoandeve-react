import { Fragment } from 'react';

const ProductImageCarousel = () => {
    return (
        <Fragment>
            <div className="product-image-carousel__container col-12 col-lg-6 order-lg-2">
                <figure id="product-image-carousel" className="product-image-carousel carousel slide mb-1 mb-lg-0 g-0__in-container" data-ride="carousel" data-interval="false" data-indicator="#product-image-carousel__indicator">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <picture>
                                <source srcSet="https://via.placeholder.com/1140x1260/EFADBA?text=1140x1260+Slide+{{@index}}" media="(min-width: 992px)" />
                                <img src="https://via.placeholder.com/750x750/EFADBA?text=750x750+Slide+{{@index}}" alt="Slide {{@index}}" className="w-100 embed-responsive-item fit--cover" />
                            </picture>
                        </div>
                        <div className="carousel-item">
                            <picture>
                                <source srcSet="https://via.placeholder.com/1140x1260/EFADBA?text=1140x1260+Slide+{{@index}}" media="(min-width: 992px)" />
                                <img src="https://via.placeholder.com/750x750/EFADBA?text=750x750+Slide+{{@index}}" alt="Slide {{@index}}" className="w-100 embed-responsive-item fit--cover" />
                            </picture>
                        </div>
                        <div className="carousel-item">
                            <picture>
                                <source srcSet="https://via.placeholder.com/1140x1260/EFADBA?text=1140x1260+Slide+{{@index}}" media="(min-width: 992px)" />
                                <img src="https://via.placeholder.com/750x750/EFADBA?text=750x750+Slide+{{@index}}" alt="Slide {{@index}}" className="w-100 embed-responsive-item fit--cover" />
                            </picture>
                        </div>
                    </div>
                </figure>
                <picture className="circle-badge position-absolute rounded-circle bg-primary d-flex p-1 mr-0 mt-2 mr-lg-1 mt-lg-1">
                    <img className="w-100" src="../images/badge-25.svg" />
                </picture>
                <div className="tooltip tooltip--sold-out bg-secondary p-1 rounded col-5 col-lg-3 text-white text-center ml-1">
                    <span className="d-block font-weight-bold">25</span>
                    <span className="font-size-xs">People bought today!.</span>
                </div>
            </div>

            <div id="product-image-carousel__indicator" className="product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g" data-slide-number="5" data-ride="carousel" data-interval="false">
                <button className="carousel-indicator chevron-up btn-unstyled d-none d-lg-flex mx-auto mb-1 mb-lg-3 text-center align-items-center" href="#product-image-carousel__indicator" data-slide="prev" aria-hidden="true" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" className="svg text-primary"><path d="M20.7 17.2l-9.4-9.4-9.4 9.4L0 15.3 11.3 4l11.3 11.3-1.9 1.9z"></path></svg>
                </button>
                <div className="carousel-inner d-flex flex-nowrap flex-lg-column justify-content-center justify-content-lg-start">
                    <div className="product-image-carousel__indicator__item carousel-item active col-12 px-lg-0 pb-lg-3 mw-100" data-target="#product-image-carousel" data-index="3">
                        <button className="btn-unstyled border d-block w-100">
                            <picture className="ratio ratio-1x1 w-100 d-block">
                                <img  src="https://via.placeholder.com/150x150/EFADBA?text={{@index}}" alt="Slide {{@index}}" />
                            </picture>
                        </button>
                    </div>
                    <div className="product-image-carousel__indicator__item carousel-item active col-12 px-lg-0 pb-lg-3 mw-100" data-target="#product-image-carousel" data-index="3">
                        <button className="btn-unstyled border d-block w-100">
                            <picture className="ratio ratio-1x1 d-block">
                                <img  src="https://via.placeholder.com/150x150/EFADBA?text={{@index}}" alt="Slide {{@index}}" />
                            </picture>
                        </button>
                    </div>
                    <div className="product-image-carousel__indicator__item carousel-item active col-12 px-lg-0 pb-lg-3 mw-100" data-target="#product-image-carousel" data-index="3">
                        <button className="btn-unstyled border d-block w-100">
                            <picture className="ratio ratio-1x1 d-block">
                                <img  src="https://via.placeholder.com/150x150/EFADBA?text={{@index}}" alt="Slide {{@index}}" />
                            </picture>
                        </button>
                    </div>
                    <div className="product-image-carousel__indicator__item carousel-item active col-12 px-lg-0 pb-lg-3 mw-100" data-target="#product-image-carousel" data-index="3">
                        <button className="btn-unstyled border d-block w-100">
                            <picture className="ratio ratio-1x1 d-block">
                                <img  src="https://via.placeholder.com/150x150/EFADBA?text={{@index}}" alt="Slide {{@index}}" />
                            </picture>
                        </button>
                    </div>
                    <div className="product-image-carousel__indicator__item carousel-item active col-12 px-lg-0 pb-lg-3 mw-100" data-target="#product-image-carousel" data-index="3">
                        <button className="btn-unstyled border d-block w-100">
                            <picture className="ratio ratio-1x1 d-block">
                                <img  src="https://via.placeholder.com/150x150/EFADBA?text={{@index}}" alt="Slide {{@index}}" />
                            </picture>
                        </button>
                    </div>
                    <button class="carousel-indicator chevron-down btn-unstyled d-none d-lg-flex mx-auto mt-1 mt-lg-3 text-center align-items-center" href="#product-image-carousel__indicator" data-slide="next" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg text-primary"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg>
                    </button>
                </div>
            </div>
        </Fragment>
    )
};
export default ProductImageCarousel