import { useState } from 'react';
import { ReactComponent as IconSkin } from '../../assets/skincare-icon.svg';
import { ReactComponent as IconHandLG } from '../../assets/hand-icon.svg';
import { ReactComponent as IconHeartLG } from '../../assets/heart-icon.svg';
import { ReactComponent as IconHand } from '../../assets/hand-icon-sm.svg';
import { ReactComponent as IconHeart } from '../../assets/heart-icon-sm.svg';

const AccordionPanel = (props) => {
	return (
		<div className="accordion accordion-flush youth-revive__accordion-panel" id="accordionReviveBanner">
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingBenefit1">
					<button onClick={() => props.setPanelActive(1)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-1 mb-1 mb-lg-2 skincare__banner-text-title-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBenefitOne" aria-expanded="true" aria-controls="collapseBenefitOne">
					Introducing our NEW mega-watt skincare collection
					</button>
				</div>
				<div id="collapseBenefitOne" className="accordion-collapse collapse show" aria-labelledby="headingBenefit1" data-bs-parent="#accordionReviveBanner">
					<div className="accordion-body youth-revive__banner-text-desc mb-g mb-lg-2 p-0">
					Balinese ingredients, meet the latest buzz-worthy skincare ingredients. Our brand-new radiance-inducing products are enriched with antioxidants and free radical protection to give you the glowing skin you've been dreaming of.
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingBenefit2">
					<button onClick={() => props.setPanelActive(2)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-1 mb-1 mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBenefitTwo" aria-expanded="false" aria-controls="collapseBenefitTwo">
					A (glow)stopping cleansing experience
					</button>
				</div>
				<div id="collapseBenefitTwo" className="accordion-collapse collapse" aria-labelledby="headingBenefit2" data-bs-parent="#accordionReviveBanner">
					<div className="accordion-body youth-revive__banner-text-desc mb-g mb-lg-2 p-0">
					Your skin holds on tight to makeup, SPF and (dare we say it) bacteria, which can lead to breakouts, pigmentation - even premature ageing! Our double-cleansing power couple helps you purify like never before. 90% agreed that their skin felt more moisturised after double cleansing*
                    </div>
					<em className="font-size-sm">*Based on a consumer assessment of the Seed Oil Cleanser and Fruit Enzyme Cleanser conducted by 30 women over a week</em>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingBenefit3">
					<button onClick={() => props.setPanelActive(3)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-1 mb-1 mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBenefitThree" aria-expanded="false" aria-controls="collapseBenefitThree">
					Created with you in mind
					</button>
				</div>
				<div id="collapseBenefitThree" className="accordion-collapse collapse" aria-labelledby="headingBenefit3" data-bs-parent="#accordionReviveBanner">
					<div className="accordion-body youth-revive__banner-text-desc mb-g mb-lg-2 p-0">
					Our vegan, cruelty-free collection is focused on eco-certified ingredients.** It's free from artificial colourants, silicone and contains only non-allergenic fragrances. You're welcome.
					</div>
                    <em className="font-size-sm">**for IBR-Dragon®, Hyaluronic Acid, Polysaccharide, Papaya Extract and our Prebiotic Complex.</em>
				</div>
			</div>
		</div>
	);
};

const BannerText = () => {
	const [panelActive, setPanelActive] = useState(1);
	return (
		<section className="row youth-revive__banner-text youth-revive__section pt-4 pt-lg-0 pb-4">
			<div className="col-12 col-lg-6 order-lg-2 px-2 px-lg-g ps-lg-0 youth-revive__banner-text-content">
				<div className="youth-revive__banner-text-wrapper mb-2 mb-lg-0 pt-1">
					{panelActive === 1 && (
						<>
							<IconSkin className="mb-4 svg__scale ms-lg-2" />
						</>
					)}
					{panelActive === 2 && (
						<>
							<IconHand className="mb-4 d-lg-none" />
							<IconHandLG className="mb-4 d-none d-lg-block" />
						</>
					)}
					{panelActive === 3 && (
						<>
							<IconHeart className="ms-n2 mb-0 d-lg-none" />
							<IconHeartLG className="mb-4 d-none d-lg-block" />
						</>
					)}
					<AccordionPanel setPanelActive={setPanelActive} />
				</div>
			</div>
			<figure className={`col-12 col-lg-6 order-lg-1 position-relative text-white mb-0 pe-lg-0 pt-g pt-lg-0 panel__1 ${panelActive === 1 ? '' : 'd-none'}`}>
				<picture className="d-block w-100">
					<source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e6ab66bb-7211-4496-e6da-46281b97c100/828x' media="(min-width: 768px)" type="image/jpeg" />
					<source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f4fc8aa0-f8ef-4fbe-b4eb-80db94a29500/828x' type="image/jpeg" />
					<img
						src='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f4fc8aa0-f8ef-4fbe-b4eb-80db94a29500/828x'
						className="w-100" />
				</picture>
				<figcaption className="p-0 col-lg-12 mx-lg-auto text-lg-center">Experience an unreal glow with our new collection</figcaption>
			</figure>
			<figure className={`col-12 col-lg-6 order-lg-1 position-relative text-white mb-0 pe-lg-0 pt-g pt-lg-0 panel__2 ${panelActive === 2 ? '' : 'd-none'}`}>
				<picture className="d-block w-100">
					<source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7e5ed9a9-2a2f-4f27-4347-b3b454505000/828x' media="(min-width: 768px)" type="image/jpeg" />
					<source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5085b09d-a1ed-4ebb-9d21-917480e68800/828x' type="image/jpeg" />
					<img
						src='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5085b09d-a1ed-4ebb-9d21-917480e68800/828x'
						className="w-100" />
				</picture>
				<figcaption className="p-0 col-lg-12 mx-lg-auto text-lg-center">
				Dermatologically tested, and free from silicones
				</figcaption>
			</figure>
			<figure className={`col-12 col-lg-6 order-lg-1 position-relative text-white mb-0 pe-lg-0 pt-g pt-lg-0 panel__3 ${panelActive === 3 ? '' : 'd-none'}`}>
				<picture className="d-block w-100">
					<source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0b1dbf24-d668-462a-ec99-e959ef880700/828x' media="(min-width: 768px)" type="image/jpeg" />
					<source srcSet='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f676c334-9560-45f3-0f0f-ab65dee4e700/828x' type="image/jpeg" />
					<img
						src='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0b1dbf24-d668-462a-ec99-e959ef880700/828x'
						className="w-100" />
				</picture>
				<figcaption className="p-0 col-lg-12 mx-lg-auto text-lg-center">
                Sourced ethically and responsibly
				</figcaption>
			</figure>
		</section>
	);
};

export default BannerText;
