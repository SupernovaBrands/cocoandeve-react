import ProductCard from "../components/ProductCard";
import carouselLoop from "../../modules/carousel-loop";
import Carousel from "../components/Carousel";

import { ReactComponent as ChevronPrev } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext } from '../../assets/chevron-next.svg';
import { Fragment } from "react";
import { useWindowSize } from "../../modules/Utils";

const RangeCarousel = () => {

	const PRODUCTS_FACE = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39399534428195&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFaceDrops_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFaceDrops_300x.webp`}
				rating='4.8'
				totalReviews='735'
				price='$27.90'
				isCrossedPrice={false} />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='SPF & Glow Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39605054996515&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_CExNakedSundaysBundle_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_CExNakedSundaysBundle_300x.webp`}
				rating='4.8'
				totalReviews='735'
				price='$45.70'
				isCrossedPrice={true}
				crossedPrice='$57.20' />
        }
	];

	const PRODUCTS_BODY = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32068892295203&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_300x.webp`}
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice={true}
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bronzing Foam'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32068891607075&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFoam_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFoam_300x.webp`}
				rating='4.8'
				totalReviews='2021'
				price='$34.90'
				isCrossedPrice={false}
				useBadge={true}
				textBadge='New' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32364706332707&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_300x.webp`}
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice={true}
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Self Tan Travel Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39253385543715&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningTravelKit_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningTravelKit_300x.webp`}
				rating='4.8'
				totalReviews='96'
				price='$24.90'
				isCrossedPrice={false} />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32068892295203&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_300x.webp`}
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice={true}
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bronzing Foam'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32068891607075&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFoam_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFoam_300x.webp`}
				rating='4.8'
				totalReviews='2021'
				price='$34.90'
				useBadge={true}
				isCrossedPrice={false}
				textBadge='New' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32364706332707&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_300x.webp`}
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice={true}
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Self Tan Travel Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39253385543715&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningTravelKit_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningTravelKit_300x.webp`}
				rating='4.8'
				totalReviews='96'
				price='$24.90'
				isCrossedPrice={false} />
        }
	];

	const PRODUCTS_VALUE_SETS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bali Bae Self Tan Set'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39608564285475&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanBundlewithBackApplicator_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanBundlewithBackApplicator_300x.webp`}
				rating='4.8'
				totalReviews='4336'
				price='$59.00'
				isCrossedPrice={true}
				crossedPrice='$90.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32068892295203&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_300x.webp`}
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice={true}
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32364706332707&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_300x.webp`}
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice={true}
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Dewy Glow Bundle'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39264320815139&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_DewyGlowBundle-SHWhip_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_DewyGlowBundle-SHWhip_300x.webp`}
				rating='4.8'
				totalReviews='199'
				price='$51.00'
				isCrossedPrice={true}
				crossedPrice='$63.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Bali Bae Self Tan Set'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39608564285475&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanBundlewithBackApplicator_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanBundlewithBackApplicator_300x.webp`}
				rating='4.8'
				totalReviews='4336'
				price='$59.00'
				isCrossedPrice={true}
				crossedPrice='$90.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32068892295203&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_300x.webp`}
				rating='4.8'
				totalReviews='4336'
				price='$46.90'
				isCrossedPrice={true}
				crossedPrice='$73.90' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=32364706332707&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_300x.webp`}
				rating='4.8'
				totalReviews='2021'
				price='$73.90'
				isCrossedPrice={true}
				crossedPrice='$105.80' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-3 product-card text-center',
            content: <ProductCard
				title='Dewy Glow Bundle'
				url='https://dev.cocoandeve.com/collections/all?itemtoadd=39264320815139&quantity=1'
				img={`${process.env.PUBLIC_URL}/images/Featured_DewyGlowBundle-SHWhip_300x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_DewyGlowBundle-SHWhip_300x.webp`}
				rating='4.8'
				totalReviews='199'
				price='$51.00'
				isCrossedPrice={true}
				crossedPrice='$63.80' />
        }
	];


	const [width] = useWindowSize();
	const isMobile = width < 768;
	let productFaceMerged = [];
	if (isMobile) {
		const PRODUCTS_FACE_DUP = [...PRODUCTS_FACE];
		productFaceMerged = [...PRODUCTS_FACE, ...PRODUCTS_FACE_DUP, ...PRODUCTS_FACE_DUP];
	}

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
					<Carousel id={item.carouselId} centered={true} items={item.carouselItems.length < 4 && isMobile ? productFaceMerged : item.carouselItems} slideNumber='4' className={`tab-pane fade carousel slide carousel--loop ${item.isTabActive ? 'show active' : ''}`} additionalClasses='row'>

						{item.carouselItems.length > 4 && (
							<Fragment>
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
							</Fragment>
						)}
					</Carousel>
				))}
			</div>
        </section>
	);
};

export default RangeCarousel;
