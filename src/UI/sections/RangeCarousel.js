import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import carouselLoop from "../../modules/carousel-loop";

import { ReactComponent as ChevronPrev1 } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext1 } from '../../assets/chevron-next.svg';
import { Fragment } from "react";
import { useWindowSize } from "../../modules/Utils";

const RangeCarousel = () => {

	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const PRODUCTS_FACE = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Bronzing Face Drops'
				img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8c2d8c7b-46d4-4303-9ae6-106d6e25d800/828x'
				comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a30deb4-1d70-4ad8-af43-15b446aaae00/828x'
				rating={4.8}
				totalReviews='735'
				handle='bronzing-self-tanner-drops' />
        }
	];

	if (['us', 'ca', 'au'].includes(activeStore)) {
		PRODUCTS_FACE.push({
			carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
			content: <ProductCard
				title='SPF & Glow Kit'
				img={`${process.env.PUBLIC_URL}/images/Featured_CExNakedSundaysBundle_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_CExNakedSundaysBundle_532x.webp`}
				rating={4.8}
				totalReviews='735'
				handle='spf-glow-kit' />
		});
	} else {
		PRODUCTS_FACE.push({
			carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
			content: <ProductCard
				title='Glowy Face Tan Set'
				img={`${process.env.PUBLIC_URL}/images/Featured_GlowyFaceTanSet_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_GlowyFaceTanSet_532x.webp`}
				rating={4.9}
				totalReviews='373'
				handle='glowy-face-tan-set' />
		});
	}

	const PRODUCTS_BODY = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_532x.webp`}
				rating={4.8}
				totalReviews='4336'
				handle='sunny-honey-bali-bronzing-self-tan-set' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bronzing Foam'
				img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFoam_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFoam_532x.webp`}
				rating={4.8}
				totalReviews='2021'
				handle='sunny-honey-bali-bronzing-self-tan-mousse' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_532x.webp`}
				rating={4.8}
				totalReviews='2021'
				handle='tanning-goddess' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Self Tan Travel Kit'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningTravelKit_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningTravelKit_532x.webp`}
				rating={4.8}
				totalReviews='96'
				handle='self-tan-travel-kit' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_532x.webp`}
				rating={4.8}
				totalReviews='4336'
				handle='sunny-honey-bali-bronzing-self-tan-set' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bronzing Foam'
				img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFoam_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFoam_532x.webp`}
				rating={4.8}
				totalReviews='2021'
				handle='sunny-honey-bali-bronzing-self-tan-mousse' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_532x.webp`}
				rating={4.8}
				totalReviews='2021'
				handle='tanning-goddess' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Self Tan Travel Kit'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningTravelKit_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningTravelKit_532x.webp`}
				rating={4.8}
				totalReviews='96'
				handle='self-tan-travel-kit' />
        }
	];

	const PRODUCTS_VALUE_SETS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Bali Bae Self Tan Set'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanBundlewithBackApplicator_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanBundlewithBackApplicator_532x.webp`}
				rating={4.8}
				totalReviews='4336'
				handle='bali-bae-self-tan-set' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Sunny Honey Bali Bronzing Bundle'
				img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_532x.webp`}
				rating={4.8}
				totalReviews='4336'
				handle='sunny-honey-bali-bronzing-self-tan-set' />
        },
		{
            carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
            content: <ProductCard
				title='Tanning Goddess Kit'
				img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_532x.jpg`}
				comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_532x.webp`}
				rating={4.8}
				totalReviews='2021'
				handle='tanning-goddess' />
        }
	];


	const [width] = useWindowSize();
	const isMobile = width < 768;
	let productFaceMerged = [];
	let productValuemerged = [];
	if (isMobile) {
		const PRODUCTS_FACE_DUP = [...PRODUCTS_FACE];
		productFaceMerged = [...PRODUCTS_FACE, ...PRODUCTS_FACE_DUP, ...PRODUCTS_FACE_DUP];

		const PRODUCTS_VALUE_DUP = [...PRODUCTS_VALUE_SETS];
		productValuemerged = [...PRODUCTS_VALUE_SETS, ...PRODUCTS_VALUE_DUP, ...PRODUCTS_VALUE_DUP];
	}

	const CAROUSEL_TABS = [
		{
			carouselId: 'FeaturedFace',
			isTabActive: false,
			carouselItems: PRODUCTS_FACE.length < 4 && isMobile ? productFaceMerged : PRODUCTS_FACE,
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
			carouselItems: PRODUCTS_VALUE_SETS.length < 4 && isMobile ? productValuemerged : PRODUCTS_VALUE_SETS,
			tabLabel: 'Value Sets'
		}
	];


	carouselLoop('FeaturedBody');
	carouselLoop('FeaturedFace');
	carouselLoop('FeaturedValueSets');

	return (
		<section className='product-carousel py-2 py-lg-4 overflow-hidden'>
			<div className='container d-flex flex-column align-items-center px-g'>
				<h2 className='range__formula-title mb-2 text-center'>Self-tanners for any occasion</h2>
				<ul className="nav nav-tabs justify-content-center border-0 col-8 col-lg-3 px-0 pb-2 range__tab">
					{CAROUSEL_TABS.map((item, idx) => (
						<li key={`navItem${idx}`} className="nav-item">
							<a className={`nav-link text-decoration-none h4 mb-0 fw-bold text-center ${item.isTabActive ? 'active' : ''}`}
								data-bs-toggle="tab" href={`#${item.carouselId}`}>
									<nobr>{item.tabLabel}</nobr>
							</a>
						</li>
					))}
				</ul>
			</div>
            <div className='tab-content container px-0 px-md-2 text-center'>
				{CAROUSEL_TABS.map((item, idx) => (
					<Carousel key={`RangeCarousel${idx}`} id={item.carouselId} centered={true} items={item.carouselItems} slideNumber='4' className={`tab-pane fade carousel slide carousel--loop ${item.isTabActive ? 'show active' : ''}`} additionalClasses='row'>

						{item.carouselItems.length > 4 && (
							<Fragment>
								<button className="carousel-control carousel-control-prev carousel-control--background floating-out-start justify-content-start text-primary" data-bs-target={`#${item.carouselId}`} data-bs-slide="prev">
									<span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true">
										<ChevronPrev1 className='svg' />
									</span>
									<span className='visually-hidden-focusable'>Prev</span>
								</button>
								<button className="carousel-control carousel-control-next carousel-control--background floating-out-end justify-content-end text-primary" data-bs-target={`#${item.carouselId}`} data-bs-slide="next">
									<span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true">
										<ChevronNext1 className='svg' />
									</span>
									<span className='visually-hidden-focusable'>Next</span>
								</button>
							</Fragment>
						)}

						{item.carouselItems.length < 4 && width < 768 && (
							<Fragment>
								<button className="carousel-control carousel-control-prev carousel-control--background floating-out-start justify-content-start text-primary" data-bs-target={`#${item.carouselId}`} data-bs-slide="prev">
									<span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true">
										<ChevronPrev1 className='svg' />
									</span>
									<span className='visually-hidden-focusable'>Prev</span>
								</button>
								<button className="carousel-control carousel-control-next carousel-control--background floating-out-end justify-content-end text-primary" data-bs-target={`#${item.carouselId}`} data-bs-slide="next">
									<span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true">
										<ChevronNext1 className='svg' />
									</span>
									<span className='visually-hidden-focusable'>Next</span>
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
