import { ReactComponent as StarFive } from '../../assets/star-five.svg';

const RealResultCard = (props) => {
	const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || "";
	return (
		<div className={`carousel-item col-9 col-lg-3 result-card ${props.active ? 'active' : ''}`}>
			<picture class="embed-responsive">
				<source srcSet={props.result.srcSet} media="(min-width: 992px)" />
				<img alt={`${props.range} Review - ${props.result.name}`} class="w-100" src={props.result.img} />
			</picture>

			<div class="px-2 pb-2 pt-0 bg-white">
				<p class="d-flex justify-content-between align-items-center mb-0">
					<StarFive />
					<strong class={`badge mb-1 mt-1 ${props.range === 'hair' ? 'badge-secondary' : 'badge-purple'}`}>{capitalize(props.range)}</strong>
				</p>
				<p><strong>Product:&nbsp;</strong><a href={props.result.productHandle}>{props.result.productTitle}</a></p>
				<p>{props.result.content}</p>
				<p class="text-underline font-weight-bold">{props.result.name}</p>
			</div>
		</div>
	);
};

export default RealResultCard;
