import { useState } from "react";

const AccordionPanel = (props) => {
	return (
		<div className="accordion accordion-flush youth-revive__accordion-panel" id="accordionReviveBannerReverse">
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingOne">
					<button onClick={() => props.setPanelActive(1)} className="accordion-button youth-revive__banner-text-title youth-revive__banner-text-reverse-caption fw-bold px-0 pb-0 pt-0 mb-g mb-lg-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					Step 1: Seed Oil Cleanser
					</button>
				</div>
				<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionReviveBannerReverse">
					<div className="accordion-body youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
					Apply a small amount of our Seed Oil Cleanser onto your face with your hands before massaging into the skin in a circular motion. When your makeup and other impurities have dissolved in the formula, rinse off with lukewarm water.
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingTwo">
					<button onClick={() => props.setPanelActive(2)} className="accordion-button youth-revive__banner-text-title youth-revive__banner-text-reverse-caption fw-bold px-0 pb-0 pt-0 mb-g mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					Step 2: Fruit Enzyme Cleanser
					</button>
				</div>
				<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionReviveBannerReverse">
					<div className="accordion-body youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
					After using our Seed Oil Cleanser, squeeze a small amount of Fruit Enzyme Cleanser onto your palms and gently massage into damp skin, then rinse thoroughly.
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingThree">
					<button onClick={() => props.setPanelActive(3)} className="accordion-button youth-revive__banner-text-title youth-revive__banner-text-reverse-caption fw-bold px-0 pb-0 pt-0 mb-g mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					Step 3: Antioxidant Hydrating<br className="d-none d-lg-block" />Milky Toner
					</button>
				</div>
				<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionReviveBannerReverse">
					<div className="accordion-body youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
					When your skin has dried, pour a few drops of Antioxidant Hydrating Milky Toner into the palms of your hands and pat in until fully absorbed.
					</div>
				</div>
			</div>
		</div>
	);
};

const ReviveBannerReverse = () => {
	const [panelActive, setPanelActive] = useState(1);
	return (
		<section className="youth-revive__section youth-revive__banner-text-reverse-wrapper">
			<div className="row youth-revive__banner-text skincare__banner-text-reverse align-items-lg-center">
				<div className="col-12 col-lg-6 px-2 px-lg-g pe-lg-0 youth-revive__banner-text-content youth-revive__banner-text-reverse-content">
					<div className="youth-revive__banner-text-wrapper youth-revive__banner-text-reverse-wrapper py-3 py-lg-0 pe-lg-g">
						<p className="youth-revive__banner-text-reverse-title youth-revive__banner-text-reverse-title-gap fw-bold d-none d-lg-block mb-lg-0">Meet your new<br className="d-none d-lg-block" />'glow-to' daily<br className="d-none d-lg-block" />routine</p>
						<AccordionPanel setPanelActive={setPanelActive} />
						{/* <p className="youth-revive__banner-text-reverse-title fw-bold d-none d-lg-block mb-lg-4 youth-revive__banner-text-reverse-title-gap">Meet your new favourite hair routine</p>
						<p className="youth-revive__banner-text-title youth-revive__banner-text-reverse-sub mb-1 fw-bold mb-lg-2">Step 1: Pro Youth Shampoo</p>
						<p className="youth-revive__banner-text-desc mb-3 mb-lg-2">Dispense a small amount to damp hair and scalp. Massage from root to tip to release the lather and rinse thoroughly.</p>
						<p className="youth-revive__banner-text-caption youth-revive__banner-text-reverse-caption fw-bold mb-lg-2">Step 2: Pro Youth Conditioner</p>
						<p className="youth-revive__banner-text-caption youth-revive__banner-text-reverse-caption fw-bold mb-2 mb-lg-0">Step 3: Pro Youth Hair & Scalp Mask</p> */}
					</div>
				</div>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 1 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2bc8ae5a-e5e5-4020-cadd-36ca49252900/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9f12878a-3c20-452a-1c14-61ac8d69d500/828x" loading="lazy" />
				</figure>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 2 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a327ab3b-080b-4186-ae61-7b8a01317800/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1bb3a576-f846-4cf1-b47e-eb5781770300/828x" />
				</figure>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 3 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/99f8cf32-183d-4d5a-5f5c-9636a7046900/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c8d87cf4-8cf3-4d41-3d9f-04c772d26c00/828x" />
				</figure>
			</div>
		</section>
	);
}

export default ReviveBannerReverse;
