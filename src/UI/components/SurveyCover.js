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
		<>
			{props.abTest && (
				<figure className="col-12 position-relative survey--variant mb-0">
					<picture className="d-block">
						<source media="(min-width:992px)"  type="image/jpeg" srcSet="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/quiz-lp-dt.jpg?v=1685608844" />
						<img className="w-100" loading='lazy' src="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/quiz-lp-mb_v2_828x705_crop_center.jpg?v=1686043128" alt="Tan Variants"/>
					</picture>
					<figcaption className="text-center text-lg-start">
						<h1 className="mb-1">Find your true colour match in 90 seconds!</h1>
						<p className="mb-g mb-lg-4 pe-lg-3">Get the perfect colour match for your skintone! No need to spend hours doing research on self-tanners. Just take our quiz, and we’ll do the rest.</p>
						<button className="btn btn-lg btn-primary rounded-lg px-3" onClick={() => props.startQuiz()}>Find my Match</button>
					</figcaption>
				</figure>
			)}
			{!props.abTest && (
				<>
					<div className="col-12 col-lg-4 pt-4 text-center text-lg-start zindex-1">
						<h1 className="pt-sm-2">{Translations[lang].heading}</h1>
						<p className="mb-0">{Translations[lang].subheading}</p>
						<button className="btn btn-primary text-white mt-4" onClick={() => props.startQuiz()}>{Translations[lang].btn.start}</button>
					</div>
					<div className="col-12 col-lg-5 offset-lg-1 survey-lp-image zindex-0">
						<picture>
							<source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02a8805f-afab-4d9d-31bb-c0c245264100/828x" />
							<source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b426a652-ee5d-4534-5039-4b10fe9a3200/828x" />
							<img className="w-100" loading='lazy' src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02a8805f-afab-4d9d-31bb-c0c245264100/828x" alt="Tan Variants"/>
						</picture>
					</div>
				</>
			)}
		</>
	);
};

export default SurveyCover;
