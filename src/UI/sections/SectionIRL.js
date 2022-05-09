import IRLCard from '../components/IRLCard';
import Carousel from '../components/Carousel';

import { ReactComponent as InstagramIcon } from '../../assets/instagram-clr.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-clr.svg';

const SectionIRL = () => {

    const CONTENT = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0 active',
            content:
                <IRLCard
                    name="@hughesyfit"
                    caption="Bali Bronzing Foam (Dark)"
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6dfe2acd-5388-48ff-3dd1-b2ed2b6cad00/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/13cb7403-0ef5-4216-3b94-e5ce95fbdc00/200x"
                >
                    <p>wearing @cocoandeve sunny honey bali bronzing foam in shade dark. Since not being able to go away and catch a natural tan, this has been a life saver, the smell is incredible (tropical mango and guave scent 🌴😻) it’s 100% vegan, toxin-free and cruelty free</p>

                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@hannahtucker"
                    caption="Bali Bronzing Foam (Dark)"
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/14450439-ff6e-4fe2-0030-373f53899600/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15647b0f-9340-41fb-4e09-f80692f0f800/200x"
                >
                    <p>Nothing better than a fresh tan to boost your confidence. I have been using @cocoandeve Sunny Honey Bali Bronzing foam in dark to keep a natural glow this winter, it’s super easy to apply and quick so it never feels like a chore. It has an amazing scent of Balinese Mango and Guava, 100% vegan, toxin-free, cruelty free, and gives you an olive colour (no orange vibes over here)!</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@orianavtorres"
                    caption="Bali Bronzing Foam (Utra Dark)"
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7a518864-af70-46a1-6d76-8d8f43e1d100/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b734bbe7-e646-4ecf-d42e-5ee4c2c60300/200x"
                >
                    <p>The perfect tan! Free of sulfate, toxins, silicones, parabens and other harmful chemicals. I use the Tanning Goddess Kit is Ultra Dark.</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@jaydestella"
                    caption="Bali Bronzing Foam (Dark)"
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ed15f4ee-c1a7-4486-de95-81bf1b38c400/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18084a86-e332-4463-03d3-292b438d6900/200x"
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
            <div className='container px-g pe-0 pe-lg-g'>
                <Carousel
                    id="sectionIRL"
                    className="carousel slide carousel--loop carousel--mobile-half-next"
                    items={CONTENT}
                    slideNumber="4"
                    forceCentered={true}
                    centered={true}>
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
