
import { useContext } from "react";

import IRLContext from "../../store/irl-context";
import IRLCard from '../components/IRLCard';
import Carousel from '../components/Carousel';

import { ReactComponent as InstagramIcon } from '../../assets/instagram-clr.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-clr.svg';

const SectionIRL = (props) => {

    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const irlCtx = useContext(IRLContext);
    irlCtx.storeChange(activeStore, props.range);

    const CONTENT_TAN = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0 active',
            content:
                <IRLCard
                    name="@hughesyfit"
                    caption={irlCtx.caption1}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6dfe2acd-5388-48ff-3dd1-b2ed2b6cad00/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/13cb7403-0ef5-4216-3b94-e5ce95fbdc00/200x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review1}</p>

                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@hannahtucker"
                    caption={irlCtx.caption2}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/14450439-ff6e-4fe2-0030-373f53899600/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15647b0f-9340-41fb-4e09-f80692f0f800/200x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review2}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@orianavtorres"
                    caption={irlCtx.caption3}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7a518864-af70-46a1-6d76-8d8f43e1d100/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b734bbe7-e646-4ecf-d42e-5ee4c2c60300/200x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review3}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@jaydestella"
                    caption={irlCtx.caption4}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ed15f4ee-c1a7-4486-de95-81bf1b38c400/200x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18084a86-e332-4463-03d3-292b438d6900/200x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review4}</p>
                </IRLCard>
        }
    ]

    const CONTENT_HAIR = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@thatcurlblog"
                    caption={irlCtx.caption1}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7fd80ee2-3a90-4835-6e85-e2552c85c500/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d60ae9f-feab-48da-efc9-fad0bd41d100/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review1}</p>

                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@mairaaiellohair"
                    caption={irlCtx.caption2}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e998a8b9-d0f4-43a0-3b99-eee55acc0300/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bddfa405-8940-4c07-6c7a-6d808ce03f00/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review2}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@lanasummer"
                    caption={irlCtx.caption3}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d6879fb3-f21e-41e7-13dc-d319a9d19000/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15d98a3c-5e21-41f5-5720-6b5724d00e00/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review3}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@zainahussain"
                    caption={irlCtx.caption4}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a724bbe0-6572-4997-a9f4-f504053a4200/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7c4f5624-763f-46af-b37a-2ffcad792c00/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review4}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@bilaldelpesche"
                    caption={irlCtx.caption5}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/eed416cb-2670-4167-838a-62fcf20efa00/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ec0bbc04-5e4a-481b-6a8a-d3d96d118000/400x"
                >
                    <p>{irlCtx.review5}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@kaelatavares_"
                    caption={irlCtx.caption6}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae6a4377-05de-432f-d843-1db6d7e3c200/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae6a4377-05de-432f-d843-1db6d7e3c200/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review6}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@zara.howey"
                    caption={irlCtx.caption7}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c866f6ed-affe-4025-7682-42d77c80a900/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fdcfcf9b-c7b8-4e6b-bb06-f527cdd00800/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review7}</p>
                </IRLCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <IRLCard
                    name="@jasmine_lars"
                    caption={irlCtx.caption8}
                    image="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5fbfa92b-05d7-4340-4fd5-cf7d9a6bdf00/400x"
                    comImage="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1edca4dd-0bd1-48ab-ba08-de95aa161700/400x"
                    handle={props.handle}
                >
                    <p>{irlCtx.review8}</p>
                </IRLCard>
        }
    ]

    let CONTENT = CONTENT_TAN;
    if (props.range === 'hair') {
        CONTENT = CONTENT_HAIR;
    }

	return (
		<section className='customer-reviews py-4'>
            <h2 className="h1 mb-3 text-center">{irlCtx.title}</h2>
            <div className='d-flex justify-content-center mb-3'>
                <div className='d-flex align-items-center'><InstagramIcon className='font-size-sm' /><span className='ms-1 font-size-sm'>879k {irlCtx.on} Instagram</span></div>
                <div className='d-flex align-items-center ms-1'><FacebookIcon className='font-size-sm' /><span className='ms-1 font-size-sm'>287k {irlCtx.on} Facebook</span></div>
            </div>
            <div className='container px-g pe-0 pe-lg-g'>
                <Carousel
                    id="sectionIRL"
                    className="carousel slide carousel--loop carousel--mobile-half-next carousel--swipe"
                    items={CONTENT}
                    slideNumber="4"
                    forceCentered={true}
                    centered={true}>
                    <button className={`carousel-control carousel-control-prev  floating-out-start justify-content-start text-primary d-none ${CONTENT.length <= 4 ? '' : 'd-lg-flex' } `} data-bs-target="#sectionIRL" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                        <span className='visually-hidden-focusable'>Prev</span>
                    </button>
                    <button className={`carousel-control carousel-control-next  floating-out-end justify-content-end text-primary d-none ${CONTENT.length <= 4 ? '' : 'd-lg-flex' }`} data-bs-target="#sectionIRL" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                        <span className='visually-hidden-focusable'>Next</span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default SectionIRL;
