import React, { lazy, Suspense } from 'react';
import RangeProvider from "../../store/RangeProvider";
import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
import RangeCarousel from "../sections/RangeCarousel";
import BannerImage from '../sections/BannerImage';
import ReviewProvider from '../../store/ReviewProvider';
import RealResults from '../sections/RealResults';
const SeenIn = lazy(() => import('../sections/SeenIn'));
const AmazonHairRange = () => {
	const bannerData = {
		desktop: {
			webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x',
			jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x'
		},
		mobile: {
			webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x',
			jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x'
		},
	}
	return (
		<RangeProvider>
			<RangeBanner range='amazonHair' />
			<RangeCarousel range='amazonHair' />
			<Suspense fallback={<div></div>}>
                <BannerImage bannerData={bannerData} />
				<ReviewProvider>
					<SeenIn range="hair" />
                </ReviewProvider>
				<RealResults range="hair" />
            </Suspense>
		</RangeProvider>
	);
};

export default AmazonHairRange;
