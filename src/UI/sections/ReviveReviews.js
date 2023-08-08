import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const REVIEW_DATA = [
	{
		name: 'Zöe using:',
		text: 'I was a little concerned when I read the word retinol but wow the Honey Bliss Hair Set won me over! The products transformed my hair, leaving me with more shine and volume! My hair has never been so glossy! ',
		productTitle: 'Honey Bliss Hair Set',
		productHandle: 'honey-bliss-hair-set',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f09636fb-b1d6-4443-402a-7506d85a4f00/public',
	},
	{
		name: 'Suzi using:',
		text: 'This Coco & Eve hair mask repaired my clients hair! I use a lot of bleach onto my clients and the difference this made after using bleach, WOW! It made my clients hair so smooth, shiny & soft what a transformation!',
		productTitle: 'Pro Youth Hair & Scalp Mask',
		productHandle: 'pro-youth-hair-scalp-mask',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/53e49953-8fed-4ba8-7dd8-898ea7e9b800/public',
	},
	{
		name: 'Jewel using:',
		text: 'I love the way the products smell, so fresh and not overbearing. My hair became a lot smoother and hydrated and I have very dry hair from frequent colouring and being in chlorine. I the used the hair mask 2 times a week. I am so happy with the results! - Pro Youth Hair & Scalp Mask',
		productTitle: 'Pro Youth Hair & Scalp Mask',
		productHandle: 'pro-youth-hair-scalp-mask',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18df9656-90c2-4fc1-2d1b-3e4bc113b200/public',
	},
	{
		name: 'Mads using:',
		text: 'Using the Honey Bliss Hair Set has completely transformed my haircare routine. The ingredients are fabulous and the scent is stunning. Can’t wait to recommend this to all my friends, it’s definitely here to stay in my routine.',
		productTitle: 'Honey Bliss Hair Set',
		productHandle: 'honey-bliss-hair-set',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f968fc90-ce8e-4382-c657-528dee74ff00/public',
	},
	{
		name: 'Kaylee using:',
		text: 'I love how the whole set makes my hair feel, including the hair mask! The products also smell amazing & fresh. The hair mask is very hydrating, makes my hair very shiny & soft after leaving in for 5-10 minutes. After styling my hair, my hair felt so light and clean. I will be continuing to use to maintain the health of my hair. Now they’re my favorite to use ',
		productTitle: 'Pro Youth Hair & Scalp Mask',
		productHandle: 'pro-youth-hair-scalp-mask',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83ca75af-f442-4730-3a0b-793bf164ea00/public',
	},
];

const ReviewCard = (props) => {
	return (
		<figure className="mb-0 col-9 col-lg-5" ref={props.cardRef}>
			<picture className="d-block mb-2">
				<source srcSet={props.data.src} media="(min-width: 992px)" width="390" height="508" />
				<img src={props.data.src} className="w-100" loading="lazy" width="257" height="335" />
			</picture>
			<figcaption>
				<p className="youth-revive__reviews-text">{props.data.text}</p>
				<div className="youth-revive__reviews-user">
					<strong className="me-1">{props.data.name}</strong>
					<a href={`https://www.cocoandeve.com/products/${props.data.productHandle}`} className="text-body">{props.data.productTitle}</a>
				</div>
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
		const end = window.innerWidth < 992 ? 997 : 1103;
		console.log('pos', pos);
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
		<section className="youth-revive__section youth-revive__reviews row align-items-center ms-0 pt-4 pt-lg-0">
			<div className="col-12 col-lg-3 px-g">
				<p className="youth-revive__reviews-title mb-0 h2 mb-2 mb-lg-4">Our powerhouse in action</p>
				<div className="youth-revive__carousel-control mb-3 mb-lg-0">
					<button type="button" className={`btn-unstyled ${leftDisabled ? 'btn-disabled' : ''}`} disabled={leftDisabled} onClick={scrollLeft}>
						<ArrowLeft />
					</button>
					<button type="button" className={`btn-unstyled ${rightDisabled ? 'btn-disabled' : ''}`} disabled={rightDisabled} onClick={scrollRight}>
						<ArrowRight />
					</button>
				</div>
			</div>
			<div className="col-12 col-lg-9 ps-g pe-2 pe-lg-4">
				<div className="row flex-nowrap youth-revive__custom-scroll" ref={scrollRef} onScroll={onScroll}>
					{REVIEW_DATA.map((review, id) => (
						<ReviewCard key={id} data={review} cardRef={cardRef} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ReviveReviews;
