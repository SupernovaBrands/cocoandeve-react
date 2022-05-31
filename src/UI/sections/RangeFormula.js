import { useContext } from "react";

import RangeContext from "../../store/range-context";
import { ReactComponent as FormulaList11 } from '../../assets/skin-protection.svg';
import { ReactComponent as FormulaList21 } from '../../assets/guava.svg';
import { ReactComponent as FormulaList31 } from '../../assets/diet.svg';
import { ReactComponent as FormulaList41 } from '../../assets/clean.svg';

const RangeFormula = () => {
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const rangeCtx = useContext(RangeContext);
	let formulaData = rangeCtx.formulaSection[activeStore];
	if (!formulaData) {
		formulaData = rangeCtx.formulaSection['us'];
	}

	return (
		<section className='range__formula mt-2 mt-lg-4'>
			<div className='container px-g'>
            	<div className='row align-items-center'>
					<div className='col-12 col-lg-5 order-lg-2'>
						<h2 className='range__formula-title text-center text-lg-start'>{formulaData.title}</h2>
						<p className='h4 text-center text-lg-start mb-0 fw-normal'>{formulaData.subtitle}</p>
						<ul className='list-unstyled row mt-2 mb-0 range__formula-list'>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList11 className='me-g d-flex flex-shrink-0 justify-content-center' />
								{formulaData.list1}
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList21 className='me-g d-flex flex-shrink-0 justify-content-center' />
								{formulaData.list2}
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<FormulaList31 className='me-g d-flex flex-shrink-0 justify-content-center' />
								{formulaData.list3}
							</li>
							<li className='col-12 d-flex align-items-center'>
								<FormulaList41 className='me-g d-flex flex-shrink-0 justify-content-center' />
								{formulaData.list4}
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
				{formulaData.footer}
			</div>
        </section>
	);
};

export default RangeFormula;
