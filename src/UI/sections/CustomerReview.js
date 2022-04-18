import ReviewCard from '../components/ReviewCard';
import Carousel from '../components/Carousel';

const CustomerReview = () => {
    const CUSTOMER_REVIEWS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded active px-0',
            content:
                <ReviewCard
                    name="Kjersti V. Verified Buyer"
                    caption="Shade of Tan: Dark"
                >
                    <p>The BEST sunless tan!!</p>
                    <p>Doesn’t smell bad like some others, and goes on super smooth. Color is gorgeous, looks natural and doesn’t have any orange tint AND makes your skin look soooo healthy. Doesn’t leave streaks or blotches and fades perfectly without leaving patches. I love it!!!</p>
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
                    name="Michelle T. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>I’m a huge self tanner</p>
                    <p>I’m a huge self tanner user and this is by far the best one I’ve used. Theres no streaks, leaves you a bronze color and not orange. Smells amazing, easy application obsessed! Can’t wait to try the other products.</p>
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
                name="Torey M. Verified Buyer"
                caption="Shade of Tan: Dark"
                >
                    <p>Best self tanner I've tried!</p>
                    <p>Beautiful natural tan color. Easy to apply although if you have excessively dry skin it will suck up the color in those spots. Applying to feet is a little tricky but nothing you can't get the hang of after a few applications. Smells great too! I love the hair towel and the cute little eye mask!</p>
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
                name="Steffanie G. Verified Buyer"
                caption="Shade of Tan: Dark"
                >
                    <p>Wow!</p>
                    <p>I have sensitive dry skin and this product changed the way I see my skin now! No dry spots, no Casper white skin! I’m a whole new woman!! I was weary to try it because I haven’t had success with other tanning products- but I’m SO happy I did!</p>
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
                name="Sadie B. Verified Buyer"
                caption="Shade of Tan: Medium"
                >
                    <p>I am converted!!</p>
                    <p>Smell is gorgeous, there’s a slight fake tan smell. Colour is perfect. Went for the dark shade and it developed further after a few hours! The first photo was taken immediately after tanning one leg. The second was taken after a few hours and both legs were tanned.</p>

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
                name="Alanna P. Verified Buyer"
                caption="Shade of Tan: Dark"
                >
                    <p>Great product!</p>
                    <p>It was my first time using any type of self Tanner and I found it super easy to use and smells delicious. The brush is very helpful for the face, hands and feet. It made my cellulite less noticeable and my skin feel moisturized.</p>
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
                name="Stef H. Verified Buyer"
                caption="Shade of Tan: Medium"
                >
                    <p>This product is amazing!</p>
                    <p>Love the golden glow it gives my skin. Used the medium shade, and I’m at least two shades darker. Such a great way to get the perfect tan without causing skin damage or possible skin cancer. The photo shows the difference between my natural paleness and this amazing product.</p>
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
        }
    ]

	return (
		<section className='customer-reviews pb-2 pt-2 pt-lg-4'>
            <h2 className="h1 mb-4 text-center">Customer Reviews</h2>
            <div className='container px-g pe-0 pe-lg-g'>
                <Carousel
                    id="customerReviews"
                    className="carousel slide carousel--loop carousel--mobile-half-next"
                    items={CUSTOMER_REVIEWS}
                    slideNumber="4">
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
