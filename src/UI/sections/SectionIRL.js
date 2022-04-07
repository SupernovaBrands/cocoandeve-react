import IRLCard from '../components/IRLCard';
import Carousel from '../components/Carousel';

import { ReactComponent as InstagramIcon } from '../../assets/ig-color.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-color.svg';

const SectionIRL = () => {

    const CONTENT = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded active',
            content:
                <IRLCard
                    name="@hughesyfit"
                    caption="Bali Bronzing Foam (Dark)"
                    image={`${process.env.PUBLIC_URL}/images/hughesyfit.jpg`}
                    comImage={`${process.env.PUBLIC_URL}/compressed_images/hughesyfit.webp`}
                >
                    <p>wearing @cocoandeve sunny honey bali bronzing foam in shade dark. Since not being able to go away and catch a natural tan, this has been a life saver, the smell is incredible (tropical mango and guave scent 🌴😻) it’s 100% vegan, toxin-free and cruelty free</p>

                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content:
                <IRLCard
                    name="@hannahtucker"
                    caption="Bali Bronzing Foam (Dark)"
                    image={`${process.env.PUBLIC_URL}/images/hannahtucker.jpg`}
                    comImage={`${process.env.PUBLIC_URL}/compressed_images/hannahtucker.webp`}
                >
                    <p>Nothing better than a fresh tan to boost your confidence. I have been using @cocoandeve Sunny Honey Bali Bronzing foam in dark to keep a natural glow this winter, it’s super easy to apply and quick so it never feels like a chore. It has an amazing scent of Balinese Mango and Guava, 100% vegan, toxin-free, cruelty free, and gives you an olive colour (no orange vibes over here)!</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content:
                <IRLCard
                    name="@orianavtorres"
                    caption="Bali Bronzing Foam (Dark)"
                    image={`${process.env.PUBLIC_URL}/compressed_images/orianavtorres.jpg`}
                    comImage={`${process.env.PUBLIC_URL}/compressed_images/orianavtorres.webp`}
                >
                    <p>The perfect tan! Free of sulfate, toxins, silicones, parabens and other harmful chemicals. I use the Tanning Goddess Kit is Ultra Dark.</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content:
                <IRLCard
                    name="@jaydestella"
                    caption="Bali Bronzing Foam (Dark)"
                    image={`${process.env.PUBLIC_URL}/compressed_images/jaydestella.jpg`}
                    comImage={`${process.env.PUBLIC_URL}/compressed_images/jaydestella.webp`}
                >
                    <p>Just tried @cocoandeve bronzing foam!!! And I’m obsessed! 🤍</p>
                </IRLCard>
        }
    ]

	return (
		<section className='customer-reviews py-4'>
            <h2 className="h1 mb-3 text-center">Tan Magic IRL</h2>
            <div className='d-flex justify-content-center mb-3'>
                <div className='d-flex align-items-center'><InstagramIcon className='font-size-sm' /><span className='ms-1 font-size-sm'>879k on Instagram</span></div>
                <div className='d-flex align-items-center ms-1'><FacebookIcon className='font-size-sm' /><span className='ms-1 font-size-sm'>287k on Facebook</span></div>
            </div>
            <div className='container'>
                <Carousel
                    id="sectionIRL"
                    className="carousel slide carousel--loop carousel--mobile-half-next"
                    items={CONTENT}
                    slideNumber="4">
                    <button className="carousel-control carousel-control-prev floating-out-start justify-content-start text-primary d-none" data-bs-target="#sectionIRL" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                    </button>
                    <button className="carousel-control carousel-control-next floating-out-end justify-content-end text-primary d-none" data-bs-target="#sectionIRL" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default SectionIRL;
