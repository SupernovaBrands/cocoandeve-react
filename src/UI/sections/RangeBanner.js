
import { useContext } from "react";

import RangeContext from "../../store/range-context";
import ConditionWrapper from "../../modules/ConditionWrapper";

const RangeBanner = (props) => {
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const rangeCtx = useContext(RangeContext);
	let bannerSection = rangeCtx.bannerSection[props.range][activeStore];
	if (!bannerSection) {
		bannerSection = rangeCtx.bannerSection[props.range]['us'];
	}

	return (
		<section className='range__banner jumbotron'>
			{bannerSection.title && bannerSection.subtitle && (
				<div className='d-lg-none text-center'>
					<h1 className='mb-1'>{bannerSection.title}</h1>
					<p className='mb-1'>{bannerSection.subtitle}</p>
				</div>
			)}

			<ConditionWrapper
				condition={props.isClickable}
				wrapper={(children) => <a href={props.externalUrl}>{children}</a>}
			>
				<picture className="d-block w-100">
					{bannerSection.desktop.webpBanner && (
						<source srcSet={bannerSection.desktop.webpBanner} media="(min-width: 768px)" type="image/webp" />
					)}
					<source srcSet={bannerSection.desktop.jpegBanner} media="(min-width: 768px)" type="image/jpeg" />
					{bannerSection.mobile.webpBanner && (
						<source srcSet={bannerSection.mobile.webpBanner} type="image/webp" />
					)}
					<source srcSet={bannerSection.mobile.jpegBanner} type="image/jpeg" />
					<img
						src={bannerSection.mobile.webpBanner ? bannerSection.mobile.webpBanner : bannerSection.mobile.jpegBanner}
						alt="Range banner"
						className="w-100 fit--cover" />
				</picture>
			</ConditionWrapper>
        </section>
	);
};

export default RangeBanner;
