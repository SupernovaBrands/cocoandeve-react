import bootstrap from "../vendor/bootstrap.bundle";
const carouselSwipe = (carouselId) => {
    setTimeout(() => {
        const carouselSwipe = document.getElementById(carouselId);
        const carousel = new bootstrap.Carousel(carouselSwipe);

        let xDown = null;
		let yDown = null;

        function getTouches(evt) {
			return evt.touches || evt.originalEvent.touches;
		}

        function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
            console.log('xDOwn', xDown)
            console.log('yDOwn', yDown)
		}

        function handleTouchMove(evt) {
			if (!xDown || !yDown) {
				return;
			}

            const xUp = evt.touches[0].clientX;
			const yUp = evt.touches[0].clientY;

			const xDiff = xDown - xUp;
			const yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {

                if (xDiff > 0) {
                    carousel.next();
                } else {
                    carousel.prev();
                }
            } else {
                xDown = null;
				yDown = null;
            }
        }

        carouselSwipe.addEventListener('touchstart', handleTouchStart, false);
		carouselSwipe.addEventListener('touchmove', handleTouchMove, false);
    }, 500);
};

export default carouselSwipe;