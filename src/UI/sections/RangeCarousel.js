import ProductCard from "../components/ProductCard";
import carouselLoop from "../../modules/carousel-loop";
import Carousel from "../components/Carousel";


import { ReactComponent as ChevronPrev } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext } from '../../assets/chevron-next.svg';

const RangeCarousel = () => {



	const PRODUCTS_FACE = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center active',
            content: <ProductCard
				title='Bronzing Face Drops'
				url='https://www.cocoandeve.com/products/bronzing-self-tanner-drops'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BronzingFaceDrops_300x.jpg?v=1644828888'
				rating='4.8'
				totalReviews='735'
				price='$27.90'
				isCrossedPrice='false' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='SPF & Glow Kit'
				url='https://www.cocoandeve.com/products/spf-glow-kit'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/CExNakedSundaysBundle_300x.jpg?v=1648117754'
				rating='4.8'
				totalReviews='735'
				price='$45.70'
				isCrossedPrice='true'
				crossedPrice='$57.20' />
        }
	];

	const PRODUCTS_BODY = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center active',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice='true'
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bronzing Foam'
				url='https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-mousse'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BronzingFoam_300x.jpg?v=1644832516'
				rating='4.8'
				totalReviews='2021'
				price='$34.90'
				isCrossedPrice='false' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://www.cocoandeve.com/products/tanning-goddess'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanningGoddessKit_300x.jpg?v=1644832766'
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice='true'
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Self Tan Travel Kit'
				url='https://www.cocoandeve.com/products/self-tan-travel-kit'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanningTravelKit_300x.jpg?v=1644832274'
				rating='4.8'
				totalReviews='96'
				price='$24.90'
				isCrossedPrice='false' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice='true'
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bronzing Foam'
				url='https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-mousse'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BronzingFoam_300x.jpg?v=1644832516'
				rating='4.8'
				totalReviews='2021'
				price='$34.90'
				isCrossedPrice='false' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://www.cocoandeve.com/products/tanning-goddess'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanningGoddessKit_300x.jpg?v=1644832766'
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice='true'
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Self Tan Travel Kit'
				url='https://www.cocoandeve.com/products/self-tan-travel-kit'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanningTravelKit_300x.jpg?v=1644832274'
				rating='4.8'
				totalReviews='96'
				price='$24.90'
				isCrossedPrice='false' />
        }
	];

	const PRODUCTS_VALUE_SETS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center active',
            content: <ProductCard
				title='Bali Bae Self Tan Set'
				url='https://www.cocoandeve.com/products/bali-bae-self-tan-set'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanBundlewithBackApplicator_300x.jpg?v=1648447191'
				rating='4.8'
				totalReviews='4336'
				price='$59.00'
				isCrossedPrice='true'
				crossedPrice='$90.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice='true'
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://www.cocoandeve.com/products/tanning-goddess'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanningGoddessKit_300x.jpg?v=1644832766'
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice='true'
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Dewy Glow Bundle'
				url='https://www.cocoandeve.com/products/dewy-glow-bundle'
				img='//cdn.shopify.com/s/files/1/0286/1327/9779/products/DewyGlowBundle-SHWhip_300x.jpg?v=1644810274'
				rating='4.8'
				totalReviews='199'
				price='$51.00'
				isCrossedPrice='true'
				crossedPrice='$63.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bali Bae Self Tan Set'
				url='https://www.cocoandeve.com/products/bali-bae-self-tan-set'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanBundlewithBackApplicator_300x.jpg?v=1648447191'
				rating='4.8'
				totalReviews='4336'
				price='$59.00'
				isCrossedPrice='true'
				crossedPrice='$90.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902'
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice='true'
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://www.cocoandeve.com/products/tanning-goddess'
				img='//cdn.shopify.com/s/files/1/0243/8817/3888/products/TanningGoddessKit_300x.jpg?v=1644832766'
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice='true'
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Dewy Glow Bundle'
				url='https://www.cocoandeve.com/products/dewy-glow-bundle'
				img='//cdn.shopify.com/s/files/1/0286/1327/9779/products/DewyGlowBundle-SHWhip_300x.jpg?v=1644810274'
				rating='4.8'
				totalReviews='199'
				price='$51.00'
				isCrossedPrice='true'
				crossedPrice='$63.80' />
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
				<ul className="nav nav-tabs justify-content-center border-0 col-7 col-lg-3 px-0 pb-2 range__tab" role="tablist">
					{CAROUSEL_TABS.map((item) => (
						<li className="nav-item">
							<a className={`nav-link text-decoration-none h4 mb-0 fw-bold text-center ${item.isTabActive ? 'active' : ''}`}
								data-bs-toggle="tab" href={`#${item.carouselId}`} role="tab"
								aria-controls={item.tabLabel.replace(/\s/g, '').toLowerCase()}>
									<nobr>{item.tabLabel}</nobr>
							</a>
						</li>
					))}
				</ul>
			</div>
            <div className='tab-content container px-sm-0 px-md-2 text-center'>
				{CAROUSEL_TABS.map((item) => (
					<Carousel id={item.carouselId} centered={true} items={item.carouselItems} slideNumber='4' className={`tab-pane fade carousel slide carousel--loop ${item.isTabActive ? 'show active' : ''}`} additionalClasses='row'>
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
