import React, { useContext } from 'react';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import FaqContext from '../../store/faq-context';

const FaqAccordion = () => {
    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get("utm_store") || 'us';

    const faqCtx = useContext(FaqContext);
    faqCtx.storeChange(activeStore);

	return (
		<section className='range__carousel faq-accordion bg-yellow-light py-3'>
            <div className="container">
                <h2 className="text-center">{faqCtx.heading}</h2>
                <div className="accordion list-unstyled border-0 mt-4 " id="faqSection">
                    {faqCtx.items.map((faq, index) => (
                        <div key={`faqitem${index}`} className={`accordion-item border-0 border-bottom border-dark ${ index === 3 ? 'border-bottom-0':''}`}>
                            <div className="accordion-header bg-yellow-light" id={`FagItemHeading${index}`}>
                                <button className="accordion-button bg-yellow-light h2 mb-0 collapsed w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#FagItemContent${index}`}>
                                    <h3 className='col-10 ps-0 mb-0'>{faq.title}</h3>
                                    <Plus className='plus' />
							        <Minus className='minus' />
                                </button>
                            </div>
                            <div data-bs-parent="#faqSection" id={`FagItemContent${index}`} className="accordion-collapse collapse bg-yellow-light">
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
