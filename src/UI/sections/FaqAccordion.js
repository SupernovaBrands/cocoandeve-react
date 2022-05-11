import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const FaqAccordion = () => {
    const FAQCONTENT = [
        {
            title: 'Which Sunny Honey color should I go for?',
            content: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. <br/>Medium self-tan gives skin a sun-kissed glow. Great for lighter skin tones!<br/>Dark self-tan for a back from vacay bronze. Ideal for medium skin tones!<br/>Ultra Dark for a deep, rich tan. For deeper skin tones!<br><br>Check out REAL Reviews <a href="http://www.cocoandeve.com/pages/reviews"><span class="visually-hidden-focusable">Check out REAL Reviews</span>here</a>.',
        },
        {
            title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
            content: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br>2. Apply to dry skin, free from moisturisers.<br>3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br>4. Use the Back Tan Applicator to apply the tan evenly across your back.<br>5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br>6. Shower in warm water to remove the guide colour and pat skin dry.<br>7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
        },
        {
            title: 'How often should I self-tan?',
            content: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
        },
        {
            title: 'Can I use Sunny Honey on sensitive skin?',
            content: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts.  <br/>We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br/>Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation.',
        }
    ]

	return (
		<section className='range__carousel faq-accordion bg-yellow-light py-3'>
            <div className="container">
                <h2 className="text-center">Your questions – answered</h2>
                <div className="accordion list-unstyled border-0 mt-4 " id="faqSection">
                    {FAQCONTENT.map((faq, index) => (
                        <div key={`faqitem${index}`} className={`accordion-item border-0 border-bottom border-dark ${ index === 3 ? 'border-bottom-0':''}`}>
                            <div className="accordion-header bg-yellow-light" id={`FagItemHeading${index}`}>
                                <button className="accordion-button bg-yellow-light h2 mb-0 collapsed w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#FagItemContent${index}`}>
                                    <h3 className='col-10 ps-0 mb-0'>{faq.title}</h3>
                                    <Plus className='plus' />
							        <Minus className='minus' />
                                </button>
                            </div>
                            <div data-bs-parent="#faqSection" id={`FagItemContent${index}`} className="accordion-collapse collapse bg-yellow-light">
                                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.content }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
	);
};

export default FaqAccordion;
