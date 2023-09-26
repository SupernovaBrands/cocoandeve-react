import React, { lazy, Suspense } from 'react';
import '../../range-youth-revive.scss';
import RangeProvider from "../../store/RangeProvider";
import BannerImage from '../sections/BannerImage';
import SkinIngredients from '../sections/SkinIngredients';
import SkinProducts from '../sections/SkinProducts';

const BannerText = lazy(() => import('../sections/SkinBanner'));
const SkinBannerReverse = lazy(() => import('../sections/SkinBannerReverse'));
const SkinBannerReverseSection = lazy(() => import('../sections/SkinBannerReverseSection'));
const SkinFooter = lazy(() => import('../sections/SkinFooter'));
const SkincareAccordion = lazy(() => import('../sections/SkincareAccordion'));
const SkincareReviews = lazy(() => import('../sections/SkincareReviews'));
const SkinBox = lazy(() => import('../sections/SkinBox'));
const SkinResults = lazy(() => import('../sections/SkinResults'));
const YouthRevive = () => {
	const bannerData = {
		desktop: {
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			us: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			eu: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			au: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			int: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			de: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			fr: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
			my: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/183737da-13ba-4958-37e2-1625e5d91900/2280x'
			},
		},
		mobile: {
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			us: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			eu: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			au: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			int: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			de: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			fr: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
			my: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d1f671a-ca57-401f-3cbd-2f3e55004f00/828x'
			},
		},
	};
	return (
		<RangeProvider>
			<BannerImage isClickable={true} externalUrl={`http://www.cocoandeve.com/collections/skincare`} bannerData={bannerData} className="youth-revive__section youth-revive__range__banner" />
			{/* <RangeCarousel range='amazonTan' /> */}
            <SkinProducts />
            <Suspense fallback={<div></div>}>
				<BannerText />
                <SkinBannerReverse />
                <SkinResults />
                <SkinBox />
                <SkinIngredients />
                <SkinBannerReverseSection />
                <SkincareReviews />
                <SkincareAccordion />
                <SkinFooter />
            </Suspense>
		</RangeProvider>
	);
};

export default YouthRevive;
