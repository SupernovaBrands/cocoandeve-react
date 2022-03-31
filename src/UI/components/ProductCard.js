import { Fragment } from "react";

const ProductCard = (props) => {
	return (
		<Fragment>
			{props.useBadge && (
				<span className="badge badge--square bg-white position-absolute fw-normal font-size-sm rounded-1 text-body">{props.textBadge}</span>
			)}

			<a href={props.url} className='d-block'>
				<picture>
					<img className='w-100' src={props.img} alt={props.title} />
				</picture>
			</a>
			<div className='pt-2 pb-0 position-relative flex-grow-1 d-flex flex-column px-3'>
				<div className='d-flex justify-content-center align-items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg text-primary ml-25"><path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z"></path></svg>
					<span className='font-size-sm ms-25 me-1'>{props.rating}/5.0</span>
					<a className='font-size-sm' href='/'>{props.totalReviews} Reviews</a>
				</div>
				<p className="product-card__title flex-grow-1 d-flex flex-column justify-content-center h4 h-100 mb-0 fw-normal">
    				<a href={props.url} className="text-dark text-decoration-none">{props.title}</a>
  				</p>
				<p className="text-center">
      				<span className="text-linethrough h4 m-1 font-weight-normal">{props.price}</span>
					{props.isCrossedPrice && (
						<span className="text-primary h4">{props.crossedPrice}</span>
					)}
  				</p>
				<button type="button" className="btn btn-lg btn-primary text-white btn-block px-0">Learn More</button>
			</div>
		</Fragment>
	)
};

export default ProductCard;
