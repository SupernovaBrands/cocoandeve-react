import { ReactComponent as FormulaList11 } from '../../assets/skin-protection.svg';
import { ReactComponent as FormulaList21 } from '../../assets/guava.svg';
import { ReactComponent as FormulaList31 } from '../../assets/diet.svg';
import { ReactComponent as FormulaList41 } from '../../assets/clean.svg';

const RangeFormula = () => {
	return (
		<section className='range__formula mt-2 mt-lg-4'>
			<div className='container px-g'>
            	<div className='row align-items-center'>
					<div className='col-12 col-lg-5 order-lg-2'>
						<h2 className='range__formula-title text-center text-lg-start'>Revolutionary formula</h2>
						<p className='h4 text-center text-lg-start mb-0 fw-normal'>NO nasties, NO orange tones.</p>
						<ul className='list-unstyled row mt-2 mb-0 range__formula-list'>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList11 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Blurs pigmentation and perfects skin.
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList21 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Tropical mango and guava scent<br />(no biscuit smell!)
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList31 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Lightweight, non-sticky formula.
							</li>
							<li className='col-12 d-flex align-items-center'>
								<FormulaList41 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Developed with a green-grey base for a natural looking, golden glow with no orangey tones.
							</li>
						</ul>
					</div>
					<picture className='col-12 col-lg-7 order-lg-1'>
						<source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e5ee4be5-5f6e-4fe1-9248-fa04acb29b00/1140x" />
						<source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a8440365-7bda-4690-1602-277357af8a00/1140x" />
						<img className='w-100 d-none d-lg-block pe-4' alt='Revolutionary Formula' src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a8440365-7bda-4690-1602-277357af8a00/828x" loading="lazy" />
					</picture>
				</div>
			</div>
			<div className='range__formula-tagline bg-yellow-light-secondary text-center d-lg-none font-size-sm fw-bold py-g mt-2'>
				No sulfates · No silicone · No parabens · Vegan
			</div>
        </section>
	);
};

export default RangeFormula;
