import { useLayoutEffect, useState } from "react";
import CryptoJS from 'crypto-js';
import $ from 'jquery';

const secrets = {
	key: '2ab3fc92f6f75b39f96d2964d5ba92da',
	vector: 'I8zyA4lVhMCaJ5Kg',
};

export const encryptParam = (content) => {
	const encryptedMessage = {};
	const code = CryptoJS.AES.encrypt(content, CryptoJS.enc.Utf8.parse(secrets.key), {
		iv: CryptoJS.enc.Utf8.parse(secrets.vector),
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
	encryptedMessage.data = code.ciphertext.toString(CryptoJS.enc.Base64);
	return encryptedMessage.data;
};

export const validateEmail = function (t) {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase());
};

export const Base64 = {
	decode(str) {
		return decodeURIComponent(
			atob(str)
				.split('')
				.map(function (c) {
					return `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`;
				})
				.join(''),
		);
	},
	encode(str) {
		return btoa(
			encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
				return String.fromCharCode(`0x${p1}`);
			}),
		);
	},
};

export const setCookie = (name, value, days = 1, path = '/', domain) => {
	let expires = '';
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = `; expires=${date.toUTCString()}`;
	}
	document.cookie = `${name}=${value || ''}${expires}; path=${path}${(domain) ? `;domain=${domain}` : ''}`;
};

export const getCookie = (name) => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i += 1) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		  }
		window.addEventListener('resize', updateSize);
		updateSize();
		  return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

export const toTitleCase = (str) => {
	return str.replace(
	  /\w\S*/g,
	  function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  }
	);
};

export const waitFor = (condition, cb, errorCb = null, count = 0, counterLimit = 50) => {
	// only try for 10s
	if (typeof condition === 'function' && typeof cb === 'function' && count < counterLimit) {
		setTimeout(() => {
			if (condition()) {
				cb();
			} else {
				waitFor(condition, cb, errorCb, count + 1, counterLimit);
			}
		}, 200);
	} else if (typeof errorCb === 'function') {
		errorCb();
	}
};

export const isABTest = (testID) => new Promise((resolve) => {
	waitFor(() => window.google_optimize && window.google_optimize.get, () => {
		const testValue = window.google_optimize.get(testID);
		if (!testValue) {
			resolve({ test: false });
		} else {
			resolve({ test: true, value: `${testValue}` });
		}
	});
});

export const decodeHtml = (html) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

export const subscribeBluecoreRegistration = (
	email,
	phone,
	country = '',
	regSource = 'registration',
) => {
	const date = new Date();
	const tse = date.getTime();
	const content = `{email:'${email}',time:${tse}}`;
	const signature = encryptParam(content);

	const data = {
		email,
		country,
		brand: 'cocoandeve',
		domain: window.location.hostname,
		phone: phone || '',
		reg_source: regSource,
		signature,
	};

	return $.post(`https://api.cocoandeve.com/bluecore/registrations.json`, data);
};

export const submitsToSmsBump = (phone, formId, countryLetterCode = null) => {
	const country = countryLetterCode;
	const phoneData = JSON.stringify({
		country,
		phone,
		email: '',
		form_id: formId,
	});
	return $.ajax({
		url: 'https://api.smsbump.com/v2/formsPublic/subscribe',
		method: 'POST',
		cache: false,
		data: phoneData,
		contentType: 'application/json; charset=utf-8',
		headers: { 'X-SMSBump-Platform': 'shopify' },
		success(res) {
			if (res.message) {
				console.log(res.message);
			} else {
				console.log('smsbumperror');
			}
		},
	});
};

export const validatePhone = (phone) => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(phone);