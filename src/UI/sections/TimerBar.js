/* global tSettings */

import { useEffect, useState } from "react";

const TimerBar = (props) => {

	const START = '2022-12-19T11:00:00.000Z';
	const END = '2023-10-12T00:00:00.000Z';

	const [showTimer, setShowTimer] = useState(false);
	const [stateDays, setStateDays] = useState(0);
	const [stateMinutes, setStateMinutes] = useState(0);
	const [stateSeconds, setStateSeconds] = useState(0);
	const [stateHours, setStateHours] = useState(0);

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

	const startCount = (endAt) => {
		const end = new Date(endAt);
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
				setStateDays(0);
				setStateHours(0);
				setStateMinutes(0);
				setStateSeconds(0);
				setShowTimer(false);
			}
			const days = Math.floor(distance / day);
			const hours = Math.floor((distance % day) / hour);
			const minutes = Math.floor((distance % hour) / minute);
			const seconds = Math.floor((distance % minute) / second);
			setStateDays(days);
			setStateHours(hours);
			setStateMinutes(minutes);
			setStateSeconds(seconds);
		};

		timer = setInterval(showRemaining, 1000);
	};

	const starTimer = (now, startAt, endAt) => {
		if (now > startAt && now < endAt) {
			startCount(endAt);
			setShowTimer(true);
		} else {
			setShowTimer(false);
		}
	};

	useEffect(() => {
		const startAt = getUtcTime(START);
		const endAt = getUtcTime(END);
		const now = nowUtcTime();
		starTimer(now, startAt, endAt);
	}, []);

	return showTimer && (
		<div class="announcement-bar announcement-bar__timer w-100 py-1 bg-primary-light">
			<a href={props.url} class="text-decoration-none">
				<div class="container text-center text-dark d-flex align-items-center justify-content-between justify-content-lg-center">
					<span class="announcement-bar__timer__title d-block d-lg-inline me-lg-4 mb-0 fw-normal text-start">Prime Day ends in:</span>
					<ul class="list-inline mb-0 fw-bold">
						{stateDays > 0 && (
							<li class="list-inline-item position-relative me-g mb-0 fw-normal">
								<p className="mb-0">{`${stateDays} `}</p>
								<span>{stateDays > 1 ? 'Days' : 'Day'}</span>
							</li>
						)}
						<li class="list-inline-item position-relative me-g mb-0 fw-normal">
							<p className="mb-0">{`${String(stateHours).padStart(2, '0')}`}</p>
							<span>{stateHours > 1 ? 'Hours' : 'Hour'}</span>
						</li>
						<li class="list-inline-item position-relative me-g mb-0 fw-normal">
							<p className="mb-0">{`${String(stateMinutes).padStart(2, '0')}`}</p>
							<span>Minutes</span>
						</li>
						<li class="list-inline-item position-relative mb-0 fw-normal">
							<p className="mb-0">{`${String(stateSeconds).padStart(2, '0')}`}</p>
							<span>Seconds</span>
						</li>
					</ul>
				</div>
			</a>
		</div>
	);
};

export default TimerBar;
