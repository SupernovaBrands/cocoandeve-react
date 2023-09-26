import { useState } from "react";

const RESULTS = [
	{
		percentage: '86%',
		info: 'that the routine removed more makeup',
        className: 'col-lg-3',
	},
	{
		percentage: '90%',
		info: 'their skin felt more moisturised',
        className: 'col-lg-3',
	},
    {
		percentage: '83%',
		info: 'their skin looked more radiant',
        className: 'col-lg-3',
	},
    {
		percentage: '86%',
		info: 'the routine didn’t leave a greasy film',
        className: 'col-lg-3',
	},
];

const ResultCard = (props) => {
	return (
		<div className={`col-6 ${props.data.className} position-relative mb-1 mb-lg-3`}>
            <div className="skincare__result-card h-100">
                <p className="skincare__banner-text-title fw-bold d-lg-block mb-1">{props.data.percentage}</p>
                <p className="skincare__banner-text-desc mb-g mb-lg-2 p-01">{props.data.info}</p>
            </div>
		</div>
	);
};

const SkinResults = () => {
	return (
		<section className="youth-revive__section px-g container skincare__results">
            <div className="row">
			    <p className="youth-revive__banner-text-reverse-title fw-bold d-lg-block mb-3">Results after double cleansing*</p>
                {RESULTS.map((a, index) => (
					<ResultCard key={index} data={a} />
				))}
                <p className="skincare__banner-text-desc mb-g mb-lg-2 px-g">*Based on a consumer assessment after the usage of the Seed Oil Cleanser & Fruit Enzyme Cleanser together, conducted by 30 women over a period of 1 week.</p>
            </div>
		</section>
	);
}

export default SkinResults;
