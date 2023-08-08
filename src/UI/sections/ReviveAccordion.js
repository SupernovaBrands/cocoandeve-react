import React, { useContext } from 'react';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
// import FaqContext from '../../store/faq-context';

import {Collapse} from 'bootstrap';

const FaqAccordion = (props) => {
    const FAQ = {
		heading: 'Your questions – answered',
		items: [
			{
				title: 'Can the conditioner help control frizz and improve hair texture?',
				text: 'While our range does not specifically have an anti-frizz effect, it offers numerous benefits for your hair. It works wonders in improving hair texture, leaving it softer, smoother, shinier, and stronger. ',
			},
			{
				title: 'Can the conditioner be used on the scalp? Won\'t it create buildup?',
				text: 'Certainly! Our conditioner is safe for use on the scalp. Whether you decide to apply it directly to your scalp or focus on the mid-length to ends of your hair is entirely up to you. It\'s all about personal preference and tailoring the product to your specific needs. Feel free to experiment and find the application method that works best for you.',
			},
			{
				title: 'Is this safe to use for all hair types?',
				text: "Our Youth Revive Pro Youth Conditioner is suitable for all hair types! From oily to dry, curly to straight. If you need the key to stronger, shinier, and voluminous hair. Look no further!",
			},
			{
				title: 'Would it work on bleach damaged hair?',
				text: 'Certainly! The honey will provide deep nourishment to your hair, while the prebiotics work to restore a healthy scalp. Additionally, the microbiota and retinol present in the product offer remarkable anti-aging benefits.',
			},
			{
				title: 'Is this safe to use together with keratin treatment?',
				text: 'We understand the importance of maintaining the pristine condition of your hair after a keratin treatment. Rest assured that our products have been designed with utmost care, and using them will not have any negative impact on your beautiful hair.<br /><br />You can confidently continue to enjoy the benefits of our products without worrying about compromising the quality of your hair.',
			},
			{
				title: 'Is this safe for daily use?',
				text: 'Absolutely! This haircare range is perfect for daily use.',
			},
			{
				title: 'Can this be used by children?',
				text: 'While retinol remains a highly sought-after skincare product renowned for its multiple benefits, it is crucial to consider its suitability for children. In light of this, we encourage embracing alternative options like our Like a Virgin Range that has gentler formulation for younger ones',
			},
			{
				title: 'Does it contain silicone/sulfate/paraben/phthalate?',
				text: 'Our product is meticulously formulated, free from silicone, sulfate, paraben, and phthalate. With our product, you can enjoy peace of mind, knowing that it is designed with your well-being in mind, and without any harmful additives.',
			},
			{
				title: 'What are the ingredients found in the Pro Youth Conditioner?',
				text: 'Here are the Pro Youth Conditioner Ingredients:<br/><br />Aqua/Water/Eau, Cetearyl Alcohol, Glycerin, Cetrimonium Chloride, Octyldodecanol, Mel Extract / Honey Extract / Extrait de miel, Retinol, Royal Jelly Extract, Propolis Extract, Leptospermum Scoparium Branch/Leaf Oil, Magnolia Officinalis Bark Extract, Piper Nigrum (Pepper) Seed Extract / Piper Nigrum Seed Extract, Citrus Grandis (Grapefruit) Seed Extract / Citrus Grandis Seed Extract, Hydroxypropyltrimonium Honey, Cocos Nucifera (Coconut) Oil / Cocos Nucifera Oil, Persea Gratissima (Avocado) Oil / Persea Gratissima Oil, Sodium Ascorbate, Tocopherol, Behentrimonium Chloride, Dipalmitoylethyl Hydroxyethylmonium Methosulfate, Ethylhexyl Palmitate, Glyceryl Stearate, Propylene Glycol, Quaternium-80, Caprylic/Capric Triglyceride, Guar Hydroxypropyltrimonium Chloride, Tetrasodium Glutamate Diacetate, Fragrance / Parfum, Sodium Hydroxide, Sorbic Acid, Benzyl Alcohol, Benzoic Acid, Linalool.',
			},
			{
				title: 'What are the ingredients found in the Pro Youth Hair & Scalp Mask?',
				text: 'Here are the Pro Youth Hair & Scalp Mask Ingredients:<br /><br />Aqua/Water/Eau, Cetearyl Alcohol, Glycerin, Cetrimonium Chloride, Octyldodecanol, Mel Extract / Honey Extract / Extrait de miel, Retinol, Royal Jelly Extract, Propolis Extract, Leptospermum Scoparium Branch/Leaf Oil, Magnolia Officinalis Bark Extract, Piper Nigrum (Pepper) Seed Extract / Piper Nigrum Seed Extract, Cocos Nucifera (Coconut) Oil / Cocos Nucifera Oil, Persea Gratissima (Avocado) Oil / Persea Gratissima Oil, Citrus Grandis (Grapefruit) Seed Extract / Citrus Grandis Seed Extract, Panthenol,Sodium Ascorbate, Tocopherol, Behentrimonium Chloride, Dipalmitoylethyl Hydroxyethylmonium Methosulfate, Ethylhexyl Palmitate, Glyceryl Stearate, Caprylic/Capric Triglyceride, Guar Hydroxypropyltrimonium Chloride, Tetrasodium Glutamate Diacetate, Fragrance / Parfum, Potassium Sorbate, Sodium Hydroxide, Sorbic Acid, Benzoic Acid, Benzyl Alcohol, Linalool.',
			},
		],
	};

    const accordionHandle = (e) => {
        const btnToggle = document.querySelectorAll('.accordion-button');
        for (let i = 0; i < btnToggle.length; i++) {
            btnToggle[i].classList.add('collapsed');
        }

        const collapse = new Collapse(document.getElementById(e.currentTarget.dataset.target), {
            toggle: true,
        });

        const btnIndex = e.currentTarget.dataset.btnindex;
        document.querySelector(`#FagButtonToggle${btnIndex}`).classList.toggle('collapsed');
        setTimeout(function () {
            if (collapse._element.classList.contains('show')) {
                document.getElementById(`FagButtonToggle${btnIndex}`).classList.remove('collapsed');
            } else {
                document.getElementById(`FagButtonToggle${btnIndex}`).classList.add('collapsed');
            }
        }, 390);
    };

	return (
		<section className={`youth-revive__section youth-revive__accordion`}>
            <div className="container px-g">
                <h2 className="text-lg-center youth-revive__accordion-title mb-0 pb-lg-2">Your questions – <br className="d-lg-none"/>answered</h2>
                <div className="row">
					<div className="accordion list-unstyled col-12 col-lg-8 border-0 mt-1 mt-lg-4 offset-lg-2" id="faqSection">
						{FAQ.items.map((faq, index) => (
							<div key={`faqitem${index}`} className={`accordion-item border-0 border-bottom border-dark ${ index === 9 ? 'border-bottom-0':''}`}>
								<div className={`accordion-header`} id={`FagItemHeading${index}`}>
									<button className={`accordion-button h2 mb-0 collapsed w-100 d-flex justify-content-between px-0`} type="button" data-target={`FagItemContent${index}`} data-btnindex={index} id={`FagButtonToggle${index}`} onClick={accordionHandle}>
										<h3 className='col-10 ps-0 mb-0'>{faq.title}</h3>
										<Plus className='plus' />
										<Minus className='minus' />
									</button>
								</div>
								<div data-bs-parent="#faqSection" id={`FagItemContent${index}`} className={`accordion-collapse collapse ${props.range === 'tan' ? 'bg-yellow-light' : 'bg-primary-light'}`} aria-expanded="false">
									<div className="accordion-body px-0" dangerouslySetInnerHTML={{ __html: faq.text }} />
								</div>
							</div>
						))}
					</div>
				</div>
            </div>
        </section>
	);
};

export default FaqAccordion;
