import { Fragment, useContext } from "react";
import RangeContext from "../../store/range-context";
import StoreContext from "../../store/store-context";
import ReviewStar from "./ReviewStar";

const ProductCard = (props) => {
	let ProductUrl = 'https://www.cocoandeve.com/products/';
	let params = (new URL(document.location)).searchParams;
	let activeStore = params.get('utm_store') || 'us';

	const storeCtx = useContext(StoreContext);
	storeCtx.storeChange(activeStore);
	storeCtx.rangeChange('hair');

	const productCardCtx = useContext(RangeContext);
	const productContent = productCardCtx.products[props.handle][activeStore];



	if (activeStore !== 'us') {
		ProductUrl = ProductUrl.replace(ProductUrl.split('//')[1].split('.')[0], activeStore);
	}

	const productTitle = productContent && productContent.title ? productContent.title : productCardCtx.products[props.handle]['us'].title;
	let carouselData = productCardCtx.carouselSection['tan'][activeStore];
	if (!carouselData) {
		carouselData = productCardCtx.carouselSection['tan']['us'];
	}

	return (
		<Fragment>
			{props.useBadge && (
				<span className="badge badge--square bg-white position-absolute fw-normal font-size-sm rounded-1 text-body">{props.textBadge}</span>
			)}

			<a href={`${props.externalUrl ? props.externalUrl : ProductUrl.concat(props.handle)}`} className='d-block'>
				<span className='visually-hidden-focusable'>{productTitle}</span>
				<picture>
					<source type="image/webp" srcSet={props.comImg} />
					<source type="image/jpeg" srcSet={props.img} />
					<img className='w-100' src={props.img} alt={productTitle} loading="lazy" />
				</picture>
			</a>
			<div className='pt-2 pb-0 position-relative flex-grow-1 d-flex flex-column px-2'>
				{props.rating && (
					<div className='d-flex justify-content-center'>
						<ReviewStar score={props.rating} />
						<a className='ms-25 product-card__review' href={`${props.externalUrl ? props.externalUrl : ProductUrl.concat(props.handle)}#write-a-review`}>({props.totalReviews})</a>
					</div>
				)}
				<p className="product-card__title flex-grow-1 d-flex flex-column justify-content-center h4 h-100 mb-0 fw-normal">
    				<a href={`${props.externalUrl ? props.externalUrl : ProductUrl.concat(props.handle)}`} className="text-dark text-decoration-none">
						{productTitle}
						<span className='visually-hidden-focusable'>{productTitle}</span>
					</a>
  				</p>
				{!props.externalUrl && (
					<p className="text-center">
						{productContent.comparePrice !== null && (
							<span className="text-linethrough h4">{productContent.comparePrice}</span>
						)}
						<span className="h4 m-1 text-primary fw-bold">{productContent.price}</span>
					</p>
				)}
				{props.externalUrl && (
					<p className="text-center">
						{props.externalCompare !== null && (
							<span className="text-linethrough h4">{props.externalCompare}</span>
						)}
						<span className="h4 m-1 text-primary fw-bold">{props.externalPrice}</span>
					</p>
				)}
				<a href={`${props.externalUrl ? props.externalUrl : ProductUrl.concat(props.handle)}`} className="btn btn-lg btn-primary text-white btn-block px-0">
					{props.ctaText ? props.ctaText : carouselData.learnMore}
					<span className='visually-hidden-focusable'>{`${carouselData.learnMore} - ${productTitle}`}</span>
				</a>
			</div>
		</Fragment>
	)
};

export default ProductCard;
