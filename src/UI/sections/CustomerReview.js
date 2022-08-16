import React, { useContext } from 'react';
import ReviewCard from '../components/ReviewCard';
import Carousel from '../components/Carousel';
import ReviewContext from '../../store/reviews-context';

const CustomerReview = (props) => {
    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get("utm_store") || 'us';

    const reviewsCtx = useContext(ReviewContext);
    reviewsCtx.storeChange(activeStore, props.range);

    const CUSTOMER_REVIEWS_TAN = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[0].name}
                    caption={reviewsCtx.reviews[0].shade}
                    text={reviewsCtx.reviews[0].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0aacc2f1-02f9-4ee1-5994-ad647e26c300/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/acb5e8a9-bd03-4f05-d2d3-7817b1d27500/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/acb5e8a9-bd03-4f05-d2d3-7817b1d27500/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d3a1a011-65bd-49e1-79ff-d9f8c33b5500/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/95e53a10-1deb-40da-52df-1891f96efe00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/95e53a10-1deb-40da-52df-1891f96efe00/200x"className="w-100" alt="" loading="lazy"  />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[1].name}
                    caption={reviewsCtx.reviews[1].shade}
                    text={reviewsCtx.reviews[1].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd37ece0-4c30-447a-a52b-05d5937a2b00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7ba095e8-e3d3-4c0d-d08a-4edbb7778000/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7ba095e8-e3d3-4c0d-d08a-4edbb7778000/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[2].name}
                    caption={reviewsCtx.reviews[2].shade}
                    text={reviewsCtx.reviews[2].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/68fa6642-1e94-439c-c0a4-fe31ff027f00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15b532db-5a1d-4a38-2bb8-5fcf59c1b700/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15b532db-5a1d-4a38-2bb8-5fcf59c1b700/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[3].name}
                    caption={reviewsCtx.reviews[3].shade}
                    text={reviewsCtx.reviews[3].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/04e43ba7-46fd-47e3-c347-8430287a7d00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/aa96a2fc-e91d-473a-e328-0a966e9e9b00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/aa96a2fc-e91d-473a-e328-0a966e9e9b00/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[4].name}
                    caption={reviewsCtx.reviews[4].shade}
                    text={reviewsCtx.reviews[4].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d0ffe6fb-96c4-4059-95ed-a9c07006d300/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/03bb1c12-7e90-48de-21ce-c1e5d394b700/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/03bb1c12-7e90-48de-21ce-c1e5d394b700/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/347c899b-8292-4ac2-6a35-f09291fb0e00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/de3a2ed7-4629-4425-0a79-2ff78a07c800/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/de3a2ed7-4629-4425-0a79-2ff78a07c800/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[5].name}
                    caption={reviewsCtx.reviews[5].shade}
                    text={reviewsCtx.reviews[5].text}
                    handle={props.handle}
                 >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b2733858-1a83-4973-54c1-44f036a3f900/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41b0f5a1-1fb9-4251-2403-8f7741208100/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41b0f5a1-1fb9-4251-2403-8f7741208100/200x" className="w-100" alt="" loading="lazy" />
                            </picture>
                        </div>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7a22db86-2796-4197-dae4-1148e2070500/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6682e320-30c7-4f56-2f82-355733b09800/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6682e320-30c7-4f56-2f82-355733b09800/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[6].name}
                    caption={reviewsCtx.reviews[6].shade}
                    text={reviewsCtx.reviews[6].text}
                    handle={props.handle}
                    >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9aca4722-affa-4677-1a0e-263b6cb31c00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/48a2621a-547c-43d3-538e-b90ba49a9200/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/48a2621a-547c-43d3-538e-b90ba49a9200/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
    ]

    const CUSTOMER_REVIEWS_HAIR = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[0].name}
                    caption={reviewsCtx.reviews[0].shade}
                    text={reviewsCtx.reviews[0].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a02ab0a2-270a-4b44-160e-5fb1b14e2400/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/23a4499f-89dc-47ab-33f7-0aec0b9afd00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/23a4499f-89dc-47ab-33f7-0aec0b9afd00/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[1].name}
                    caption={reviewsCtx.reviews[1].shade}
                    text={reviewsCtx.reviews[1].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/57b4d825-e5a7-47e3-f4d8-c9ca3936f700/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a2e3aedf-026b-491a-8953-e7a71686d900/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a2e3aedf-026b-491a-8953-e7a71686d900/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[2].name}
                    caption={reviewsCtx.reviews[2].shade}
                    text={reviewsCtx.reviews[2].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3b6abad-3888-440f-f23f-37bbe3358d00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9c104813-c18a-4dbf-aa62-cd93685d6900/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9c104813-c18a-4dbf-aa62-cd93685d6900/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[3].name}
                    caption={reviewsCtx.reviews[3].shade}
                    text={reviewsCtx.reviews[3].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/db054539-903c-471d-0cea-7945b0b3e300/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7b46dbef-6eb4-40f1-e4d0-f8ae36971c00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7b46dbef-6eb4-40f1-e4d0-f8ae36971c00/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[4].name}
                    caption={reviewsCtx.reviews[4].shade}
                    text={reviewsCtx.reviews[4].text}
                    handle={props.handle}
                >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a707fa8b-43a3-4995-a87c-0b31a5295200/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4d25cbcf-0fac-4b24-22e0-6c7abacc0600/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4d25cbcf-0fac-4b24-22e0-6c7abacc0600/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[5].name}
                    caption={reviewsCtx.reviews[5].shade}
                    text={reviewsCtx.reviews[5].text}
                    handle={props.handle}
                 >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/da8d1785-b568-4e68-7a71-f0eab5cd3700/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e7f315c-1e56-41e9-a678-392764264c00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e7f315c-1e56-41e9-a678-392764264c00/200x" className="w-100" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name={reviewsCtx.reviews[6].name}
                    caption={reviewsCtx.reviews[6].shade}
                    text={reviewsCtx.reviews[6].text}
                    handle={props.handle}
                    >
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/25d84f47-9b33-4063-faf6-375d9e750400/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c536fe17-1c4b-400b-e7c8-6bf029154300/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c536fe17-1c4b-400b-e7c8-6bf029154300/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
    ]

    let CONTENT = CUSTOMER_REVIEWS_TAN;
    if (props.range === 'hair') {
        CONTENT = CUSTOMER_REVIEWS_HAIR;
    }

	return (
		<section className='customer-reviews pb-2 pt-2 pt-lg-4'>
            <h2 className="h1 mb-4 text-center">{reviewsCtx.heading}</h2>
            <div className='container px-g pe-0 pe-lg-g'>
                <Carousel
                    id="customerReviews"
                    className="carousel slide carousel--loop carousel--mobile-half-next carousel--swipe"
                    items={CONTENT}
                    slideNumber="4"
                    centered={true}>
                    <button className="carousel-control carousel-control-prev  floating-out-start justify-content-start text-primary d-none d-lg-flex" data-bs-target="#customerReviews" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                        <span className='visually-hidden-focusable'>Prev</span>
                    </button>
                    <button className="carousel-control carousel-control-next  floating-out-end justify-content-end text-primary d-none d-lg-flex" data-bs-target="#customerReviews" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                        <span className='visually-hidden-focusable'>Next</span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default CustomerReview;
