import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const PRODUCTS = [
	{
		handle: 'pro-youth-shampoo-conditioner',
		info: 'Cleanses, strengthens and conditions hair for youthful locks.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b24c1481-7b40-46b5-fd79-238233b53a00/public',
		us: {
			price: '$47.50',
			crossedPrice: '$56.00',
			title: 'Pro Youth Shampoo & Conditioner Set',
		},
		ca: {
			price: '$56.00',
			crossedPrice: '$66.00',
		},
		uk: {
			price: '£42.50',
			crossedPrice: '£50.00',
		},
		eu: {
			price: '47.50€',
			crossedPrice: '56.00€',
		},
		au: {
			price: '$47.50',
			crossedPrice: '$56',
		},
		int: {
			price: '$66.00',
			crossedPrice: '$78.00',
		},
		my: {
			price: 'RM192',
			crossedPrice: 'RM226',
		},
		de: {
			price: '47,50€',
			crossedPrice: '56€',
		},
		fr: {
			price: '47,50€',
			crossedPrice: '56€',
			title: 'Ensemble shampooing et après-shampooing Pro Youth',
		},
	},
	{
		handle: 'honey-bliss-hair-set',
		info: 'Transforms and revitalises hair. Enhances shine, strength, and volume with every wash.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7529711a-e2d8-4f92-262b-7d7a2abe3f00/public',
		us: {
			price: '$76.00',
			crossedPrice: '$95.00',
			title: 'Honey Bliss Hair Set',
		},
		ca: {
			price: '$94.00',
			crossedPrice: '$118.00',
		},
		uk: {
			price: '£66.00',
			crossedPrice: '£82.00',
		},
		eu: {
			price: '76.00€',
			crossedPrice: '95.00€',
		},
		au: {
			price: '$76',
			crossedPrice: '$95',
		},
		int: {
			price: '$104.00',
			crossedPrice: '$130.00',
		},
		my: {
			price: 'RM318',
			crossedPrice: 'RM398',
		},
		de: {
			price: '74€',
			crossedPrice: '92€',
			title: 'Honey Bliss Haarset',
		},
		fr: {
			price: '74€',
			crossedPrice: '92€',
			title: 'Kit pour Cheveux Honey Bliss',
		},
	},
	{
		handle: 'pro-youth-hair-scalp-mask',
		info: 'Restores shine and vitality, whilst rebalances the scalp for healthy future hair growth.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9d74d9d2-f469-4846-6d0c-bce8c78a2600/public',
		us: {
			price: '$39.00',
			title: 'Pro Youth Hair & Scalp Mask',
		},
		ca: {
			price: '$52.00',
		},
		uk: {
			price: '£32.00',
		},
		eu: {
			price: '36.00€',
		},
		au: {
			price: '$39',
		},
		int: {
			price: '$52.00',
		},
		my: {
			price: 'RM172',
		},
		de: {
			price: '36€',
		},
		fr: {
			price: '36€',
			title: 'Masque Pro Youth Hair & Scalp',
		},
	},
	{
		handle: 'pro-youth-shampoo',
		info: 'Cleanses, clarifies and strengthens for youthful-looking hair with double the shine.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/dbfa45cf-6dd1-43e6-8af0-2dc5c33e9a00/public',
		us: {
			price: '$28.00',
			title: 'Pro Youth Shampoo',
		},
		ca: {
			price: '$33.00',
		},
		uk: {
			price: '£25.00',
		},
		eu: {
			price: '28.00€',
		},
		au: {
			price: '$28',
		},
		int: {
			price: '$39.00',
		},
		my: {
			price: 'RM113',
		},
		de: {
			price: '28€',
		},
		fr: {
			price: '28€',
			title: 'Shampooing Pro Youth',
		},
	},
	{
		handle: 'pro-youth-conditioner',
		info: 'Nourishes and revitalises hair for ultra-shiny strands with a reduction in breakage.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/024a3ec4-c481-4525-2742-bf34592e9b00/public',
		us: {
			price: '$28.00',
			title: 'Pro Youth Conditioner',
		},
		ca: {
			price: '$33.00',
		},
		uk: {
			price: '£25.00',
		},
		eu: {
			price: '28.00€',
		},
		au: {
			price: '$28',
		},
		int: {
			price: '$39.00',
		},
		my: {
			price: 'RM113',
		},
		de: {
			price: '28€',
		},
		fr: {
			price: '28€',
			title: 'Après-shampooing Pro Youth',
		},
	},
	{
		handle: 'pro-youth-scalp-massager',
		info: 'Sloughs away dead skin cells and stimulate your scalp',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f560eae0-905a-4dc1-a34c-33cebfc6c500/public',
		us: {
			price: '$14.00',
			title: 'Pro Youth Scalp Massager',
		},
		ca: {
			price: '$19.00',
		},
		uk: {
			price: '£12.00',
		},
		eu: {
			price: '14.00€',
		},
		au: {
			price: '$14',
		},
		int: {
			price: '$19.00',
		},
		my: {
			price: 'RM59',
		},
		de: {
			price: '14€',
			title: 'Pro Youth Scalp Massagebürste',
		},
		fr: {
			price: '14€',
		},
	},
];

