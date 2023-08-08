import { useState } from "react";

const AccordionPanel = (props) => {
	return (
		<div className="accordion accordion-flush youth-revive__accordion-panel" id="accordionReviveBannerReverse">
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingOne">
					<button onClick={() => props.setPanelActive(1)} className="accordion-button youth-revive__banner-text-title youth-revive__banner-text-title-gap fw-bold px-0 pb-0 pt-0 mb-g mb-lg-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					Step 1: Pro Youth Shampoo
					</button>
				</div>
				<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionReviveBannerReverse">
					<div className="accordion-body youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
					Dispense a small amount to damp hair and scalp. Massage from root to tip to release the lather and rinse thoroughly.
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingTwo">
					<button onClick={() => props.setPanelActive(2)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-0 mb-g mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					Step 2: Pro Youth Conditioner
					</button>
				</div>
				<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionReviveBannerReverse">
					<div className="accordion-body youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
					After cleansing, run our conditioner through the mid-lengths and ends of your hair. Leave on for up to 2 minutes, and rinse.
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingThree">
					<button onClick={() => props.setPanelActive(3)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-0 mb-g mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					Step 3: Pro Youth Hair & Scalp Mask
					</button>
				</div>
				<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionReviveBannerReverse">
					<div className="accordion-body youth-revive__banner-text-desc mb-3 mb-lg-2 p-0">
					Evenly distribute a generous amount of product from scalp to ends of hair. Leave on for 5-10 minutes, then rinse completely with warm water.
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
			<div className="row youth-revive__banner-text youth-revive__banner-text-reverse align-items-lg-center">
				<div className="col-12 col-lg-6 px-2 px-lg-g pe-lg-0 youth-revive__banner-text-content">
					<div className="youth-revive__banner-text-wrapper py-3 py-lg-0">
						<AccordionPanel setPanelActive={setPanelActive} />
						{/* <p className="youth-revive__banner-text-reverse-title fw-bold d-none d-lg-block mb-lg-4 youth-revive__banner-text-reverse-title-gap">Meet your new favourite hair routine</p>
						<p className="youth-revive__banner-text-title youth-revive__banner-text-reverse-sub mb-1 fw-bold mb-lg-2">Step 1: Pro Youth Shampoo</p>
						<p className="youth-revive__banner-text-desc mb-3 mb-lg-2">Dispense a small amount to damp hair and scalp. Massage from root to tip to release the lather and rinse thoroughly.</p>
						<p className="youth-revive__banner-text-caption youth-revive__banner-text-reverse-caption fw-bold mb-lg-2">Step 2: Pro Youth Conditioner</p>
						<p className="youth-revive__banner-text-caption youth-revive__banner-text-reverse-caption fw-bold mb-2 mb-lg-0">Step 3: Pro Youth Hair & Scalp Mask</p> */}
					</div>
				</div>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 1 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/590b0c6c-85b4-4f2a-308f-9365942bfe00/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0b4ef084-d9dc-4ac9-860c-b7789db89500/828x" loading="lazy" />
				</figure>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 2 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2b542020-65c4-45af-301b-1c2741b99500/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/555938c1-fa2b-4784-82c2-f72129acd800/828x" />
				</figure>
				<figure className={`col-12 col-lg-6 position-relative text-white mb-0 ps-lg-0 pt-25 pt-lg-0 ${panelActive === 3 ? '' : 'd-none'}`}>
					<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c13bf618-7988-4e31-61cb-178d0bf97d00/726x" />
					<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/08ce655f-a8ab-4469-c8cf-eadcb47b8700/828x" />
				</figure>
			</div>
		</section>
	);
}

export default ReviveBannerReverse;
