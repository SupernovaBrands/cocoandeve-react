import Carousel from '../components/Carousel';

const SeenIn = () => {
    const CAROUSELITEMS = [
        {
            carouselItemClass: 'carousel-item col-6 col-md-3 mt-5 text-center active',
            content:
                <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/glamour.webp`} />
                    <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/glamour.jpg`} />
                    <img src={`${process.env.PUBLIC_URL}/images/glamour.jpg`} className="img-fluid" alt="Glamour" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/cosmopolitan.webp`} />
                    <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/cosmopolitan.jpg`} />
                    <img src={`${process.env.PUBLIC_URL}/images/cosmopolitan.jpg`} className="img-fluid" alt="Cosmopolitan" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/elle.webp`} />
                    <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/elle.jpg`} />
                    <img src={`${process.env.PUBLIC_URL}/images/elle.jpg`} className="img-fluid"  alt="Elle" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/mailonline.webp`} />
                    <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/mailonline.jpg`} />
                    <img src={`${process.env.PUBLIC_URL}/images/mailonline.jpg`} className="img-fluid"  alt="Mail Online" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/refinery29.webp`} />
                    <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/refinery29.jpg`} />
                    <img src={`${process.env.PUBLIC_URL}/images/refinery29.jpg`} className="img-fluid" alt="Refinery 29" />
                </picture>
        },

    ]
	return (
		<section className='as-seen-in py-4'>
            <div className='container'>
                <h2 className="h1 mb-4 text-center">As seen in</h2>
                <Carousel id="asSeenInCarousel" centered={true} items={CAROUSELITEMS} slideNumber="5" className="carousel slide carousel--loop overflow-hidden carousel--mobile-only-half-centered">
                    <button className="carousel-control carousel-control-prev carousel-control--background floating-out-left justify-content-start text-primary d-none" data-bs-target="#asSeenInCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                    </button>
                    <button className="carousel-control carousel-control-next carousel-control--background floating-out-right justify-content-end text-primary d-none" data-bs-target="#asSeenInCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default SeenIn;
