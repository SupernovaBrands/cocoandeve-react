
const RangeBanner = () => {
	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Sunny Honey</h1>
				<p className='mb-1'>The only safe-tanner you’ll ever need. </p>
			</div>
			<picture className="d-block w-100">
				<source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-dt.webp`} media="(min-width: 992px)" />
				<source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/range-hero-banner-dt.jpg`} media="(min-width: 992px)" />
				<img src={`${process.env.PUBLIC_URL}/images/range-hero-banner-mb.jpg`} alt="Placeholder" className="w-100" />
			</picture>
        </section>
	);
};

export default RangeBanner;
