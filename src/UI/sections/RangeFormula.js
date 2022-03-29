
const RangeFormula = () => {
	return (
		<section className='range__formula'>
			<div className='container px-g'>
            	<div className='row align-items-center'>
					<div className='col-12 col-lg-5 order-lg-2'>
						<h2 className='range__formula-title text-center text-lg-start'>Revolutionary formula</h2>
						<p className='h4 text-center text-lg-start mb-0'>NO nasties, NO orange tones.</p>
						<ul className='list-unstyled row mt-2 mb-0'>
							<li className='col-12 d-flex align-items-center mb-2'>
								<img className='me-g' src='images/formula-list-1.svg' alt='Formula' />
								Blurs pigmentation and perfects skin.
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<img className='me-g' src='images/formula-list-2.svg' alt='Formula' />
								Tropical mango and guava scent<br />(no biscuit smell!)
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<img className='me-g' src='images/formula-list-3.svg' alt='Formula' />
								Lightweight, non-sticky formula.
							</li>
							<li className='col-12 d-flex align-items-center'>
								<img className='me-g' src='images/formula-list-4.svg' alt='Formula' />
								Developed with a green-grey base for a natural looking, golden glow with no orangey tones.
							</li>
						</ul>
					</div>
					<div className='col-12 col-lg-7 order-lg-1'>
						<img class='w-100 d-none d-lg-block pe-4' alt='Revolutionary Formula' src='images/revolutionary-formula-dt.jpg' />
					</div>
				</div>
			</div>
			<div className='range__formula-tagline bg-yellow-light text-center d-lg-none font-size-sm fw-bold py-g mt-2'>
				No sulfates · No silicone · No parabenes · Vegan
			</div>
        </section>
	);
};

export default RangeFormula;
