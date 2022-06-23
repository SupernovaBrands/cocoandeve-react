
import { useContext } from "react";

import RangeContext from "../../store/range-context";

const RangeBanner = () => {
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const rangeCtx = useContext(RangeContext);
	let bannerSection = rangeCtx.bannerSection[activeStore];
	if (!bannerSection) {
		bannerSection = rangeCtx.bannerSection['us'];
	}

	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Sunny Honey</h1>
				<p className='mb-1'>{bannerSection.title}</p>
			</div>

			<picture className="d-block w-100">
				<source srcSet={bannerSection.webpBanner} media="(min-width: 768px)" type="image/webp" />
				<source srcSet={bannerSection.jpegBanner} media="(min-width: 768px)" type="image/jpeg" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x" type="image/webp" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/afa85196-4f02-42da-091e-393e63d1c900/828x" type="image/jpeg" />
				<img
					src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/afa85196-4f02-42da-091e-393e63d1c900/828x"
					alt="Range banner"
					className="w-100 fit--cover" />
			</picture>
        </section>
	);
};

export default RangeBanner;
