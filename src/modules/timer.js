/* global tSettings */
import $ from 'jquery';

const getUtcTime = (date) => {
	const now = new Date(date);
	const utcTimestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
		now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
	return utcTimestamp - (8 * 60 * 60 * 1000);
};

const nowUtcTime = () => {
	const now = new Date();
	const utcTimestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
		now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
	return utcTimestamp - (8 * 60 * 60 * 1000);
};

const startCount = (endAt, activeLang) => {
	const end = new Date(getUtcTime(endAt));
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	let timer;

	const showRemaining = () => {
		const now = new Date();

		const distance = end - now;
		if (distance < 0) {
			clearInterval(timer);
			$('.announcement-bar__timer').addClass('d-none');
			return;
		}
		const days = Math.floor(distance / day);
		const hours = Math.floor((distance % day) / hour);
		const minutes = Math.floor((distance % hour) / minute);
		const seconds = Math.floor((distance % minute) / second);

		let params = (new URL(document.location)).searchParams;
		let lang = params.get("utm_store") || 'us';
		
		if (lang === 'fr') {
			if (days > 0) {
				$('#timerDays').html(`${days} <span>${days > 1 ? 'jours' : 'jours'}</span>`);
			} else {
				$('#timerDays').addClass('d-none');
			}
			$('#timerHrs').html(`${String(hours).padStart(2, '0')} <span>${hours > 1 ? 'heures' : 'heures'}</span>`);
			$('#timerMin').html(`${String(minutes).padStart(2, '0')} <span>minutes</span>`);
			$('#timerSec').html(`${String(seconds).padStart(2, '0')} <span>secondes</span>`);
		} else if (lang === 'de') {
			if (days > 0) {
				$('#timerDays').html(`${days} <span>${days > 1 ? 'Tagen' : 'Tagen'}</span>`);
			} else {
				$('#timerDays').addClass('d-none');
			}
			$('#timerHrs').html(`${String(hours).padStart(2, '0')} <span>${hours > 1 ? 'Stunden' : 'Stunden'}</span>`);
			$('#timerMin').html(`${String(minutes).padStart(2, '0')} <span>Minuten</span>`);
			$('#timerSec').html(`${String(seconds).padStart(2, '0')} <span>Sekunden</span>`);
		} else {
			if (days > 0) {
				$('#timerDays').html(`${days} <span>${days > 1 ? 'Days' : 'Day'}</span>`);
			} else {
				$('#timerDays').addClass('d-none');
			}
			$('#timerHrs').html(`${String(hours).padStart(2, '0')} <span>${hours > 1 ? 'Hours' : 'Hour'}</span>`);
			$('#timerMin').html(`${String(minutes).padStart(2, '0')} <span>Minutes</span>`);
			$('#timerSec').html(`${String(seconds).padStart(2, '0')} <span>Seconds</span>`);
		}
		
		$('.announcement-bar__timer').find('ul').removeClass('d-none').addClass('d-inline');
	};

	timer = setInterval(showRemaining, 1000);
};

const initTimer = (activeLang) => {
    $(document).ready(function () {
        console.log('ready');
        // start & end from settings
        const startAt = getUtcTime('2022-10-29T17:02:00.000Z');
        const endAt = getUtcTime('2022-12-03T17:00:00.000Z');
        const now = nowUtcTime();
        if (now > startAt && now < endAt) {
            $('.announcement-bar__timer').removeClass('d-none').addClass('d-block');
            startCount('2022-12-03T17:00:00.000Z', activeLang);
        } else {
            console.log('expired');
            $('.announcement-bar__timer').addClass('d-none');
        }
    });
}

export default initTimer;