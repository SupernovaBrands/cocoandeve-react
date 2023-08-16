import { useState } from 'react';
import { ReactComponent as IconReact } from '../../assets/react-icon.svg';
import { ReactComponent as IconHandLG } from '../../assets/hand-icon.svg';
import { ReactComponent as IconHeartLG } from '../../assets/heart-icon.svg';
import { ReactComponent as IconHand } from '../../assets/hand-icon-sm.svg';
import { ReactComponent as IconHeart } from '../../assets/heart-icon-sm.svg';

const AccordionPanel = (props) => {
	return (
		<div className="accordion accordion-flush youth-revive__accordion-panel" id="accordionReviveBanner">
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingBenefit1">
					<button onClick={() => props.setPanelActive(1)} className="accordion-button youth-revive__banner-text-title youth-revive__banner-text-title-gap fw-bold px-0 pb-0 pt-1 mb-1 mb-lg-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBenefitOne" aria-expanded="true" aria-controls="collapseBenefitOne">
					The world’s first anti-aging haircare range with a superstar set of ingredients.
					</button>
				</div>
				<div id="collapseBenefitOne" className="accordion-collapse collapse show" aria-labelledby="headingBenefit1" data-bs-parent="#accordionReviveBanner">
					<div className="accordion-body youth-revive__banner-text-desc mb-g mb-lg-2 p-0">
					Hair is up to 93% shinier, with up to 105% more volume and up to 3x scalp hydration.
					<br />
					<br />
					<em className="font-size-sm">*Based on a 29-day clinical trial with 20 women using the full hair routine</em>
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingBenefit2">
					<button onClick={() => props.setPanelActive(2)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-1 mb-1 mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBenefitTwo" aria-expanded="false" aria-controls="collapseBenefitTwo">
					Kind to hair and skin
					</button>
				</div>
				<div id="collapseBenefitTwo" className="accordion-collapse collapse" aria-labelledby="headingBenefit2" data-bs-parent="#accordionReviveBanner">
					<div className="accordion-body youth-revive__banner-text-desc mb-g mb-lg-2 p-0">
					Dermatologically-tested, PH neutral and free from silicones and drying sulfates that irritate your scalp and damagechemically treated hair.
					</div>
				</div>
			</div>
			<div className="accordion-item border-0">
				<div className="accordion-header" id="headingBenefit3">
					<button onClick={() => props.setPanelActive(3)} className="accordion-button youth-revive__banner-text-title fw-bold px-0 pb-0 pt-1 mb-1 mb-lg-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBenefitThree" aria-expanded="false" aria-controls="collapseBenefitThree">
					Responsibly-sourced honey
					</button>
				</div>
				<div id="collapseBenefitThree" className="accordion-collapse collapse" aria-labelledby="headingBenefit3" data-bs-parent="#accordionReviveBanner">
					<div className="accordion-body youth-revive__banner-text-desc mb-g mb-lg-2 p-0">
					Crodarom Manuka Honey, Propolis Extract and RoyalJelly Extract are sourced ethically and responsibly where the welfare of the bees and their hives were taken care of.
					</div>
				</div>
			</div>
		</div>
	);
};

const BannerText = () => {
	const [panelActive, setPanelActive] = useState(1);
	return (
		<section className="row youth-revive__banner-text youth-revive__section pt-4 pt-lg-0">
			<div className="col-12 col-lg-6 order-lg-2 px-2 px-lg-g ps-lg-0 youth-revive__banner-text-content">
				<div className="youth-revive__banner-text-wrapper mb-2 mb-lg-0 pt-1">
					{panelActive === 1 && (
						<>
							<IconReact className="mb-4 svg__scale ms-lg-2" />
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
				<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/60b465b5-1788-4d63-b8cb-dfbff988c800/726x" />
				<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18ada7c7-19ab-45fa-a6a2-5a3df87bac00/828x" />
				<figcaption className="px-g col-lg-9 mx-lg-auto">Promotes healthier, stronger, and shinier hair from the first use</figcaption>
			</figure>
			<figure className={`col-12 col-lg-6 order-lg-1 position-relative text-white mb-0 pe-lg-0 pt-g pt-lg-0 panel__2 ${panelActive === 2 ? '' : 'd-none'}`}>
				<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0849ac9f-9bd4-4d51-8efc-e82844c9db00/726x" />
				<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5cafb552-210d-428d-5872-4c225c4f0700/828x" />
				<figcaption className="px-g col-lg-9 mx-lg-auto">
				Dermatologically-tested, and free from silicones and drying sulfates
				</figcaption>
			</figure>
			<figure className={`col-12 col-lg-6 order-lg-1 position-relative text-white mb-0 pe-lg-0 pt-g pt-lg-0 panel__3 ${panelActive === 3 ? '' : 'd-none'}`}>
				<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2269bce0-349e-4eb5-67b2-ea58f7aed700/726x" />
				<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7dd4b164-70fd-4f25-2fab-effff604b000/828x" />
				<figcaption className="px-g col-lg-9 mx-lg-auto">
					Sourced ethically and responsibly where the welfare of the bees and their hives were taken care of
				</figcaption>
			</figure>
		</section>
	);
};

export default BannerText;
