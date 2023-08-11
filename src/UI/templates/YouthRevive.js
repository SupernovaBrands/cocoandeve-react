import React, { lazy, Suspense } from 'react';
import '../../range-youth-revive.scss';
import RangeProvider from "../../store/RangeProvider";
import BannerImage from '../sections/BannerImage';
import ReviveIngredients from '../sections/ReviveIngredients';
import ReviveProducts from '../sections/ReviveProducts';
// import ReviveReviews from '../sections/ReviveReviews';
const BannerText = lazy(() => import('../sections/ReviveBanner'));
const ReviveBannerReverse = lazy(() => import('../sections/ReviveBannerReverse'));
const ReviveFooter = lazy(() => import('../sections/ReviveFooter'));
const ReviveRoutine = lazy(() => import('../sections/ReviveRoutine'));
const ReviveArticle = lazy(() => import('../sections/ReviveArticles'));
const ReviveAccordion = lazy(() => import('../sections/ReviveAccordion'));
const ReviveReviews = lazy(() => import('../sections/ReviveReviews'));
const YouthRevive = () => {
	const bannerData = {
		desktop: {
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			us: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			eu: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			au: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			int: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			de: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			fr: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
			my: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/86de0667-1a16-4db5-2641-90361b510b00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1765f0ba-6997-4a04-2f5d-c79e3566cc00/2280x'
			},
		},
		mobile: {
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			us: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			eu: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			au: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			int: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			de: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			fr: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
			my: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/28e82adf-3716-411c-2240-08c5588cd700/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8cc1d93f-15fc-4455-bde7-673964068900/828x'
			},
		},
	};
	return (
		<RangeProvider>
			<BannerImage isClickable={true} externalUrl={`http://www.cocoandeve.com/collections/youth-revive`} bannerData={bannerData} className="youth-revive__section youth-revive__range__banner" />
			{/* <RangeCarousel range='amazonTan' /> */}
			<ReviveProducts />
			<Suspense fallback={<div></div>}>
				<BannerText />
				<ReviveReviews />
				<ReviveIngredients />
				<ReviveBannerReverse />
				<ReviveRoutine />
				<ReviveArticle />
				<ReviveAccordion />
				<ReviveFooter />
            </Suspense>
		</RangeProvider>
	);
};

export default YouthRevive;
