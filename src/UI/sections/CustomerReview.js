import ReviewCard from '../components/ReviewCard';
import Carousel from '../components/Carousel';

const CustomerReview = () => {

    const CUSTOMER_REVIEWS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded active',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !!</p>
                    <img src="../images/cr-sample.png" />
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !!</p>
                    <img src="../images/cr-sample.png" />
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !!</p>
                    <img src="../images/cr-sample.png" />
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !!</p>
                    <img src="../images/cr-sample.png" />
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !!</p>
                    <img src="../images/cr-sample.png" />
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded',
            content: 
                <ReviewCard 
                    name="Sadie B. Verified Buyer"
                    caption="Shade of Tan: Medium"
                >
                    <p>The smell is gorgeous (although when it's developed it still has a very slight fake tan smell but nothing strong) the colour is perfect, I went for dark and I was worried it wouldn't be dark enough. But after washing it off it seemed to develop even further over the next few hours! It went on so smoothly. I am converted and won't use anything else now !!</p>
                    <img src="../images/cr-sample.png" />
                </ReviewCard>
        }
    ] 

	return (
		<section className='customer-reviews py-4'>
            <h2 className="h1 mb-4 text-center">Customer Reviews</h2>
            <div className='container'>
                <Carousel 
                    id="customerReviews"
                    class="carousel slide carousel--loop carousel--mobile-half-next"
                    items={CUSTOMER_REVIEWS}
                    slideNumber="4">
                    <button class="carousel-control carousel-control-prev  floating-out-start justify-content-start text-primary d-none d-lg-flex" data-bs-target="#customerReviews" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" class="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                    </button>
                    <button class="carousel-control carousel-control-next  floating-out-end justify-content-end text-primary d-none d-lg-flex" data-bs-target="#customerReviews" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" class="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default CustomerReview;
