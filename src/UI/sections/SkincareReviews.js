import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const REVIEW_DATA = [
	{
		name: 'Brooke Ayres using:',
		text: 'My skin loved these products! Together, they left my skin soft, glowy and supple. I must say, the Seed Oil Cleanser with the Enzyme Cleanser are a beautiful match. They cleansed any makeup and impurities I had on and also provided gentle exfoliation, leaving my skin feeling refreshed!',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f0117b5b-8b24-4c59-aab7-1db3cb490700/public',
	},
    {
		name: 'Chelsi de Guzman',
		text: 'Two words: instant glow. From bland and rough, my skin had gone supple, smooth, and glowy in an instant. I started noticing results in a week, and a huge difference in my skin texture and complexion in two. Check out that rosy tint on my cheeks! I’m hooked!',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fceb1b2c-544f-490d-191e-7962e298b800/public',
	},
    {
		name: 'Alexandra Elliot',
		text: `After a few days I started to see my eczema calm and the redness subdued, giving my face a less 'angry' appearance. The happiest result being that I was able to put makeup around my nose again without it appearing flakey!`,
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3255b2cb-6cad-4a6b-739c-385aa66d7700/public',
	},
    {
		name: 'Melanie Vujisic',
		text: 'Absolutely AMAZING! With every use, I noticed my fine lines and texture disappearing. It kept my skin bright, plump, and soft. I’d say that these products are going to be a staple in my daily skincare routine and it would feel like a crime to pass on them!',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3d9fa29e-0e7f-4a30-deda-dc71df468800/public',
	},
    {
		name: 'Melissa Rhodes',
		text: 'I will definitely carry on using these products! The Seed Oil Cleanser effortlessly removes makeup, leaving my skin hydrated and non-greasy. The Fruit Enzyme Cleanser adds brightness and smoothness to my complexion with just a little product. ',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a40efe1-133d-4dbe-cda0-75885f54ae00/public',
	},
];

const ReviewCard = (props) => {
	return (
		<figure className="mb-0 col-95 col-lg-review" ref={props.cardRef}>
			<picture className="d-block mb-1">
				<source srcSet={props.data.src} media="(min-width: 992px)" width="370" />
				<img src={props.data.src} className="w-100" loading="lazy" width="280" />
			</picture>
			<figcaption>
                <div className="youth-revive__reviews-user mb-1 mb-lg-0">
					<strong className="me-1">{props.data.name}</strong>
					<a href={`https://www.cocoandeve.com/products/${props.data.productHandle}`} className="text-body">{props.data.productTitle}</a>
				</div>
				<p className="youth-revive__reviews-text mb-4">{props.data.text}</p>
			</figcaption>
		</figure>
	);
};

const ReviveReviews = () => {
	const scrollRef = useRef();
	const cardRef = useRef();
	const [leftDisabled, setLeftDisabled] = useState(true);
	const [rightDisabled, setRightDisabled] = useState(false);
	const scroll = (direction) => {
		const cardWidth = cardRef.current?.offsetWidth;
		const el = scrollRef.current;
		const left = el.scrollLeft;
		const offset = direction === 'left' ? -(cardWidth) : cardWidth;
		el.scrollTo({ left: left + offset });
	};
	const scrollLeft = () => {
		setRightDisabled(false);
		scroll('left');
	};
	const scrollRight = () => {
		setLeftDisabled(false);
		scroll('right');
	};
	const onScroll = () => {
		const pos = scrollRef.current?.scrollLeft;
		const cWidth = scrollRef.current?.clientWidth;
		const sWidth = scrollRef.current?.scrollWidth;
		const end = (sWidth - cWidth) - 1;
		if (pos <= 0) {
			setLeftDisabled(true);
		} else if (pos >= end) {
			setRightDisabled(true);
		} else {
			setLeftDisabled(false);
			setRightDisabled(false);
		}
	};
	return (
		<section className="youth-revive__section youth-revive__reviews skincare__reviews ms-0 pt-4 pt-lg-0 px-g">
			<div className="row align-items-center">
				<div className="col-12 col-lg-review--left px-g">
					<p className="youth-revive__reviews-title mb-0 h2 mb-2 mb-lg-4">Look at you <br className="d-none d-lg-block" />glow...</p>
					<div className="youth-revive__carousel-control mb-3 mb-lg-0">
						<button type="button" className={`btn-unstyled ${leftDisabled ? 'btn-disabled' : ''}`} disabled={leftDisabled} onClick={scrollLeft}>
							<ArrowLeft />
						</button>
						<button type="button" className={`btn-unstyled ${rightDisabled ? 'btn-disabled' : ''}`} disabled={rightDisabled} onClick={scrollRight}>
							<ArrowRight />
						</button>
					</div>
				</div>
				<div className="col-12 col-lg-review--right">
					<div className="row flex-nowrap youth-revive__custom-scroll pe-2 pe-lg-4" ref={scrollRef} onScroll={onScroll}>
						{REVIEW_DATA.map((review, id) => (
							<ReviewCard key={id} data={review} cardRef={cardRef} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviveReviews;
