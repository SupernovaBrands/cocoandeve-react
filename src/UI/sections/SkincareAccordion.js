import React, { useContext } from 'react';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
// import FaqContext from '../../store/faq-context';

import {Collapse} from 'bootstrap';

const FaqAccordion = (props) => {
    const FAQ = {
		heading: 'Your questions – answered',
		accordions: [
			{
				product: 'Seed Oil Cleanser',
				items: [
                    {
                        id: 1,
                        title: 'Do I still need makeup remover before using this?',
                        text: 'No need! Our Seed Oil Cleanser is already packed with punches to melt away makeup and other dirt on your face',
                    },
                    {
                        id: 2,
                        title: 'Has the Seed Oil Cleanser been dermatologically tested?',
                        text: 'Absolutely! We’ve taken great care to ensure our skincare collection is safe to use on the skin.',
                    },
                    {
                        id: 3,
                        title: 'Is the product non-comedogenic?',
                        text: 'If you’re looking to check whether certain skincare or cosmetic products may cause acne breakouts, one great resource is acneclinicnyc.com. They provide a list of potentially pore-clogging ingredients that you can use as a reference for what to avoid. However, keep in mind that everyone’s skin is different. What works for one person might not work for someone else. It’s also important to consider other factors that can contribute to acne. If you have persistent or severe acne, we recommend consulting with a dermatologist before you make tweaks to your skincare routine.',
                    },
                    {
                        id: 4,
                        title: 'Is the product alcohol free?',
                        text: 'Want to make sure your products are free from silicones and alcohol? You’re in luck, our skincare range has been formulated without them!',
                    },
                    {
                        id: 5,
                        title: 'Is the product suitable for sensitive skin?',
                        text: 'Our Seed Oil Cleanser is designed to be suitable for all skin types. That said, everyone’s skin is unique. If you have particularly sensitive or delicate skin, we encourage a patch test before full use to ensure it’s the perfect fit for you.',
                    },
                ],
			},
            {
				product: 'Fruit Enzyme Cleanser',
				items: [
                    {
                        id: 6,
                        title: 'Does this foam like a typical facial wash?',
                        text: 'Our Fruit Enzyme Cleanser is sulphate-free, so it doesn’t foam up. But what it lacks in bubbles it more than makes up for in super effective yet gentle cleansing!',
                    },
                    {
                        id: 7,
                        title: 'Has the Fruit Enzyme Cleanser been dermatologically tested?',
                        text: 'Absolutely! We’ve taken great care to ensure our skincare collection is safe to use on the skin.',
                    },
                    {
                        id: 8,
                        title: 'Is the product non-comedogenic?',
                        text: 'If you’re looking to check whether certain skincare or cosmetic products may cause acne breakouts, one great resource is acneclinicnyc.com. They provide a list of potentially pore-clogging ingredients that you can use as a reference for what to avoid. However, keep in mind that everyone’s skin is different. What works for one person might not work for someone else. It’s also important to consider other factors that can contribute to acne. If you have persistent or severe acne, we recommend consulting with a dermatologist before you make tweaks to your skincare routine.',
                    },
                    {
                        id: 9,
                        title: 'Is the product alcohol free?',
                        text: 'Want to make sure your products are free from silicones and alcohol? You’re in luck, our skincare range has been formulated without them!',
                    },
                    {
                        id: 10,
                        title: 'Is the product suitable for sensitive skin?',
                        text: 'Our Fruit Enzyme Cleanser is designed to be suitable for all skin types. That said, everyone’s skin is unique. If you have particularly sensitive or delicate skin, we encourage a patch test before full use to ensure it’s the perfect fit for you.',
                    },
                ],
			},
            {
				product: 'Antioxidant Hydrating Milk Toner',
				items: [
                    {
                        id: 11,
                        title: 'What makes this product milky?',
                        text: 'Spoiler alert... it’s not milk (or plant milk). Milky toners get their uniquely cloudy look from their bi-phase, micro-emulsion formula that contains oil.',
                    },
                    {
                        id: 12,
                        title: 'Has the Antioxidant Hydrating Milk Toner been dermatologically tested?',
                        text: 'Absolutely! We’ve taken great care to ensure our skincare collection is safe to use on the skin. Is the product non-comedogenic? If you’re looking to check whether certain skincare or cosmetic products may cause acne breakouts, one great resource is acneclinicnyc.com. They provide a list of potentially pore-clogging ingredients that you can use as a reference for what to avoid. However, keep in mind that everyone’s skin is different. What works for one person might not work for someone else. It’s also important to consider other factors that can contribute to acne. If you have persistent or severe acne, we recommend consulting with a dermatologist before you make tweaks to your skincare routine.',
                    },
                    {
                        id: 13,
                        title: 'Is the product alcohol free?',
                        text: 'Want to make sure your products are free from silicones and alcohol? You’re in luck, our skincare range has been formulated without them!',
                    },
                    {
                        id: 14,
                        title: 'Is the product alcohol free?',
                        text: 'Want to make sure your products are free from silicones and alcohol? You’re in luck, our skincare range has been formulated without them!',
                    },
                    {
                        id: 15,
                        title: 'Is the product suitable for sensitive skin?',
                        text: 'Our Antioxidant Hydrating Milk Toner is designed to be suitable for all skin types. That said, everyone’s skin is unique. If you have particularly sensitive or delicate skin, we encourage a patch test before full use to ensure it’s the perfect fit for you.',
                    },
                ],
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
		<section className={`youth-revive__section youth-revive__accordion pt-2 pt-lg-0`}>
            <div className="container px-g">
                <h2 className="text-lg-center youth-revive__accordion-title mb-0 pb-lg-2">Your questions – <br className="d-lg-none"/>answered</h2>
                <div className="row">
					<div className="accordion list-unstyled col-12 col-lg-8 border-0 mt-1 mt-lg-4 offset-lg-2" id="faqSection">
						{FAQ.accordions.map((faq, index) => (
                            <div className={`border-bottom border-dark ${ index === 2 ? 'border-bottom-0':''}`}>
                                <h3 className="youth-revive__product-title mb-0 pb-lg-2 pt-2">{faq.product}</h3>
                                {faq.items.map((item, val) => (
                                    <div key={`faqitem${item.id}`} className={`accordion-item border-0`}>
                                        <div className={`accordion-header`} id={`FagItemHeading${item.id}`}>
                                            <button className={`accordion-button h2 mb-0 collapsed w-100 d-flex justify-content-between px-0`} type="button" data-target={`FagItemContent${item.id}`} data-btnindex={item.id} id={`FagButtonToggle${item.id}`} onClick={accordionHandle}>
                                                <h3 className='col-10 ps-0 mb-0'>{item.title}</h3>
                                                <Plus className='plus' />
                                                <Minus className='minus' />
                                            </button>
                                        </div>
                                        <div data-bs-parent="#faqSection" id={`FagItemContent${item.id}`} className={`accordion-collapse collapse ${props.range === 'tan' ? 'bg-yellow-light' : 'bg-primary-light'}`} aria-expanded="false">
                                            <div className="accordion-body px-0" dangerouslySetInnerHTML={{ __html: item.text }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
						))}
					</div>
				</div>
            </div>
        </section>
	);
};

export default FaqAccordion;