const ProductCard = (props) => {
	const { data } = props;
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';
	const title = (data[activeStore].title) ? data[activeStore].title : data['us'].title;
	return (
		<figure className="col-9 col-lg-5 youth-revive__products-card mb-0 col-lg-product" ref={props.cardRef}>
			<a href={`https://www.cocoandeve.com/products/${data.handle}`} className="d-block mb-2">
				<picture>
					<source srcSet={data.src} media="(min-width: 992px)" />
					<img className="w-100" src={data.src} alt={title} />
				</picture>
			</a>
			<figcaption className="font-size-base">
				<div className={`d-flex justify-content-between mb-1 ${activeStore === 'fr' ? 'd-flex justify-content-between mb-1 youth-revive__products-card-title-fr' : 'youth-revive__products-card-title'}`}>
					<p className="fw-bold mb-0 text-uppercase me-2">
						<a href={`https://www.cocoandeve.com/products/${data.handle}`} className="text-body text-decoration-none">{title}</a>
					</p>
					<p className="mb-0">
						{data[activeStore].crossedPrice && (
							<span className="text-linethrough me-1">{data[activeStore].crossedPrice}</span>
						)}
						<span className="fw-bold">{data[activeStore].price}</span>
					</p>
				</div>
				<p dangerouslySetInnerHTML={{ __html: data.info }} className="mb-3 youth-revive__products-card-text" />
				<a href={`https://www.cocoandeve.com/products/${data.handle}`} className="btn bg-white rounded-pill">Learn more</a>
			</figcaption>
		</figure>
	);
};
const ReviveProducts = () => {
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
		<section className="youth-revive__section youth-revive__products px-g">
			<div className="row align-items-lg-center">
				<div className="col-12 col-lg-4 col-lg-product--left">
					<p className="h2 youth-revive__products-title fw-bold mb-0 mb-1 mb-lg-4">Restore hair<br />shine and <br className="d-none d-lg-block" />vitality</p>
					<div className="youth-revive__carousel-control mb-3 mb-lg-0">
						<button type="button" className={`btn-unstyled ${leftDisabled ? 'btn-disabled' : ''}`} disabled={leftDisabled} onClick={scrollLeft}>
							<ArrowLeft />
						</button>
						<button type="button" className={`btn-unstyled ${rightDisabled ? 'btn-disabled' : ''}`} disabled={rightDisabled} onClick={scrollRight}>
							<ArrowRight />
						</button>
					</div>
				</div>
				<div className="col-12 col-lg-8 col-lg-product--right">
					<div className="row flex-nowrap youth-revive__custom-scroll pe-lg-2 pb-2 pb-lg-0" ref={scrollRef} onScroll={onScroll}>
						{PRODUCTS.map((item, i) => (
							<ProductCard key={i} data={item} cardRef={cardRef} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviveProducts;
