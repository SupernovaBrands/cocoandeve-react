
const FaqAccordion = () => {
    const FAQCONTENT = [
        {
            title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
            content: 'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        },
        {
            title: 'How often should I self-tan?',
            content: 'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        },
        {
            title: 'Which Sunny Honey shade is right for me?',
            content: 'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        },
        {
            title: 'Does Sunny Honey Bali Bronzing Foam have a guide colour?',
            content: 'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        }
    ]

	return (
		<section className='range__carousel bg-yellow-light py-3'>
            <div class="container">
                <h2 className="h1 text-center">Your questions – answered</h2>
                <div className="accordion list-unstyled border-0 mt-4 " id="faqSection">
                    {FAQCONTENT.map((faq, index) => (
                        <div className={`accordion-item border-0 border-bottom border-dark ${ index === 3 ? 'border-bottom-0':''}`}>
                            <h2 className="accordion-header bg-yellow-light" id={`FagItemHeading${index}`}>
                                <button className="accordion-button bg-yellow-light h2 mb-0" type="button" data-bs-toggle="collapse" data-bs-target={`#FagItemContent${index}`}>
                                    {faq.title}
                                </button>
                            </h2>
                            <div id={`FagItemContent${index}`} className={`accordion-collapse collapse bg-yellow-light ${ index === 0 ? ' show':''}`}>
                                <div className="accordion-body">
                                {faq.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
	);
};

export default FaqAccordion;
