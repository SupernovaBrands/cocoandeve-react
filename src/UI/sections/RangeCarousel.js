import ProductCard from "../components/ProductCard";
import carouselLoop from "../../modules/carousel-loop";

const RangeCarousel = () => {
	carouselLoop('bestsellers');
	return (
		<section className='product-carousel py-2 py-lg-4'>
			<div className='container d-flex flex-column align-items-center px-g'>
				<h2 className='range__formula-title mb-2'>Self-tanners for any occasion</h2>
				<ul className="nav nav-tabs justify-content-center border-0 col-9 col-lg-5 px-0 pb-2 range__tab" role="tablist">
					<li className="nav-item">
						<a className="nav-link text-decoration-none h4 mb-0 fw-bold text-center" data-bs-toggle="tab" href="#new" role="tab" aria-controls="new">Face</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-decoration-none h4 mb-0 fw-bold text-center active" data-bs-toggle="tab" href="#bestsellers" role="tab" aria-controls="bestsellers">Body</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-decoration-none h4 mb-0 fw-bold text-center" data-bs-toggle="tab" href="#value-sets" role="tab" aria-controls="value-sets">Value Sets</a>
					</li>
				</ul>
			</div>
            <div className='tab-content container px-sm-0 px-md-2 text-center'>
				<div className='tab-pane fade carousel slide carousel--loop' id='new' role='tabpanel' data-interval='false' aria-labelledby='new-tab' data-slide-number='4'>Tab new</div>
				<div className='tab-pane fade carousel slide carousel--loop show active' id='bestsellers' role='tabpanel' data-bs-ride='carousel' data-bs-interval='false' aria-labelledby='bestsellers-tab' data-bs-slide-number='4'>
					<div className='carousel--centered'>
						<div className='carousel-inner row flex-nowrap' role='listbox'>
							<ProductCard title='Bronzing Face Drops' classname='active' />
							<ProductCard title='Sunny Honey Bali Bronzing Foam' classname='' />
							<ProductCard title='Bronzing Face Drops' classname=''/>
							<ProductCard title='Sunny Honey Bali Bronzing Foam' classname='' />
							<ProductCard title='Sunny Honey Bali Bronzing Foam' classname='' />
							<ProductCard title='Sunny Honey Bali Bronzing Foam' classname='' />
							<ProductCard title='Sunny Honey Bali Bronzing Foam' classname='' />
							<ProductCard title='Sunny Honey Bali Bronzing Foam' classname='' />
						</div>
					</div>
					<button className="carousel-control carousel-control-prev carousel-control--background floating-out-start justify-content-start text-primary d-none d-lg-flex" data-bs-target="#bestsellers" data-bs-slide="prev">
						<span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
					</button>
					<button className="carousel-control carousel-control-next carousel-control--background floating-out-end justify-content-end text-primary d-none d-lg-flex" data-bs-target="#bestsellers" data-bs-slide="next">
						<span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
					</button>
				</div>
				<div className='tab-pane fade carousel slide carousel--loop' id='value-sets' role='tabpanel' data-interval='false' aria-labelledby='value-sets-tab' data-slide-number='4'>Tab3</div>
			</div>
        </section>
	);
};

export default RangeCarousel;
