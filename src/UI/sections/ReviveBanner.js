import { ReactComponent as IconReact } from '../../assets/react-icon.svg';

const BannerText = () => {
	return (
		<section className="row youth-revive__banner-text youth-revive__section">
			<div className="col-12 col-lg-6 order-lg-2 px-2 px-lg-g ps-lg-0 youth-revive__banner-text-content">
				<div className="youth-revive__banner-text-wrapper mb-4 mb-lg-0">
					<IconReact className="mb-4 d-block ms-lg-2" />
					<p className="youth-revive__banner-text-title fw-bold pt-1 mb-g youth-revive__banner-text-title-gap mb-lg-2">Honey + Retinol + Prebiotics and Probiotics</p>
					<p className="youth-revive__banner-text-desc mb-g mb-lg-2">The world's first range with a superstar set of ingredients. Youth Revive's innovative formula addresses the signs of aging and promote healthier, stronger, and shinier hair from the first use.</p>
					<p className="youth-revive__banner-text-caption mb-g mb-lg-2 fw-bold">Kind to hair and skin</p>
					<p className="youth-revive__banner-text-caption mb-0 fw-bold">Responsibly-sourced honey</p>
				</div>
			</div>
			<figure className="col-12 col-lg-6 order-lg-1 position-relative text-white mb-0 pe-lg-0 pt-1 pt-lg-0">
				<source type="image/jpeg" media="(min-width: 992px)" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/60b465b5-1788-4d63-b8cb-dfbff988c800/726x" />
				<img className="w-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/60b465b5-1788-4d63-b8cb-dfbff988c800/828x" />
				<figcaption className="px-g col-lg-9 mx-lg-auto">Promotes healthier, stronger, and shinier hair from the first use</figcaption>
			</figure>
		</section>
	);
};

export default BannerText;
