import { ReactComponent as FormulaList1 } from '../../assets/formula-list-1.svg';
import { ReactComponent as FormulaList2 } from '../../assets/formula-list-2.svg';
import { ReactComponent as FormulaList3 } from '../../assets/formula-list-3.svg';
import { ReactComponent as FormulaList4 } from '../../assets/formula-list-4.svg';

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
								<FormulaList1 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Blurs pigmentation and perfects skin.
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList2 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Tropical mango and guava scent<br />(no biscuit smell!)
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList3 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Lightweight, non-sticky formula.
							</li>
							<li className='col-12 d-flex align-items-center'>
								<FormulaList4 className='me-g d-flex flex-shrink-0 justify-content-center' />
								Developed with a green-grey base for a natural looking, golden glow with no orangey tones.
							</li>
						</ul>
					</div>
					<picture className='col-12 col-lg-7 order-lg-1'>
						<source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/revolutionary-formula-dt.webp`} />
						<source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/revolutionary-formula-dt.jpg`} />
						<img class='w-100 d-none d-lg-block pe-4' alt='Revolutionary Formula' src={`${process.env.PUBLIC_URL}/images/revolutionary-formula-dt.jpg`} />
					</picture>
				</div>
			</div>
			<div className='range__formula-tagline bg-yellow-light-secondary text-center d-lg-none font-size-sm fw-bold py-g mt-2'>
				No sulfates · No silicone · No parabenes · Vegan
			</div>
        </section>
	);
};

export default RangeFormula;
