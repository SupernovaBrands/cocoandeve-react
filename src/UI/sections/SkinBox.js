import { useState } from "react";

const ReviveBannerReverse = () => {
	return (
		<section className="youth-revive__section skincare__banner-text-reverse-wrapper skincare__banner pb-4 px-g">
			<p className="youth-revive__banner-text-reverse-title fw-bold d-lg-block mb-3 youth-revive__reviews mt-3">So, what activates your glow?</p>
            <picture className="d-block w-100">
                <source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/58c1c530-0b75-4219-04e6-f2deb6dcc200/2280x' media="(min-width: 768px)" type="image/jpeg" />
                <source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6b0059ac-01dd-4d56-b8d1-a4eaf2290d00/828x' type="image/jpeg" />
                <img
                    src='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6b0059ac-01dd-4d56-b8d1-a4eaf2290d00/828x'
                    alt="Range banner"
                    className="w-100 fit--cover" />
            </picture>
		</section>
	);
}

export default ReviveBannerReverse;
