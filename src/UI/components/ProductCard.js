import { Fragment } from "react";
import { ReactComponent as StarFull } from '../../assets/star-full.svg';

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
					<img className='w-100' src={props.img} alt={props.title} />
				</picture>
			</a>
			<div className='pt-2 pb-0 position-relative flex-grow-1 d-flex flex-column px-3'>
				<div className='d-flex justify-content-center'>
					<StarFull className="svg text-primary ml-25" />
					<span className='font-size-sm ms-25 me-1'>{props.rating}/5.0</span>
					<a className='font-size-sm' href={`${props.url}#write-a-review`}>{props.totalReviews} Reviews</a>
				</div>
				<p className="product-card__title flex-grow-1 d-flex flex-column justify-content-center h4 h-100 mb-0 fw-normal">
    				<a href={props.url} className="text-dark text-decoration-none">
						{props.title}
						<span className='visually-hidden-focusable'>{props.title}</span>
					</a>
  				</p>
				<p className="text-center">
      				<span className="text-linethrough h4 m-1 font-weight-normal">{props.price}</span>
					{props.isCrossedPrice && (
						<span className="text-primary h4">{props.crossedPrice}</span>
					)}
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
