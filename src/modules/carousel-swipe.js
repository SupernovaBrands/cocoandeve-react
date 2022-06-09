import { Carousel } from 'bootstrap';

const carouselSwipe = (carouselId) => {
    const carouselSwipe = document.getElementById(carouselId);

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
        return evt.touches || evt.originalEvent.touches;
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        // const carousel = Carousel.getInstance(carouselSwipe);
        const carousel = new Carousel(carouselSwipe);
        console.log('carousel obj', carousel);

        const xUp = evt.touches[0].clientX;
        console.log('xUp', xUp);
        const yUp = evt.touches[0].clientY;
        console.log('yUp', yUp);

        const xDiff = xDown - xUp;
        console.log('xDiff', xDiff);
        const yDiff = yDown - yUp;
        console.log('yDiff', yDiff);
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
};

export default carouselSwipe;
