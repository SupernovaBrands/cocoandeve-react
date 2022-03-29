
const RangeBanner = () => {
	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Sunny Honey</h1>
				<p className='mb-1'>The only safe-tanner you’ll ever need. </p>
			</div>
			<picture class="d-block w-100">
				<source srcset="images/range-hero-banner-dt.jpg" media="(min-width: 992px)" />
				<img src="images/range-hero-banner-mb.jpg" alt="Placeholder" class="w-100" />
			</picture>
        </section>
	);
};

export default RangeBanner;
