
const RangeBanner = () => {
	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Sunny Honey</h1>
				<p className='mb-1'>The only self-tanner you'll ever need. </p>
			</div>

			<picture className="d-block w-100">
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a70e547d-bb76-4355-77e3-cec277e7f600/1400x" media="(min-width: 768px)" type="image/webp" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a21941-ac75-468a-b10e-7b4e31b19e00/1400x" media="(min-width: 768px)" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x" type="image/webp" />
				<img
					src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/afa85196-4f02-42da-091e-393e63d1c900/828x"
					srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x"
					alt="Range banner"
					className="w-100 embed-responsive-item fit--cover" />
			</picture>
        </section>
	);
};

export default RangeBanner;
