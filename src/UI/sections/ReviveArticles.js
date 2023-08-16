const ARTICLES = [
	{
		title: 'Step Into The Future with Our NEW Honey-Infused Haircare Range',
		url: 'https://www.cocoandeve.com/blogs/news/discover-youth-revive',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a4dd32e-dfb5-4ad9-cef5-2a5e5db9e400/public',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a4dd32e-dfb5-4ad9-cef5-2a5e5db9e400/1140x',
		className: 'col-lg-4',
	},
	{
		title: '6 Hair-Reviving Benefits of Honey',
		url: 'https://www.cocoandeve.com/blogs/news/honey-for-hair',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e6cb5f0d-952b-47ba-5de2-97a488d02500/public',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e6cb5f0d-952b-47ba-5de2-97a488d02500/1140x',
		className: 'col-lg-4',
	},
	{
		title: 'Are You Sabotaging Your Haircare Routine by Neglecting Your Scalp?',
		url: 'https://www.cocoandeve.com/blogs/news/healthy-scalp',
		src: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4db6c866-a174-4006-fa68-41305fb3da00/public',
		srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bcd7d7ac-48bb-4575-36da-62a04131ef00/1140x',
		className: 'col-lg-4',
	},
];

const ArticleCard = (props) => {
	return (
		<figure className={`col-12 ${props.data.className} position-relative mb-2 mb-lg-3`}>
			<picture className="d-block">
				<source srcSet={`${props.data.srcSet}`} media="(min-width: 992px)" width="370" height="382" />
				<img className="w-100" src={props.data.src} alt={props.data.title} width="345" height="382" />
			</picture>
			<figcaption>
				<a className="d-block text-white text-decoration-none youth-revive__articles-title" href={props.data.url}>{props.data.title}</a>
				<a href={props.data.url} className="mt-g btn bg-white rounded-pill font-size-base">Read more</a>
			</figcaption>
		</figure>
	);
};

const ReviveArticle = () => {
	return (
		<section className="youth-revive__section px-g container youth-revive__articles">
			<div className="row">
				{ARTICLES.map((a, index) => (
					<ArticleCard key={index} data={a} />
				))}
			</div>
		</section>
	);
};

export default ReviveArticle;
