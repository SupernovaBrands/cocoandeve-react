import Carousel from '../components/Carousel';

const SeenIn = () => {
    const CAROUSELITEMS = [
        {
            carouselItemClass: 'carousel-item col-6 col-md-3 mt-5 text-center active',
            content:
                <picture>
                    <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae7f46b9-6205-4d66-3f13-0a66efac7b00/400x" />
                    <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a4cb603b-5515-4635-da4c-a6edae090400/400x" />
                    <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a4cb603b-5515-4635-da4c-a6edae090400/400x" className="img-fluid" alt="Glamour" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content: 
                <picture>
                    <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ba8ee58a-e3b6-4ecd-c87a-cd972531ac00/400x" />
                    <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7ac8eb4b-b87e-4936-f86e-570abed4a000/400x" />
                    <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7ac8eb4b-b87e-4936-f86e-570abed4a000/400x" className="img-fluid" alt="Glamour" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2e3d1def-752b-4a39-17a3-d9abb1002f00/400x" />
                    <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/be582085-ba2b-4dc2-4d18-44360489ee00/400x" />
                    <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/be582085-ba2b-4dc2-4d18-44360489ee00/400x" className="img-fluid"  alt="Elle" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/054c9959-e8d3-431a-a420-b8a54f875b00/400x" />
                    <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3994b20e-9db5-471a-45da-80a327d6a100/400x" />
                    <img src={`${process.env.PUBLIC_URL}/images/mailonline.jpg`} className="img-fluid"  alt="Mail Online" />
                </picture>
        },
        {
            carouselItemClass: 'carousel-item col-6 col-md-3  mt-5 text-center',
            content:
                <picture>
                    <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/54312adc-b757-4199-389c-6aff215fff00/400x" />
                    <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5a598c17-cd78-4212-159d-1e1677162500/400x" />
                    <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5a598c17-cd78-4212-159d-1e1677162500/400x" className="img-fluid" alt="Refinery 29" />
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
