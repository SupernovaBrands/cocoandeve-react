import React, { useContext } from 'react';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import FaqContext from '../../store/faq-context';

import {Collapse} from 'bootstrap';

const FaqAccordion = (props) => {
    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get("utm_store") || 'us';

    const faqCtx = useContext(FaqContext);

    if (props.handle) {
        faqCtx.storeChange(activeStore, props.handle);
    } else {
        faqCtx.storeChange(activeStore, props.range);
    }

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
		<section className={`range__carousel faq-accordion ${props.range === 'tan' ? 'bg-yellow-light' : 'bg-primary-light'} py-3`}>
            <div className="container">
                <h2 className="text-center">{faqCtx.heading}</h2>
                <div className="accordion list-unstyled border-0 mt-4 " id="faqSection">
                    {faqCtx.items.map((faq, index) => (
                        <div key={`faqitem${index}`} className={`accordion-item border-0 border-bottom border-dark ${ index === 3 ? 'border-bottom-0':''}`}>
                            <div className={`accordion-header ${props.range === 'tan' ? 'bg-yellow-light' : 'bg-primary-light'}`} id={`FagItemHeading${index}`}>
                                <button className={`accordion-button ${props.range === 'tan' ? 'bg-yellow-light' : 'bg-primary-light'} h2 mb-0 collapsed w-100 d-flex justify-content-between`} type="button" data-target={`FagItemContent${index}`} data-btnindex={index} id={`FagButtonToggle${index}`} onClick={accordionHandle}>
                                    <h3 className='col-10 ps-0 mb-0'>{faq.title}</h3>
                                    <Plus className='plus' />
							        <Minus className='minus' />
                                </button>
                            </div>
                            <div data-bs-parent="#faqSection" id={`FagItemContent${index}`} className={`accordion-collapse collapse ${props.range === 'tan' ? 'bg-yellow-light' : 'bg-primary-light'}`} aria-expanded="false">
                                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.text }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
	);
};

export default FaqAccordion;
