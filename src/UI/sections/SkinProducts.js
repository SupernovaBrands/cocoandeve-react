import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const PRODUCTS = [
	{
		handle: 'seed-oil-cleanser',
		info: 'An oil-based cleanser, expertly formulated to work as the first step in your routine.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b4393b17-4c4e-4ba2-373c-f00f66ad3800/public',
		us: {
			price: '$28',
			title: 'Seed Oil Cleanser',
		},
		ca: {
			price: '$38',
		},
		uk: {
			price: '£21',
		},
		eu: {
			price: '25€',
		},
		au: {
			price: '$42',
		},
		int: {
			price: '$38',
		},
		my: {
			price: 'RM123',
		},
		de: {
			price: '25€',
		},
		fr: {
			price: '25€',
			title: 'Seed Oil Cleanser',
		},
	},
	{
		handle: 'fruit-enzyme-cleanser',
		info: 'A water-based cleanser enriched with fruit enzymes - the perfect second step in your routine.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6332c005-90fa-4028-2105-c74f2a7ae600/public',
		us: {
			price: '$25',
			title: 'Fruit Enzyme Cleanser',
		},
		ca: {
			price: '$33',
		},
		uk: {
			price: '£19',
		},
		eu: {
			price: '24€',
		},
		au: {
			price: '$35',
		},
		int: {
			price: '$33',
		},
		my: {
			price: 'RM117',
		},
		de: {
			price: '24€',
		},
		fr: {
			price: '24€',
			title: 'Fruit Enzyme Cleanser',
		},
	},
	{
		handle: 'antioxidant-hydrating-milky-toner',
		info: 'A super hydrating milky toner that perfectly preps the skin for the rest of your regime.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/59333e95-7e41-4dd7-7a76-2c43af5c3400/public',
		us: {
			price: '$36',
			title: 'Antioxidant Milky Toner',
		},
		ca: {
			price: '$44',
		},
		uk: {
			price: '£26',
		},
		eu: {
			price: '33€',
		},
		au: {
			price: '$49',
		},
		int: {
			price: '$45',
		},
		my: {
			price: 'RM158',
		},
		de: {
			price: '33€',
		},
		fr: {
			price: '33€',
			title: 'Antioxidant Hydrating Milky Toner',
		},
	},
	{
		handle: 'double-cleanser-set',
		info: `Your ready-made, two-step routine for the best cleanse you'll ever have!`,
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2df76d57-a36a-4d04-34fc-2fd091a60e00/public',
		us: {
			price: '$42',
			crossedPrice: '$53',
			title: 'Double Cleanser Set',
		},
		ca: {
			price: '$57',
			crossedPrice: '$71',
		},
		uk: {
			price: '£32',
			crossedPrice: '£40',
		},
		eu: {
			price: '39€',
			crossedPrice: '49€',
		},
		au: {
			price: '$61',
			crossedPrice: '$77',
		},
		int: {
			price: '$57',
			crossedPrice: '$71',
		},
		my: {
			price: 'RM192',
			crossedPrice: 'RM240',
		},
		de: {
			price: '39€',
			crossedPrice: '49€',
		},
		fr: {
			price: '39€',
			title: 'Double Cleanser Set',
			crossedPrice: '49€',
		},
	},
	{
		handle: 'glow-getter-set',
		info: 'A trio of cleansing and nourishing skincare staples to reveal your glow every day.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/832b88a6-8182-45fb-f4dc-c43f74d91200/public',
		us: {
			price: '$71',
			crossedPrice: '$89',
			title: 'Glow Getter Set',
		},
		ca: {
			price: '$92',
			crossedPrice: '$115',
		},
		uk: {
			price: '£53',
			crossedPrice: '£66',
		},
		eu: {
			price: '66€',
			crossedPrice: '82€',
		},
		au: {
			price: '$101',
			crossedPrice: '$126',
		},
		int: {
			price: '$93',
			crossedPrice: '$116',
		},
		my: {
			price: 'RM318',
			crossedPrice: 'RM398',
		},
		de: {
			price: '66€',
			crossedPrice: '82€',
		},
		fr: {
			price: '66€',
			crossedPrice: '82€',
			title: 'Glow Getter Set',
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
				<div className={`d-flex justify-content-between mb-1 ${activeStore === 'fr' ? 'd-flex justify-content-between mb-1 youth-revive__products-card-title-fr' : 'skincare__products-card-title'}`}>
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
				<p dangerouslySetInnerHTML={{ __html: data.info }} className="mb-2 youth-revive__products-card-text skincare__products-card-text" />
				<a href={`https://www.cocoandeve.com/products/${data.handle}`} className="btn bg-white rounded-pill">Buy now</a>
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
					<p className="h2 youth-revive__products-title fw-bold mb-0 mb-1 mb-lg-4">Cleanse,<br className="d-none d-lg-block" /> repeat, treat</p>
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
					<div className="row flex-nowrap youth-revive__custom-scroll pe-lg-2 pb-4 pb-lg-0" ref={scrollRef} onScroll={onScroll}>
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
