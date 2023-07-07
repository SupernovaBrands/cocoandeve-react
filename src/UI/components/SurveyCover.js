import Translations from '../../modules/translations';
import { useSearchParams } from "react-router-dom";

const SurveyCover = (props) => {
	const [searchParams] = useSearchParams();
	let lang = 'en';
	const language = searchParams.get('lang');
    if (language && ['en','de','fr'].includes(language)) {
        lang = language;
    }
	return (
		<figure className="col-12 position-relative survey--variant mb-0">
			<picture className="d-block">
				<source media="(min-width:992px)"  type="image/jpeg" srcSet="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/quiz-lp-dt.jpg?v=1685608844" />
				<img className="w-100" loading='lazy' src="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/quiz-lp-mb_v2_828x705_crop_center.jpg?v=1686043128" alt="Tan Variants"/>
			</picture>
			<figcaption className="text-center text-lg-start">
				<h1 className="mb-1">{Translations[lang].heading}</h1>
				<p className="mb-g mb-lg-4 pe-lg-3">{Translations[lang].subheading}</p>
				<button className="btn btn-lg btn-primary rounded-lg px-3" onClick={() => props.startQuiz()}>{Translations[lang].btn.start}</button>
			</figcaption>
		</figure>
	);
};

export default SurveyCover;
