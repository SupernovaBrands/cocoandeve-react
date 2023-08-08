import React, { lazy, Suspense } from 'react';
import RangeProvider from "../../store/RangeProvider";
import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
import RangeCarousel from "../sections/RangeCarousel";
import BannerImage from '../sections/BannerImage';
import ReviewProvider from '../../store/ReviewProvider';
import RealResults from '../sections/RealResults';
import WhatMakesDifferent from '../sections/WhatMakesDifferent';
import { amazonURLCategory } from '../../modules/Utils';
const SeenIn = lazy(() => import('../sections/SeenIn'));
const AmazonHairRange = () => {
	const bannerData = {
		desktop: {
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/451501eb-dde3-41ec-66f6-1d0629e07e00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c0a8243b-7e5d-4398-f5d1-088a57479000/2280x'
			},
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/698f76dc-970f-47a9-c99d-f9ab4a839c00/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/698f76dc-970f-47a9-c99d-f9ab4a839c00/2280x'
			},
			us: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cb0ba0c1-833a-4bdf-9348-0d21d8e49200/1140x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cb0ba0c1-833a-4bdf-9348-0d21d8e49200/1140x'
			}
		},
		mobile: {
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b93abb92-6a08-4555-e5cd-43fd63c22400/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b93abb92-6a08-4555-e5cd-43fd63c22400/828x'
			},
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b93abb92-6a08-4555-e5cd-43fd63c22400/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b93abb92-6a08-4555-e5cd-43fd63c22400/828x'
			},
			us: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e223860d-3bf1-45fe-c25e-127092be3800/1140x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e223860d-3bf1-45fe-c25e-127092be3800/1140x'
			}
		},
	};
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';
	const EXTERNAL_URL = amazonURLCategory('tan', activeStore);
	return (
		<RangeProvider>
			<RangeBanner range='amazonTan' isClickable={true} externalUrl={EXTERNAL_URL} />
			<RangeCarousel range='amazonTan' />
			<Suspense fallback={<div></div>}>
                <BannerImage bannerData={bannerData} />
				<WhatMakesDifferent />
				<ReviewProvider>
					<SeenIn range="tan" />
                </ReviewProvider>
				<RealResults range="tan" />
            </Suspense>
		</RangeProvider>
	);
};

export default AmazonHairRange;
