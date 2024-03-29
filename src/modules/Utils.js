import { useLayoutEffect, useState } from "react";

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

export const amazonURL = (store) => {
	const dataUrl = {
		uk: 'https://www.amazon.co.uk/stores/page/A7C92DA3-5472-435D-9632-A9EB68430271?maas=maas_adg_A6BE8AC8D75514A57C35C8B8B5DF6A18_afap_abs&ref_=aa_maas&tag=maas',
		ca: 'https://www.amazon.ca/stores/page/3844BA74-C84A-4E73-933D-51DF86BB4633?maas=maas_adg_D04053177A5C336BA9320F98079DE65F_afap_abs&ref_=aa_maas&tag=maas',
	};
	return typeof dataUrl[store] !== 'undefined' ? dataUrl[store] : 'https://www.cocoandeve.com';
};

export const amazonURLCategory = (category, store) => {
	const dataUrl = {
		hair: {
			uk: 'https://www.amazon.co.uk/stores/page/73EB383A-0D5B-4815-AD1A-1D53AF91257C?maas=maas_adg_1CBD9151722FD1E6D80695A466C703B9_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=85bad842-4cce-4d44-9e6e-0773f987681d',
			ca: 'https://www.amazon.ca/stores/page/E88EB243-042C-45EA-8E5A-85C24F0B5518?maas=maas_adg_066FB6ADCB3D34C5C84D10435FE7CA06_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=98f9d60a-8849-48d2-8a2e-608236613cc2',
			us: 'https://www.amazon.com/stores/page/F6A4C595-BE43-47EC-AF52-69B7F928338D?maas=maas_adg_9C15237B24D7AA8571C9D57088E962C4_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=1e61f264-8ffd-412c-8c15-e0d6b4fb1db1',
		},
		tan: {
			uk: 'https://www.amazon.co.uk/stores/page/F5EB63AC-511F-4AD6-9AF8-213CF9A29981?maas=maas_adg_15E1185328F695836719AC829FA0F953_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=85bad842-4cce-4d44-9e6e-0773f987681d',
			ca: 'https://www.amazon.ca/stores/page/62DA8CF6-1C4E-471F-BEFD-E9966CE8A77A?maas=maas_adg_83004979AD11957D98C8A4B4BCF99A7B_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=98f9d60a-8849-48d2-8a2e-608236613cc2',
			us: 'https://www.amazon.com/stores/page/625620AE-A1A6-4BA7-B96A-D5B30A3CC86A?maas=maas_adg_11BC824AB7F015141459718164D63A86_afap_abs&ref_=aa_maas&tag=maas&ingress=0&visitId=1e61f264-8ffd-412c-8c15-e0d6b4fb1db1',
		}
	};
	return typeof dataUrl[category][store] !== 'undefined' ? dataUrl[category][store] : 'https://www.cocoandeve.com';
};
