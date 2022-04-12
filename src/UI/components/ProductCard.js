import { Fragment } from "react";
import ReviewStar from "./ReviewStar";

const ProductCard = (props) => {
	return (
		<Fragment>
			{props.useBadge && (
				<span className="badge badge--square bg-white position-absolute fw-normal font-size-sm rounded-1 text-body">{props.textBadge}</span>
			)}

			<a href={props.url} className='d-block'>
				<span className='visually-hidden-focusable'>{props.title}</span>
				<picture>
					<source type="image/webp" srcSet={props.comImg} />
					<source type="image/jpeg" srcSet={props.img} />
					<img className='w-100' src={props.img} alt={props.title} loading="lazy" />
				</picture>
			</a>
			<div className='pt-2 pb-0 position-relative flex-grow-1 d-flex flex-column px-2'>
				<div className='d-flex justify-content-center'>
					<ReviewStar score={props.rating} />
					<a className='ms-25 product-card__review' href={`${props.url}#write-a-review`}>({props.totalReviews})</a>
				</div>
				<p className="product-card__title flex-grow-1 d-flex flex-column justify-content-center h4 h-100 mb-0 fw-normal">
    				<a href={props.url} className="text-dark text-decoration-none">
						{props.title}
						<span className='visually-hidden-focusable'>{props.title}</span>
					</a>
  				</p>
				<p className="text-center">
					{props.isCrossedPrice && (
						<span className="text-linethrough h4">{props.crossedPrice}</span>
					)}
      				<span className="h4 m-1 text-primary font-weight-normal">{props.price}</span>
  				</p>
				<a href={props.url} className="btn btn-lg btn-primary text-white btn-block px-0">
					Learn More
					<span className='visually-hidden-focusable'>{`Learn More - ${props.title}`}</span>
				</a>
			</div>
		</Fragment>
	)
};

export default ProductCard;
