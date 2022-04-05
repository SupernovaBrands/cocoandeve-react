
const RangeBanner = () => {
	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Sunny Honey</h1>
				<p className='mb-1'>The only safe-tanner you’ll ever need. </p>
			</div>
			<picture className="d-block w-100">
				{/* load webp in different sizes if browser supports it */}
				<source
					type="image/webp"
					srcSet={`${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-mb.webp 828w, ${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-dt.webp 992w`}/>
				{/* load jpg in different sizes if browser doesn't support webp */}
				<source
					type="image/jpeg"
					srcSet={`${process.env.PUBLIC_URL}/images/range-hero-banner-mb.jpg 828w, ${process.env.PUBLIC_URL}/images/range-hero-banner-dt.jpg 992w`} />

				<img
					srcSet={`
						${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-mb.jpg 828w,
						${process.env.PUBLIC_URL}/compressed_images/range-hero-banner-dt.jpg 992w`}
					sizes="(max-width: 991px) 828px, 992px"

					src={`${process.env.PUBLIC_URL}/images/range-hero-banner-mb.jpg`}
					alt="Placeholder"
					className="w-100 embed-responsive-item fit--cover" />
			</picture>
        </section>
	);
};

export default RangeBanner;
