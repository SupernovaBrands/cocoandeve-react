import React, { lazy, Suspense } from 'react';
import RangeProvider from "../../store/RangeProvider";
import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
import RangeCarousel from "../sections/RangeCarousel";
import BannerImage from '../sections/BannerImage';
import ReviewProvider from '../../store/ReviewProvider';
import RealResults from '../sections/RealResults';
import WhatMakesDifferent from '../sections/WhatMakesDifferent';
const SeenIn = lazy(() => import('../sections/SeenIn'));
const AmazonHairRange = () => {
	const bannerData = {
		desktop: {
			webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/451501eb-dde3-41ec-66f6-1d0629e07e00/2280x',
			jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c0a8243b-7e5d-4398-f5d1-088a57479000/2280x'
		},
		mobile: {
			webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b93abb92-6a08-4555-e5cd-43fd63c22400/828x',
			jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b93abb92-6a08-4555-e5cd-43fd63c22400/828x'
		},
	};
	return (
		<RangeProvider>
			<RangeBanner range='amazonTan' />
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
