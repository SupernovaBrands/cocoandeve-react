import { useState } from "react";

const ReviveBannerReverse = () => {
	const [panelActive, setPanelActive] = useState(1);
	return (
		<section className="youth-revive__section skincare__banner-text-reverse-wrapper pt-1">
			<div className="row youth-revive__banner-text align-items-lg-center">
				<div className="col-12 col-lg-6 px-2 px-lg-g pe-lg-0 youth-revive__banner-text-content youth-revive__banner-text-reverse-content">
					<div className="youth-revive__banner-text-wrapper youth-revive__banner-text-reverse-wrapper pt-4 pb-1 py-lg-0 pe-lg-g">
						<p className="youth-revive__banner-text-reverse-title fw-bold d-lg-block mb-1">Meet the Power <br className="d-none d-lg-block" />Couple!</p>
                        <p className="youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
                        Take your skin-purifying routine to the next <br className="d-lg-none"/>level <br className="d-none d-lg-block"/>with our glow-inducing double-<br className="d-lg-none"/>cleansing duo, <br className="d-none d-lg-block"/>formulated to be doubly effective when used <br className="d-none d-lg-block"/>together.
                        </p>
					</div>
				</div>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 1 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9c595f10-1665-473d-b73b-4803d4400000/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b972bb60-7244-4446-9f28-578d5439ad00/828x" loading="lazy" />
				</figure>
			</div>
		</section>
	);
}

export default ReviveBannerReverse;
