import { useState } from "react";

const ReviveBannerReverse = () => {
	return (
		<section className="youth-revive__section skincare__banner-text-reverse-wrapper skincare__banner pb-4 px-g">
			<p className="youth-revive__banner-text-reverse-title fw-bold d-lg-block mb-3 youth-revive__reviews mt-3">So, what activates your glow?</p>
            <picture className="d-block w-100">
                <source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/17ae7941-db70-4c9a-e377-c5e383ed8d00/2280x' media="(min-width: 768px)" type="image/jpeg" />
                <source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b417508e-d402-4119-c370-052f97ebf400/828x' type="image/jpeg" />
                <img
                    src='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b417508e-d402-4119-c370-052f97ebf400/828x'
                    alt="Range banner"
                    className="w-100 fit--cover" />
            </picture>
		</section>
	);
}

export default ReviveBannerReverse;
