import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
const DATA = [
	{
		title: 'IBR-Dragon®',
		desc: 'An eco-designed extract from Dragon Fruit, which helps to reveal healthy-looking skin.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ac6c7579-025c-4674-881e-c09796652700/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ac6c7579-025c-4674-881e-c09796652700/540x',
	},
	{
		title: 'Niacinamide',
		desc: 'Reinforces resistance to barrier damage and keeps the skin feeling hydrated.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/801972b1-456b-46e1-4f85-bb9867e6fb00/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/801972b1-456b-46e1-4f85-bb9867e6fb00/540x',
	},
	{
		title: 'Coconut oil',
		desc: 'Rich in lauric acid, which is known to have antiviral, antibacterial and antifungal properties.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c72d4dd2-6afb-4a7f-5f42-87b77926e100/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c72d4dd2-6afb-4a7f-5f42-87b77926e100/540x',
	},
	{
		title: 'Salicylic Acid (BHA)',
		desc: 'Gently exfoliates the skin, making it look and feel more refined.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/dcdf0bc9-8cc0-4d21-8bc2-b270d170e200/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/dcdf0bc9-8cc0-4d21-8bc2-b270d170e200/540x',
	},
    {
		title: 'Prebiotics',
		desc: 'Reduces redness, inflammation, the appearance of wrinkles and signs of ageing by supporting the skin’s ecosystem',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c8fb21f7-39a4-43c7-37dc-609e735c8b00/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c8fb21f7-39a4-43c7-37dc-609e735c8b00/540x',
	},
    {
		title: 'Papaya Enzymes (Papain)',
		desc: 'Clears out dead skin cells that cause clogged pores and helps prevents the formation of acne',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b5727517-236b-40d0-189a-703f93a7d800/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b5727517-236b-40d0-189a-703f93a7d800/540x',
	},
    {
		title: 'Gluconolactone (PHA)',
		desc: 'A new generation of AHAs that evens out skin tone and removes excess oil from skin',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8b41932f-1420-4d29-38da-6bcd72bafe00/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8b41932f-1420-4d29-38da-6bcd72bafe00/540x',
	},
];

const IngredientCard = (props) => {
	return (
		<figure className="col-10 youth-revive__ingredients-card mb-0 pt-2 pt-lg-0" ref={props.cardRef}>
			<picture className="d-block mb-0">
				<source srcSet={props.data.srcSet} media="(min-width: 992px)" width="368" />
				<img className="w-100" src={props.data.src} loading="lazy" width="280" />
			</picture>
			<figcaption className="pt-25 pt-lg-0">
				<strong className="d-block text-uppercase mb-1">{props.data.title}</strong>
				<p className="mb-0 pe-lg-2">{props.data.desc}</p>
			</figcaption>
		</figure>
	);
};

const ReviveIngredients = () => {
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
		<section className="youth-revive__section skincare__ingredients-wrapper">
			<div className="youth-revive__ingredients skincare__ingredients">
				<div className="position-relative px-g">
					<div className="youth-revive__carousel-control youth-revive__ingredients-control position-absolute top-0">
						<button type="button" className={`btn-unstyled ${leftDisabled ? 'btn-disabled' : ''}`} disabled={leftDisabled} onClick={scrollLeft}>
							<ArrowLeft />
						</button>
						<button type="button" className={`btn-unstyled ms-1 ${rightDisabled ? 'btn-disabled' : ''}`} disabled={rightDisabled} onClick={scrollRight}>
							<ArrowRight />
						</button>
					</div>
					<div className="flex-nowrap row youth-revive__custom-scroll pe-3 pt-4" onScroll={onScroll} ref={scrollRef}>
						{DATA.map((item, index) => (
							<IngredientCard key={index} data={item} cardRef={cardRef} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviveIngredients;
