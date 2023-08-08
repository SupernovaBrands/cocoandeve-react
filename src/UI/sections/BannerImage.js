import ConditionWrapper from "../../modules/ConditionWrapper";

const BannerImage = (props) => {
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';
	const banner = props.bannerData[activeStore];
	return (
		<section className={`range__banner ${props.className ? props.className : ''}`}>
			<ConditionWrapper
				condition={props.isClickable}
				wrapper={(children) => <a href={props.externalUrl}>{children}</a>}
			>
				<picture className="d-block w-100">
					<source srcSet={props.bannerData.desktop[activeStore].webpBanner} media="(min-width: 768px)" type="image/webp" />
					<source srcSet={props.bannerData.desktop[activeStore].jpegBanner} media="(min-width: 768px)" type="image/jpeg" />
					<source srcSet={props.bannerData.mobile[activeStore].webpBanner} type="image/webp" />
					<source srcSet={props.bannerData.mobile[activeStore].jpegBanner} type="image/jpeg" />
					<img
						src={props.bannerData.mobile.webpBanner}
						alt="Range banner"
						className="w-100 fit--cover" />
				</picture>
			</ConditionWrapper>
        </section>
	);
};

export default BannerImage;
