import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
const DATA = [
	{
		title: 'Pro Vitali-B™ Blend',
		desc: 'A powerful blend of Manuka Honey, Propolis Extract and Royal Jelly extract that nourishes and strengthens from scalp to ends.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a1384482-aeb2-45a1-b8cb-31e702d0d500/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a1384482-aeb2-45a1-b8cb-31e702d0d500/540x',
	},
	{
		title: 'Retinol',
		desc: 'A skin-loving hero that increases cellular turnover by lifting dead skin, dissolving excess oil and clearing clogged pores. ',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5f10a287-6b81-427c-63c3-8ef4baddd800/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5f10a287-6b81-427c-63c3-8ef4baddd800/540x',
	},
	{
		title: 'Prebiotics/Probiotics',
		desc: 'A selective food supplement that helps to balance skin microbiota resulting in healthier-looking scalp.',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d90ff8f2-abb8-44f8-bcd9-008cf6c16200/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d90ff8f2-abb8-44f8-bcd9-008cf6c16200/540x',
	},
	{
		title: 'Coconut oil',
		desc: 'A rich source of fatty acids and vitamin E that deeply hydrates and repairs dry and brittle strands',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6eb7e5b-0460-44d0-56bd-98368b2daa00/540x',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6eb7e5b-0460-44d0-56bd-98368b2daa00/540x',
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
		const end = window.innerWidth < 992 ? 660 : 220;
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
		<section className="youth-revive__section youth-revive__ingredients-wrapper">
			<div className="youth-revive__ingredients">
				<div className="youth-revive__custom-scroll px-g">
					<div className="row">
						<h2 className="col-6 col-lg-4 youth-revive__ingredients-title mb-2 mb-lg-4">Discover the ingredients</h2>
					</div>
				</div>
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
