import React, { lazy, Suspense } from 'react';
import RangeProvider from "../../store/RangeProvider";
import RangeBanner from "../sections/RangeBanner";
import '../../range.scss';
import RangeCarousel from "../sections/RangeCarousel";
import BannerImage from '../sections/BannerImage';
import ReviewProvider from '../../store/ReviewProvider';
import RealResults from '../sections/RealResults';
import { amazonURLCategory } from '../../modules/Utils';
import TimerBar from '../sections/TimerBar';
const SeenIn = lazy(() => import('../sections/SeenIn'));
const AmazonHairRange = () => {
	const bannerData = {
		desktop: {
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0232c032-0abc-4d05-9bf1-c22877d0c300/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/451501eb-dde3-41ec-66f6-1d0629e07e00/2280x'
			},
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0232c032-0abc-4d05-9bf1-c22877d0c300/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/451501eb-dde3-41ec-66f6-1d0629e07e00/2280x'
			}
		},
		mobile: {
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x'
			},
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/90953968-87df-488e-8dde-b5c48c0d9200/828x'
			}
		},
	};
	const bannerData2 = {
		desktop: {
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/2280x'
			},
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/2280x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/2280x'
			}
		},
		mobile: {
			uk: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/828x'
			},
			ca: {
				webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/828x',
				jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b5fda47-5922-4528-5819-c34967619100/828x'
			}
		},
	};
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';
	const EXTERNAL_URL = amazonURLCategory('hair', activeStore);
	return (
		<RangeProvider>
			<RangeBanner range='amazonHair' isClickable={true} externalUrl={EXTERNAL_URL} />
			<RangeCarousel range='amazonHair' />
			<Suspense fallback={<div></div>}>
                <BannerImage bannerData={bannerData} />
				<BannerImage bannerData={bannerData2} />
				<ReviewProvider>
					<SeenIn range="hair" />
                </ReviewProvider>
				<RealResults range="hair" />
            </Suspense>
		</RangeProvider>
	);
};

export default AmazonHairRange;
