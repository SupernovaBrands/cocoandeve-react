
const RangeBanner = () => {
	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Sunny Honey</h1>
				<p className='mb-1'>The only self-tanner you ever need. </p>
			</div>

			<picture className="d-block w-100">
				<source srcSet={`${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-dt.webp`} media="(min-width: 768px)" type="image/webp" />
				<source srcSet={`${process.env.PUBLIC_URL}/images/range-hero-banner-dt.jpg`} media="(min-width: 768px)" />
				<source srcSet={`${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-mb.webp`} type="image/webp" />
				<img
					src={`${process.env.PUBLIC_URL}/images/range-hero-banner-mb.jpg`}
					srcSet={`${process.env.PUBLIC_URL}/images/range-hero-banner-mb.webp`}
					alt="Range banner"
					className="w-100 embed-responsive-item fit--cover" />
			</picture>
        </section>
	);
};

export default RangeBanner;
