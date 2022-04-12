const carouselLoopCentered = (carouselId) => {
    setTimeout(() => {
        const carouselLoop = document.getElementById(carouselId);
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

            if (e.target.querySelector('.carousel--centered')) {
                // add 1 element for negative offset of carousel inner
                idx += 1;
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

            if (e.target.querySelector('.carousel--centered')) {
                // special case for carousel centered we would need plus 1, as we have negative offset x on carousel-inner
                if (e.direction === 'right') {
                    const list = [...document.querySelectorAll(`#${carouselId} .carousel-item`)];
                    const active = document.querySelector(`#${carouselId} .carousel-item.active`);
                    const activeIndex = list.indexOf(active);

                    const selectorNthChild = `.carousel-item:nth-child(${activeIndex + 1 + parseInt(itemsPerSlide)})`;
                    if (e.target.querySelector(selectorNthChild)) {
                        // e.target.querySelector(selectorNthChild).classList.add('carousel-item--last');
                    }
                }
            }
        });
    }, 500);
}

export default carouselLoopCentered;
