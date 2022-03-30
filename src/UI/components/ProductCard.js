
const ProductCard = (props) => {
	return (
		<div className={`carousel-item col-9 col-md-3 product-card text-center ${props.classname}`}>
			{/* <span class="badge badge--square bg-white position-absolute font-weight-normal font-size-sm">new</span> */}
			<a href='/products' className='d-block'>
				<picture className=''>
					<img className='w-100' src='//cdn.shopify.com/s/files/1/0243/8817/3888/products/BaliBronzingBundle_1140x_4bfff989-782d-4e53-bbd2-4f820c79cca7_300x.jpg?v=1648446902' alt='Sunny Honey Bali Bronzing Bundle' />
				</picture>
			</a>
			<div className='pt-2 pb-0 position-relative flex-grow-1 d-flex flex-column px-3'>
				<div className='d-flex justify-content-center align-items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="svg text-primary ml-25"><path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z"></path></svg>
					<span className='font-size-sm ms-25 me-1'>4.8/5.0</span>
					<a className='font-size-sm' href='/'>199 Reviews</a>
				</div>
				<p class="product-card__title flex-grow-1 d-flex flex-column justify-content-center h4 h-100 mb-0 fw-normal">
    				<a href="/products/sunny-honey-bali-bronzing-self-tan-mousse" class="text-dark text-decoration-none">{props.title}</a>
  				</p>
				<p class="text-center">
      				<span class="text-linethrough h4 m-1 font-weight-normal">$96.80</span>
    				<span class="text-primary h4">$59.90</span>
  				</p>
				<button type="button" class="btn btn-lg btn-primary text-white btn-block px-0">Learn More</button>
			</div>
		</div>
	)
};

export default ProductCard;
