
const SeenIn = () => {

    setTimeout(() => {
        const carouselLoop = document.getElementById('asSeenInCarousel')
        carouselLoop.addEventListener('slide.bs.carousel', function (e) {
            const $e = e.target;
            const itemsEl = carouselLoop.querySelectorAll('.carousel-item');
            const activeEl = carouselLoop.querySelector('.active');
            let idx = [].indexOf.call(itemsEl, activeEl);
            let itemsPerSlide = e.target.dataset.dataBsSlideNumber ? e.target.dataset.dataBsSlideNumber : 3;
			const totalItems = itemsEl.length;

            console.log('itemsEl', itemsEl);
            console.log('aaa', activeEl)
            console.log('rr', [].indexOf.call(itemsEl, activeEl));

            if (768 > window.innerWidth) {
				// set 1 for mobile
				itemsPerSlide = 2;
			}

            
        })
    }, 500)

	return (
		<section className='as-seen-in py-4'>
			<div id="asSeenInCarousel" class="carousel slide carousel--loop carousel--centered-mobile overflow-hidden" data-bs-slide-number="5" data-bs-ride="carousel">
                <h2 className="h1 mb-4 text-center">As seen in</h2>
                <div class="carousel-inner d-flex flex-nowrap">
                    <div class="carousel-item col-9 col-md-3 active mt-5 text-center">
                        <img class="img-fluid" src="../images/glamour.png" alt="slide 1"/>
                    </div>
                    <div class="carousel-item col-9 text-center">
                        <img class="img-fluid" src="../images/cosmopolitan.png" alt="slide 1"/>
                    </div>
                    <div class="carousel-item col-9 mt-5 text-center">
                        <img class="img-fluid" src="../images/elle.png" alt="slide 1"/>
                    </div>
                    <div class="carousel-item col-9 text-center">
                        <img class="img-fluid" src="../images/mailonline.png" alt="slide 1"/>
                    </div>
                    <div class="carousel-item col-9 mt-5 text-center">
                        <img class="img-fluid" src="../images/refinery29.png" alt="slide 1"/>
                    </div>
                </div>
                <a class="carousel-control carousel-control-prev carousel-control--background carousel-control--loop mt-4" href="#asSeenInCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" class="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                </a>
                <a class="carousel-control carousel-control-next carousel-control--background carousel-control--loop mt-4" href="#asSeenInCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" class="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                </a>
            </div>
        </section>
	);
};

export default SeenIn;
