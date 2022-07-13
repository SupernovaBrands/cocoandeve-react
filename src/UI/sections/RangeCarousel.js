import Carousel from "../components/Carousel";
import carouselLoop from "../../modules/carousel-loop";
import RangeContext from "../../store/range-context";
import StoreContext from "../../store/store-context";

import { ReactComponent as ChevronPrev1 } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext1 } from '../../assets/chevron-next.svg';
import { Fragment, useContext } from "react";
import { useWindowSize } from "../../modules/Utils";
import { PRODUCTS_FACE, PRODUCTS_BODY, PRODUCTS_VALUE_SETS, PRODUCTS_HAIR_1, PRODUCTS_HAIR_2, PRODUCTS_HAIR_3 } from "../../modules/carousel-data";

const RangeCarousel = (props) => {

	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const rangeCtx = useContext(RangeContext);
	let carouselData = rangeCtx.carouselSection[props.range][activeStore];
	if (!carouselData) {
		carouselData = rangeCtx.carouselSection[props.range]['us'];
	}

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

	const CAROUSEL_TABS_TAN = [
		{
			carouselId: 'FeaturedFace',
			isTabActive: false,
			carouselItems: PRODUCTS_FACE.length < 4 && PRODUCTS_FACE.length > 1 && isMobile ? productFaceMerged : PRODUCTS_FACE,
			tabLabel: carouselData.face
		},
		{
			carouselId: 'FeaturedBody',
			isTabActive: true,
			carouselItems: PRODUCTS_BODY,
			tabLabel: carouselData.body
		},
		{
			carouselId: 'FeaturedValueSets',
			isTabActive: false,
			carouselItems: PRODUCTS_VALUE_SETS.length < 4 && isMobile ? productValuemerged : PRODUCTS_VALUE_SETS,
			tabLabel: carouselData.valuesets
		}
	];

	const CAROUSEL_TABS_HAIR = [
		{
			carouselId: 'FeaturedHair1',
			isTabActive: false,
			carouselItems: PRODUCTS_HAIR_1.length < 4 && PRODUCTS_HAIR_1.length > 1 && isMobile ? productFaceMerged : PRODUCTS_HAIR_1,
			tabLabel: carouselData.face
		},
		{
			carouselId: 'FeaturedHair2',
			isTabActive: true,
			carouselItems: PRODUCTS_HAIR_2,
			tabLabel: carouselData.body
		},
		{
			carouselId: 'FeaturedHair3',
			isTabActive: false,
			carouselItems: PRODUCTS_HAIR_3.length < 4 && isMobile ? productValuemerged : PRODUCTS_HAIR_3,
			tabLabel: carouselData.valuesets
		}
	];

	let CAROUSEL_TABS = CAROUSEL_TABS_TAN;

	if (props.range === 'hair') {
		CAROUSEL_TABS = CAROUSEL_TABS_HAIR;

		carouselLoop('FeaturedHair1');
		carouselLoop('FeaturedHair2');
		carouselLoop('FeaturedHair3');
	} else if (props.range === 'tan') {
		CAROUSEL_TABS = CAROUSEL_TABS_TAN;

		carouselLoop('FeaturedBody');
		carouselLoop('FeaturedFace');
		carouselLoop('FeaturedValueSets');
	}

	

	return (
		<section className='product-carousel py-2 py-lg-4 overflow-hidden'>
			<div className='container d-flex flex-column align-items-center px-g'>
				<h1 className='range__formula-title mb-2 text-center h2'>{carouselData.title}</h1>
				<ul className={`nav nav-tabs justify-content-center border-0  col-lg-3 col-8  px-0 pb-2 range__tab`}>
					{carouselData.carouselTabs.map((item, idx) => (
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

						{item.carouselItems.length < 4 && item.carouselItems.length > 1 && width < 768 && (
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
