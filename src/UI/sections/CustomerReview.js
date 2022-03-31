import ReviewCard from '../components/ReviewCard';
import Carousel from '../components/Carousel';

const CustomerReview = () => {

    const CUSTOMER_REVIEWS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded active',
            content: 
                <ReviewCard 
                    name="Kjersti V. Verified Buyer"
                    caption="Shade of Tan:Dark"
                >
                    <p>The BEST sunless tan!!</p>
                    <p>Doesn’t smell bad like some others, and goes on super smooth. Color is gorgeous, looks natural and doesn’t have any orange tint AND makes your skin look soooo healthy. Doesn’t leave streaks or blotches and fades perfectly without leaving patches. I love it!!!</p>
                    <div className='row no-gutters'>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-2.png`} /></div>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-1.png`} /></div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Michelle T. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>I’m a huge self tanner</p>
                    <p>I’m a huge self tanner user and this is by far the best one I’ve used. Theres no streaks, leaves you a bronze color and not orange. Smells amazing, easy application obsessed! Can’t wait to try the other products.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-4.png`} /></div>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-3.png`} /></div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Torey M. Verified Buyer"
                    caption="Shade of Tan:Dark"
                >
                    <p>Best self tanner I've tried!</p>
                    <p>Beautiful natural tan color. Easy to apply although if you have excessively dry skin it will suck up the color in those spots. Applying to feet is a little tricky but nothing you can't get the hang of after a few applications. Smells great too! I love the hair towel and the cute little eye mask!</p>
                    <div className='row no-gutters'>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-3.png`} /></div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Steffanie G. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>Wow!</p>
                    <p>I have sensitive dry skin and this product changed the way I see my skin now! No dry spots, no Casper white skin! I’m a whole new woman!! I was weary to try it because I haven't had success with other tanning products- but I'm SO happy I did!</p>
                    <div className='row no-gutters'>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-6.png`} /></div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Dark"
                >
                    <p>I am converted!!</p>
                    <p>I was skeptical that this would actually be any bettee than the cheap St Moritz that I use...but this was absolutely worth the money!! The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !! One photo of just 1 leg is after immediately applying it, it developed much deeper after a few hours as you can see in the photo where both legs are done.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-8.png`} /></div>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-7.png`} /></div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Stef H. Verified Buyer"
                    caption="Shade of Tan:Medium"
                >
                    <p>This product is amazing!</p>
                    <p>I love the perfect golden glow the tanner gives my skin. I use the medium shade, and I'm at least two shades darker than I would be naturally. This is such a great way to get the perfect tan without causing skin damage or possible skin cancer. The photo is included to show the difference between my natural paleness and this amazing product.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-2.png`} /></div>
                        <div className='col-6'><img className='w-100' src={`${process.env.PUBLIC_URL}/images/review-customer-7.png`} /></div>
                    </div>
                </ReviewCard>
        }
    ] 

	return (
		<section className='customer-reviews py-4'>
            <h2 className="h1 mb-4 text-center">Customer Reviews</h2>
            <div className='container'>
                <Carousel 
                    id="customerReviews"
                    className="carousel slide carousel--loop carousel--mobile-half-next"
                    items={CUSTOMER_REVIEWS}
                    slideNumber="4">
                    <button className="carousel-control carousel-control-prev  floating-out-start justify-content-start text-primary d-none d-lg-flex" data-bs-target="#customerReviews" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                    </button>
                    <button className="carousel-control carousel-control-next  floating-out-end justify-content-end text-primary d-none d-lg-flex" data-bs-target="#customerReviews" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default CustomerReview;
