const AnnouncementBar = () => {
	return (
		<div id="announcementBar" className="announcement-bar bg-primary carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
			<div className="carousel-inner container">
				<div className="carousel-item text-center text-white active">
					<a href="https://www.amazon.com/stores/page/F6A4C595-BE43-47EC-AF52-69B7F928338D?maas=maas_adg_9C15237B24D7AA8571C9D57088E962C4_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=1e61f264-8ffd-412c-8c15-e0d6b4fb1db1" className="d-flex align-items-center justify-content-center font-size-sm">Black Friday Cyber Monday: Up to 30% off. 20-29 Nov</a>
				</div>
			</div>
		</div>
	);
};

export default AnnouncementBar;
