
const BannerImage = (props) => {

	return (
		<section className='range__banner'>
			<picture className="d-block w-100">
				<source srcSet={props.bannerData.desktop.webpBanner} media="(min-width: 768px)" type="image/webp" />
				<source srcSet={props.bannerData.desktop.jpegBanner} media="(min-width: 768px)" type="image/jpeg" />
				<source srcSet={props.bannerData.mobile.webpBanner} type="image/webp" />
				<source srcSet={props.bannerData.mobile.jpegBanner} type="image/jpeg" />
				<img
					src={props.bannerData.mobile.webpBanner}
					alt="Range banner"
					className="w-100 fit--cover" />
			</picture>
        </section>
	);
};

export default BannerImage;
