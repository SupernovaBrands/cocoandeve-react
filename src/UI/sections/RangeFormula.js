import { useContext } from "react";

import RangeContext from "../../store/range-context";
import { ReactComponent as FormulaList11 } from '../../assets/skin-protection.svg';
import { ReactComponent as FormulaList21 } from '../../assets/guava.svg';
import { ReactComponent as FormulaList31 } from '../../assets/diet.svg';
import { ReactComponent as FormulaList41 } from '../../assets/clean.svg';

import { ReactComponent as FormulaList12 } from '../../assets/hair_icon_drop.svg';
import { ReactComponent as FormulaList22 } from '../../assets/hair_icon_shield.svg';
import { ReactComponent as FormulaList32 } from '../../assets/hair_icon_nourish.svg';
import { ReactComponent as FormulaList42 } from '../../assets/hair_icon_signature.svg';

const RangeFormula = (props) => {
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const rangeCtx = useContext(RangeContext);
	let formulaData = rangeCtx.formulaSection[props.range][activeStore];
	if (!formulaData) {
		formulaData = rangeCtx.formulaSection[props.range]['us'];
	}

	const formulaDataImages = rangeCtx.formulaSection[props.range];

	return (
		<section className='range__formula mt-2 mt-lg-4'>
			<div className='container px-g'>
            	<div className='row align-items-center'>
					<div className='col-12 col-lg-5 order-lg-2'>
						<h2 className='range__formula-title text-center text-lg-start'>{formulaData.title}</h2>
						<p className='h4 text-center text-lg-start mb-0 fw-normal'>{formulaData.subtitle}</p>
						{props.range === 'tan' ? (
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
						) : (
							<ul className='list-unstyled row mt-2 mb-0 range__formula-list'>
								<li className='col-12 d-flex align-items-center mb-2'>
									<FormulaList12 className='me-g d-flex flex-shrink-0 justify-content-center' />
									{formulaData.list1}
								</li>
								<li className='col-12 d-flex align-items-center mb-2'>
									<FormulaList22 className='me-g d-flex flex-shrink-0 justify-content-center' />
									{formulaData.list2}
								</li>
								<li className='col-12 d-flex align-items-center mb-2'>
									<FormulaList32 className='me-g d-flex flex-shrink-0 justify-content-center' />
									{formulaData.list3}
								</li>
								<li className='col-12 d-flex align-items-center'>
									<FormulaList42 className='me-g d-flex flex-shrink-0 justify-content-center' />
									{formulaData.list4}
								</li>
							</ul>
						)}
					</div>
					<picture className='col-12 col-lg-7 order-lg-1'>
						<source type="image/webp" srcSet={`${formulaDataImages.webp}/1140x`} />
						<source type="image/jpeg" srcSet={`${formulaDataImages.jpg}/1140x`} />
						<img className='w-100 d-none d-lg-block pe-4' alt='Revolutionary Formula' src={`${formulaDataImages.jpg}/828x`} loading="lazy" />
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
