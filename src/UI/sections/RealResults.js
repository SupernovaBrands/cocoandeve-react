import { REAL_RESULT_DATA } from "../../modules/real-result-carousel";
import RealResultCard from "../components/RealResultCard";
import carouselLoop from "../../modules/carousel-loop";
const RealResults = (props) => {
	const carouselData = REAL_RESULT_DATA[props.range];
	carouselLoop('realResults');
	return (
		<section className="pt-4 pb-4 bg-yellow-light position-relative overflow-hidden">
			<div className="container p-0 p-md-1" id="real-results">
				<h2 className="pb-2 mb-0 text-center h1">Real Results</h2>
				<div id="realResults" className="carousel slide carousel--loop carousel--swipe carousel--real-result pointer-event" data-bs-interval="1000000" data-bs-ride="carousel" data-bs-slide-number="4">
					<div className="carousel--centered">
						<div className="carousel-inner row flex-nowrap mx-0 w-100">
							{carouselData.map((result, i) =>
								<RealResultCard key={i} range={props.range} result={result} active={i === 1}/>
							)}
						</div>
					</div>
					<button data-bs-target="#realResults" className="carousel-control carousel-control-prev carousel-control--background floating-out-start justify-content-start text-primary" data-bs-slide="prev">
						<span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
						<span className="visually-hidden text-body">Previous</span>
					</button>
					<button data-bs-target="#realResults" className="carousel-control carousel-control-next carousel-control--background floating-out-end justify-content-end text-primary" data-bs-slide="next">
						<span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
						<span className="visually-hidden text-body">Next</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default RealResults;
