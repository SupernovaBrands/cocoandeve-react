const ReviveRoutine = () => {
	return (
		<section className="youth-revive__section px-g container youth-revive__routine">
			<div className="row align-items-center">
				<div className="col-12 col-lg-5">
					<h2 className="youth-revive__routine-title mb-g mb-lg-2">Tangled up in choices? We have you covered.</h2>
					<p className="youth-revive__routine-sub mb-4 m-lg-0">Like a Virgin vs Youth Revive</p>
				</div>
				<div className="col-12 col-lg-7">
					<div className="row">
						<figure className="col-6">
							<a href={`https://www.cocoandeve.com/products/super-nourishing-coconut-fig-hair-masque`}>
								<picture className="position-relative d-block">
									<img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1bf377f4-270e-44cd-35ba-93142d8aa100/1140x" className="w-100" />
									<p className="text-white youth-revive__routine-text mb-0">Like A Virgin</p>
								</picture>
							</a>
							<figcaption className="mt-1 mt-lg-2">
								<div className="youth-revive__routine-key">
									<strong className="youth-revive__routine-hiw d-block">Key function: </strong>
									<p>Hydrating</p>
								</div>
								<strong className="youth-revive__routine-hiw d-block">How it works:</strong>
								<ul>
									<li>Treats dry & damaged hair</li>
									<li>Improves hair texture and shine</li>
									<li>Tames frizz and flyaways</li>
								</ul>
							</figcaption>
						</figure>
						<figure className="col-6">
							<a href={`https://www.cocoandeve.com/products/honey-bliss-hair-set`}>
								<picture className="position-relative d-block">
									<img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/75e25e00-9f25-473c-d2f3-2ac9a2028800/1140x" className="w-100" />
									<p className="text-white youth-revive__routine-text mb-0">Youth Revive</p>
								</picture>
							</a>
							<figcaption className="mt-1 mt-lg-2">
								<div className="youth-revive__routine-key">
									<strong className="youth-revive__routine-hiw d-block">Key function: </strong>
									<p>Nourishing + Pro Youth<br />+ Scalp care</p>
								</div>
								<strong className="youth-revive__routine-hiw d-block">How it works:</strong>
								<ul>
									<li>Strengthens weak, fragile, ageing hair</li>
									<li>Increase volume and shine</li>
									<li>Smoothes and softens hair</li>
									<li>Rebalances and hydrates the scalp</li>
								</ul>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviveRoutine;
