import { ReactComponent as StarFive } from '../../assets/star-five.svg';

const RealResultCard = (props) => {
	return (
		<div className={`carousel-item col-9 col-lg-3 result-card ${props.active ? 'active' : ''}`}>
			<picture class="embed-responsive">
				<source srcset="//cdn.shopify.com/s/files/1/0225/4641/5693/files/cassielansdell_3b6bbc3b-d305-4a2b-90df-eaa5ead85efa_530x.jpg" media="(min-width: 992px)" width="265" height="189" />
				<img alt="Body Review - @cassielandsell" class="w-100" src="//cdn.shopify.com/s/files/1/0225/4641/5693/files/cassielansdell_3b6bbc3b-d305-4a2b-90df-eaa5ead85efa_592x.jpg" loading="lazy" width="296" height="211" />
			</picture>

			<div class="px-2 pb-2 pt-0 bg-white">
				<p class="d-flex justify-content-between align-items-center mb-0">
					<StarFive />
					<strong class="badge badge-blue   mb-1 mt-1">Body</strong>
				</p>
				<p><strong>Product:&nbsp;</strong><a href="/products/bali-bod-bundle-body-scrub-mask-cream" aria-label="4 - Review @cassielandsell for Product:&nbsp;Bali Bod Bundle" title="Go To Product Page - Bali Bod Bundle">Bali Bod Bundle</a></p>
				<p>I struggle with cellulite so wanted to try this 3 step process Glow Figure range! After using the products my skin was a lot softer, smoother and had more glow! They have an amazing lychee sent and contain unique patented cellushape techno formula which gives a reduction in cellulite. What more could a girl ask for! 😛💕🙌🏼</p>
				<p class="text-underline font-weight-bold">@cassielandsell</p>
			</div>
		</div>
	);
};

export default RealResultCard;
