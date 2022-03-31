import ProductCard from "../components/ProductCard";
import carouselLoop from "../../modules/carousel-loop";
import Carousel from "../components/Carousel";


import { ReactComponent as ChevronPrev } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext } from '../../assets/chevron-next.svg';

const RangeCarousel = () => {

	const PRODUCTS_BODY = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center active',
            content: <ProductCard
				title='Bronzing Face Drops'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        }
	];

	const PRODUCTS_FACE = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center active',
            content: <ProductCard
				title='Bronzing Face Drops (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Foam (FACE)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        }
	];

	const PRODUCTS_VALUE_SETS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center active',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops (Value)'
				url='/products/test'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='199'
				price='$96.80'
				crossedPrice='$59.90' />
        }
	];

	const CAROUSEL_TABS = [
		{
			carouselId: 'FeaturedFace',
			isTabActive: false,
			carouselItems: PRODUCTS_FACE,
			tabLabel: 'Face'
		},
		{
			carouselId: 'FeaturedBody',
			isTabActive: true,
			carouselItems: PRODUCTS_BODY,
			tabLabel: 'Body'
		},
		{
			carouselId: 'FeaturedValueSets',
			isTabActive: false,
			carouselItems: PRODUCTS_VALUE_SETS,
			tabLabel: 'Value Sets'
		}
	];

	carouselLoop('FeaturedBody');
	carouselLoop('FeaturedFace');
	carouselLoop('FeaturedValueSets');

	return (
		<section className='product-carousel py-2 py-lg-4'>
			<div className='container d-flex flex-column align-items-center px-g'>
				<h2 className='range__formula-title mb-2'>Self-tanners for any occasion</h2>
				<ul className="nav nav-tabs justify-content-center border-0 col-9 col-lg-5 px-0 pb-2 range__tab" role="tablist">
					{CAROUSEL_TABS.map((item) => (
						<li className="nav-item">
							<a className={`nav-link text-decoration-none h4 mb-0 fw-bold text-center ${item.isTabActive ? 'active' : ''}`}
								data-bs-toggle="tab" href={`#${item.carouselId}`} role="tab"
								aria-controls={item.tabLabel.replace(/\s/g, '').toLowerCase()}>
									{item.tabLabel}
							</a>
						</li>
					))}
				</ul>
			</div>
            <div className='tab-content container px-sm-0 px-md-2 text-center'>
				{CAROUSEL_TABS.map((item) => (
					<Carousel id={item.carouselId} centered={true} items={item.carouselItems} slideNumber='4' className={`tab-pane fade carousel slide carousel--loop ${item.isTabActive ? 'show active' : ''}`}>
						<button className="carousel-control carousel-control-prev carousel-control--background floating-out-start justify-content-start text-primary d-none d-lg-flex" data-bs-target={`#${item.carouselId}`} data-bs-slide="prev">
							<span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true">
								<ChevronPrev />
							</span>
						</button>
						<button className="carousel-control carousel-control-next carousel-control--background floating-out-end justify-content-end text-primary d-none d-lg-flex" data-bs-target={`#${item.carouselId}`} data-bs-slide="next">
							<span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true">
								<ChevronNext />
							</span>
						</button>
					</Carousel>
				))}
			</div>
        </section>
	);
};

export default RangeCarousel;
