const carouselLoop = (carouselId) => {
    setTimeout(() => {
        const carouselLoop = document.getElementById(carouselId)
        carouselLoop.addEventListener('slide.bs.carousel', function (e) {
            const $e = e.relatedTarget;
            const carouselInner = e.target.querySelector('.carousel-inner');
            const itemsEl = carouselInner.querySelectorAll('.carousel-item');
            let idx = [].indexOf.call(itemsEl, $e);
            let itemsPerSlide = e.target.dataset.bsSlideNumber ? e.target.dataset.bsSlideNumber : 3;
			const totalItems = itemsEl.length;
            if (768 > window.innerWidth) {
				itemsPerSlide = 2;
			}
            if (idx >= totalItems - (itemsPerSlide - 1)) {
                const it = itemsPerSlide - (totalItems - idx);

                for (let i = 0; i < it; i += 1) {
                    if (e.direction === 'left') {
                        carouselInner.appendChild(carouselInner.querySelectorAll('.carousel-item')[i]);
                    } else {
                        carouselInner.appendChild(carouselInner.querySelectorAll('.carousel-item')[0]);
                    }
                }
            }
        })
    }, 500);
}

export default carouselLoop;