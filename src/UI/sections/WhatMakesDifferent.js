const WhatMakesDifferent = () => {
	const style1 = {
		'margin-bottom': '23px'
	};
	const style2 = {
		'margin-bottom': '26px'
	};
	const style3 = {
		'margin-bottom': '30px'
	};
	const style4 = {
		'margin-bottom': '30px'
	};
	return (
		<div class="container py-4 product-banner--tan">
			<div class="row text-center">
				<h2 class="h1 col-12 mb-0">What makes us different?</h2>
				<div class="col-6 col-lg-3 mt-3 d-flex flex-column align-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 82 79.8" style={style1} class="d-block"><path d="M1.7 36.9h15.6c.8 0 1.5-.6 1.6-1.3.6-2.9 1.7-5.5 3.4-7.8.4-.7.4-1.5-.2-2.1l-11-10.8c-.7-.7-1.9-.7-2.5.1C4 20.6 1 27.5 0 35.1c-.1 1 .7 1.8 1.7 1.8zM10 18l9.3 9c-1.3 2.1-2.3 4.4-3 6.9H3.2c1-5.8 3.3-11.2 6.8-15.9zM22.3 52c-1.6-2.4-2.8-5-3.4-7.8-.2-.8-.9-1.3-1.6-1.3H1.7c-.9 0-1.8.8-1.6 1.8.9 7.4 4 14.3 8.5 20 .3.4.8.6 1.3.6.4 0 .9-.2 1.2-.5l11-10.8c.6-.5.6-1.3.2-2zm-12.2 9.6c-3.5-4.6-5.8-10-6.8-15.8h12.9c.6 2.5 1.6 4.8 3 6.9l-9.1 8.9zM36.6 61.3c-2.9-.6-5.6-1.7-8-3.3-.7-.4-1.6-.4-2.2.2L15.4 69c-.7.7-.7 1.8.1 2.4 5.8 4.5 12.9 7.4 20.6 8.3h.1c.9 0 1.7-.7 1.7-1.6V62.9c.1-.7-.5-1.4-1.3-1.6zm-1.7 15.3c-5.9-.9-11.5-3.2-16.3-6.5l9.2-9c2.2 1.3 4.6 2.3 7.1 2.9v12.6zM59.7 27.8c1.6 2.4 2.8 5 3.4 7.8.2.8.9 1.3 1.6 1.3h15.6c.9 0 1.8-.8 1.6-1.8-.9-7.6-4-14.5-8.5-20.1-.6-.8-1.8-.8-2.5-.1l-11 10.7c-.6.7-.6 1.5-.2 2.2zM72 18.1c3.5 4.6 5.8 10.1 6.8 15.8h-13c-.6-2.5-1.6-4.8-3-6.9l9.2-8.9zM55.6 58.3c-.6-.6-1.5-.6-2.2-.2-2.4 1.6-5.1 2.7-8 3.3-.8.2-1.4.8-1.4 1.6v15.2c0 .9.7 1.6 1.5 1.6h.3c7.8-.9 14.8-3.9 20.6-8.3.8-.6.9-1.8.1-2.4L55.6 58.3zM47 76.6V64.1c2.6-.6 5-1.6 7.2-3l9.1 8.9c-4.8 3.4-10.4 5.7-16.3 6.6zM26.4 21.5c.3.3.7.5 1.1.5.3 0 .7-.1 1-.3 2.4-1.6 5.1-2.7 8-3.3.8-.2 1.4-.8 1.4-1.6V1.6c0-1-.9-1.8-1.8-1.6-7.8.9-14.8 3.9-20.6 8.3-.8.6-.9 1.8-.1 2.4l11 10.8zM35 3.2v12.4c-2.6.6-5 1.6-7.2 3l-9.1-8.8C23.5 6.4 29 4.2 35 3.2zM80.3 42.8H64.6c-.8 0-1.5.6-1.6 1.3-.6 2.9-1.7 5.5-3.4 7.8-.4.7-.4 1.5.2 2.1l11 10.8c.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6 4.6-5.6 7.6-12.5 8.5-20.1.3-.9-.5-1.8-1.5-1.8zm-8.4 18.9l-9.2-9c1.3-2.1 2.3-4.5 3-6.9h13c-1 5.8-3.3 11.2-6.8 15.9zM45.4 18.4c2.9.6 5.6 1.7 8 3.3.3.2.7.3 1 .3.4 0 .8-.1 1.1-.5l11-10.8c.7-.7.7-1.9-.1-2.4C60.8 3.9 53.7.9 45.9 0c-.9-.1-1.8.7-1.8 1.6v15.2c-.1.8.5 1.5 1.3 1.6zm1.7-15.2c5.9 1 11.5 3.2 16.3 6.6l-9.2 8.9c-2.2-1.3-4.6-2.3-7.1-2.9V3.2zM51.7 44.1c0-4.4-5.8-14-7.7-17-.6-.9-1.7-1.5-2.8-1.5s-2.2.6-2.8 1.5c-1.7 2.9-7.7 12.6-7.7 17 0 5.5 4.7 10.1 10.4 10.1s10.6-4.6 10.6-10.1zm-10.4 7.1c-2 0-3.9-.8-5.3-2.1s-2.2-3.1-2.2-5c0-.6.2-2.5 2.6-7.1 1.5-3 3.3-6 4.3-7.8.1-.2.2-.4.3-.5.1-.1.2-.1.3-.1.1 0 .2.1.3.1 1.2 1.9 2.9 4.7 4.4 7.7 2.5 5 2.8 7 2.8 7.7 0 1.9-.8 3.6-2.2 5-1.4 1.3-3.3 2.1-5.3 2.1z"></path><path d="M40.3 38.3c-.2-.1-.4-.2-.6-.2-.4 0-.8.2-1 .5-.2.2-3.2 5-.6 8.8.3.3.6.5 1 .5.3 0 .4-.1.7-.2.5-.3.7-1.1.3-1.6-1.7-2.5.6-6.2.7-6.3.2-.4 0-1.2-.5-1.5z"></path></svg>
					Colour guide technology so your tan is even and works with your skin tone.
				</div>
				<div class="col-6 col-lg-3 mt-3 d-flex flex-column align-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="78.897" height="77" style={style2} class="d-block"><path d="M71.439 76.176l-5.075-10.451a4.908 4.908 0 01-1.374.221H46.381a4.94 4.94 0 01-1.238-.166l-5.71 10.465a1.581 1.581 0 01-2 .585 1.333 1.333 0 01-.7-1.815l5.952-10.88c-.076-.1-.242-.179-.242-.29l-4.743-7.7a1.326 1.326 0 01.559-1.894 1.6 1.6 0 012.07.512l4.743 7.7a1.538 1.538 0 001.314.705h18.589a1.54 1.54 0 001.314-.705l9.364-15.207a1.281 1.281 0 000-1.382l-9.364-15.208a1.54 1.54 0 00-1.314-.705h-6.767a1.388 1.388 0 110-2.764h6.782a4.885 4.885 0 011.631.331l9.5-12.179a1.571 1.571 0 011.374-.575 1.51 1.51 0 011.231.8 1.285 1.285 0 01-.144 1.377l-9.65 12.36 9.38 15.262a3.841 3.841 0 010 4.078l-9.365 15.208-.12.141L74.2 75.057a1.339 1.339 0 01-.77 1.825 1.624 1.624 0 01-.611.119 1.524 1.524 0 01-1.38-.825zM5.656 71.837L1.14 59.457a1.276 1.276 0 01.181-1.2l8.8-12.078c-.059-.1-.211-.165-.211-.261L.583 30.788a3.822 3.822 0 010-4.058l3.311-5.379a1.59 1.59 0 012.062-.509 1.317 1.317 0 01.557 1.884l-3.3 5.351a1.273 1.273 0 000 1.376l9.331 15.132a1.532 1.532 0 001.309.7H32.4a1.533 1.533 0 001.309-.7l9.331-15.132a1.273 1.273 0 000-1.376l-9.331-15.131a1.533 1.533 0 00-1.309-.7h-8.383a1.445 1.445 0 01-1.506-1.376 1.445 1.445 0 011.506-1.376H32.4a4.6 4.6 0 013.929 2.1L45.66 26.73a3.876 3.876 0 01.347.77 4.967 4.967 0 01.963-.123h5.268a1.381 1.381 0 110 2.751h-5.269a1.546 1.546 0 00-1.309.646l-9.331 15.132a1.273 1.273 0 000 1.376l2.333 3.783a1.279 1.279 0 010 1.38 1.584 1.584 0 01-2.616 0l-2.333-3.783a3.876 3.876 0 01-.347-.77 4.895 4.895 0 01-.963.123H13.858a4.866 4.866 0 01-1.325-.193l-8.308 11.4 4.29 11.748a1.355 1.355 0 01-.956 1.741 1.632 1.632 0 01-.474.07 1.5 1.5 0 01-1.429-.944zM44.176 42a1.343 1.343 0 01-.614-1.719l4.391-6.907a1.487 1.487 0 011.259-.678H58a1.384 1.384 0 110 2.763h-7.954l-3.982 6.2a1.5 1.5 0 01-1.151.526 1.527 1.527 0 01-.737-.185zm-33.16-17.929a1.344 1.344 0 01-.615-1.719l4.392-6.907a1.482 1.482 0 011.259-.677h8.783a1.384 1.384 0 110 2.763h-7.948l-3.982 6.2a1.5 1.5 0 01-1.151.526 1.526 1.526 0 01-.738-.186zm-5.062-4.72a1.294 1.294 0 010-1.386l3.678-6.089c.06-.1.21-.166.21-.249L2.646 2.28A1.3 1.3 0 012.4.847 1.494 1.494 0 013.679 0a1.533 1.533 0 011.39.674l7.192 9.28a4.851 4.851 0 011.317-.194h4.366a1.441 1.441 0 011.495 1.381 1.441 1.441 0 01-1.495 1.38h-4.367a1.517 1.517 0 00-1.3.732l-3.723 6.09a1.565 1.565 0 01-2.6 0z"></path></svg>
					Worlds first 100% natural DHA self tan body treatment with full skincare benefits.
				</div>
				<div class="col-6 col-lg-3 mt-3 d-flex flex-column align-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="78" height="73" style={style3} class="d-block"><path d="M51.591 73c-12.306-.166-20.234-.97-24.235-2.457a2.438 2.438 0 01-2.4 2.106H19.8a2.373 2.373 0 01-2.4-2.34V61.3L1.08 45.508A3.561 3.561 0 010 42.935a3.384 3.384 0 011.08-2.574l29.4-28.671.478-.466 2.512-2.449a2.507 2.507 0 013.479 0l1.92 1.872 2.879-2.808a3.772 3.772 0 015.039 0l1.2 1.17 6.359-6.2-.841-.819a1.143 1.143 0 01-.36-.819 1.143 1.143 0 01.36-.819 1.181 1.181 0 011.68 0l12.491 12.172 1.6 1.564.428.418a.928.928 0 01.36 1.053l-.6 2.691a1.166 1.166 0 01-1.2.936h-.24a1.143 1.143 0 01-.766-.482 1.223 1.223 0 01-.194-.922l.6-2.106-6.115-5.966-6.359 6.2 1.2 1.17a3.163 3.163 0 011.08 2.457 3.342 3.342 0 01-1.08 2.456L53.511 24.8l1.8 2.106a2.222 2.222 0 010 3.275l-21 20.473c.318-.019.631-.028.929-.028a14.919 14.919 0 015.31.964c.111.015.338.059.684.127a63.6 63.6 0 0011.756 1.317 32.256 32.256 0 003.278-.157 5.454 5.454 0 011.147-.125 4.84 4.84 0 013.418 1.4 5.361 5.361 0 011.553 3.4l9.959-4.445c.12-.117.12-.117.24-.117a3.6 3.6 0 011.19-.162 4.715 4.715 0 012.409.629 4.005 4.005 0 011.679 2.457 4.5 4.5 0 01-.225 2.852 5.934 5.934 0 01-3.374 3.114c-4.839 2.686-8.25 4.768-10.991 6.441a60.023 60.023 0 01-6.36 3.593A11.739 11.739 0 0151.831 73zM27.356 55.218V67.97c3.1 1.57 12.156 2.576 24.235 2.69h.305c2.989 0 4.863-1.138 9.871-4.177 2.624-1.593 6.217-3.774 11.3-6.589a.117.117 0 01.12-.117 4.031 4.031 0 002.174-1.794 2.384 2.384 0 00.231-1.29v-.076c-.124-.6-.253-.827-.6-1.053a2.169 2.169 0 00-1.105-.253c-.128 0-.247.006-.352.011-.085 0-.158.008-.222.008L61.79 60.6c-1.148 1.74-3.5 2.105-5.279 2.105-3.495.113-7.9.574-8.638 1.053a1.389 1.389 0 01-.7.2 1.129 1.129 0 01-.98-.548 1.244 1.244 0 01-.169-.952 1.1 1.1 0 01.529-.686c1.4-.943 6.61-1.227 9.113-1.363l.725-.041c1.822 0 2.993-.433 3.479-1.287a2.8 2.8 0 00-.221-2.663 2.5 2.5 0 00-2.143-1.277 2.7 2.7 0 00-.636.079 17.788 17.788 0 01-3.245.213 61.44 61.44 0 01-13.673-1.617h-.12a11.589 11.589 0 00-4.341-.806 17.693 17.693 0 00-8.135 2.208zM19.8 70.192v.117h5.16V53.347H19.8zM2.759 42a1.049 1.049 0 00-.36.819 1.245 1.245 0 00.36.819L17.4 58.026v-4.679a2.373 2.373 0 012.4-2.34 13.4 13.4 0 001.392.066c.535 0 1.057-.022 1.517-.043h.058c.47-.021.913-.041 1.333-.041 1.559 0 2.689.282 3.138 1.659.192-.08.387-.165.594-.255a19.554 19.554 0 012.406-.915l23.4-23.046-2.766-2.812L35.48 10.613l-.315-.307-.011-.011-5.279 5.147 9.839 9.593a3.2 3.2 0 011.078 2.342 3.512 3.512 0 01-1.078 2.571C32.636 36.624 28.463 40.8 25.7 43.556c-4.293 4.292-4.644 4.643-6.266 4.643-1.582 0-2.2-.629-4.8-3.278-1.524-1.553-3.826-3.9-7.44-7.251zm6-5.966l9.718 9.475a1.1 1.1 0 00.748.349c.846 0 2.056-1.232 5.288-4.525 2.73-2.781 6.855-6.984 13.4-13.137a1.112 1.112 0 000-1.638L28.2 17.08zM43.432 9.476l-2.879 2.808.959.935 10.2 9.944 2.879-2.807a1.112 1.112 0 000-1.638l-9.478-9.242a1.181 1.181 0 00-1.68 0zm6.239 1.17l3.72 3.626 6.359-6.2-3.719-3.626zm17 38.177c0-.824-.349-1.176-1.047-1.882A4.591 4.591 0 0164 43.412a4.806 4.806 0 011.628-3.529c.7-.707 1.047-1.059 1.047-1.883s-.349-1.176-1.047-1.882A4.593 4.593 0 0164 32.588a4.8 4.8 0 011.628-3.529c.7-.707 1.047-1.059 1.047-1.883a1.163 1.163 0 112.326 0 4.809 4.809 0 01-1.628 3.53c-.7.706-1.047 1.058-1.047 1.882s.349 1.176 1.047 1.883A4.591 4.591 0 0169 38a4.809 4.809 0 01-1.628 3.53c-.7.706-1.047 1.058-1.047 1.882s.349 1.176 1.047 1.883A4.591 4.591 0 0169 48.823a1.163 1.163 0 11-2.326 0z"></path></svg>
					Developed with a green-grey base for a natural looking, golden glow with no orangey tones.
				</div>
				<div class="col-6 col-lg-3 mt-3 d-flex flex-column align-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="82.574" height="73" style={style4} class="d-block"><path d="M40.838 72.817c-.358.011-.687.016-1 .016A77.816 77.816 0 0128.076 71.7a22.759 22.759 0 01-.852-.133 32.883 32.883 0 01-9.832-3.353 13.324 13.324 0 01-1.633-.967C9.9 63.412 6.825 56.583 4.111 50.558v-.005L3.9 50.1c-.424-.937-.823-1.822-1.236-2.692a11.168 11.168 0 00-1.273-1.953c-.865-1.142-1.848-2.436-1.16-4.087A8.728 8.728 0 014.8 37.283a1.527 1.527 0 01.482-.076 1.509 1.509 0 01.694.167l14.16 7.332c1.013-7.345 6.184-14.017 10.746-19.9l.065-.085c.845-1.09 1.642-2.12 2.409-3.148a13.511 13.511 0 001.365-2.386v-.008c.724-1.5 1.472-3.047 3.5-3.41a5.861 5.861 0 011.058-.086 10.782 10.782 0 013.082.489 22.3 22.3 0 011.929-10.1 1.39 1.39 0 011.277-.754 1.51 1.51 0 01.518.09 1.293 1.293 0 01.654.531c2.993-2.558 7.768-5.657 13.5-5.9A49.727 49.727 0 0162.149 0a29.873 29.873 0 0110.922 1.819 17.147 17.147 0 016.152 4.009 12.565 12.565 0 013.336 5.917 1.13 1.13 0 01-.373 1.02 1.477 1.477 0 01-1 .37c-.047 0-.094 0-.142-.006h-.013a40.6 40.6 0 00-3.445-.144 18.239 18.239 0 00-6.606.91 33.56 33.56 0 00-1.888.9l-.1.05a18.563 18.563 0 01-7.484 2.411c-.342.02-.687.03-1.025.03a22.223 22.223 0 01-9.028-2.074 32.062 32.062 0 01-6.033-3.557 22.231 22.231 0 00-.284 4.647 10.94 10.94 0 013.48-.617 6.075 6.075 0 011.021.078h.038l.034.011a.251.251 0 00.04.013 4.3 4.3 0 01.7.212l.054.022.055.022.077.03c.034.013.069.025.1.041a.2.2 0 01.033.023.15.15 0 00.032.023c2.134.961 5.234 3.46 8.492 6.155l1.13.931c9.367 7.611 16 13.789 16 24.022C76.434 62.9 67.009 73 52.422 73h-8.471a26.323 26.323 0 01-3.113-.183zm-.728-2.555c.248.038.544.084.849.119 3.479-.1 4.841-.791 5.343-1.194a19.479 19.479 0 00.844-3.5 21.818 21.818 0 01-7.036 4.575zm16.878-45.495c5.146 6.629 10.978 14.144 10.978 22.5a29.412 29.412 0 01-3.26 14.133 21.975 21.975 0 01-3.87 5.188 21.105 21.105 0 01-5.18 3.748 19.458 19.458 0 0013.158-7.219c3.185-4.051 4.869-9.532 4.869-15.852 0-8.517-4.661-13.741-15.109-22.23l-1.149-.945a166.248 166.248 0 00-2.555-2.085c.608.805 1.282 1.683 2.118 2.762zm-9.388 4.34a8.716 8.716 0 015.09 1.741 15.584 15.584 0 014.078 4.49 25.165 25.165 0 013.691 12.847c0 5.155-1.18 9.119-3.506 11.779a11.075 11.075 0 01-6.685 3.614 30.715 30.715 0 01-1.424 6.5A19.169 19.169 0 0060.809 62.5c2.878-3.98 4.4-9.249 4.4-15.239 0-7.6-5.574-14.779-10.491-21.117v-.005l-.327-.421c-.755-.976-1.467-1.894-2.152-2.813a15.672 15.672 0 01-1.591-2.77 4.477 4.477 0 00-1.254-1.912l-.041-.014-.021-.007c-.049-.016-.105-.035-.154-.046a.241.241 0 00-.041-.01 2.976 2.976 0 00-.519-.039 7.008 7.008 0 00-3.74 1.1.192.192 0 01-.053.03.214.214 0 00-.045.023 1.332 1.332 0 01-.224.123 1.42 1.42 0 01-.262.087.337.337 0 00-.053.019.282.282 0 01-.068.022 1.593 1.593 0 01-.221.015.353.353 0 01-.082-.012.5.5 0 00-.064-.011h-.023a1.417 1.417 0 01-.311-.053.469.469 0 01-.1-.047.491.491 0 00-.056-.031l-.04-.019a1.213 1.213 0 01-.229-.129.052.052 0 00-.017-.009.083.083 0 01-.015-.008 6.919 6.919 0 00-3.713-1.1 2.861 2.861 0 00-.519.041c-.564.1-.882.654-1.525 1.987v.008a15.858 15.858 0 01-1.6 2.768c-.817 1.094-1.711 2.246-2.5 3.263-4.624 5.968-9.864 12.731-10.4 19.887l4.671 2.419v-.1-.194c0-8.825 5.567-19.084 12.745-19.084a3.917 3.917 0 012.855 1.498 3.529 3.529 0 01-.048 3.632l-.441.916c-1.192 2.465-1.686 3.486-.761 5.435a11.941 11.941 0 011.439 3.988 11.094 11.094 0 01-1.464 7.784 3.281 3.281 0 00-.133 3.479l3.737 1.934.086-.179.11-.226c1.112-2.244 1.62-3.268.577-5.008a11.1 11.1 0 01-1.463-7.792 11.874 11.874 0 011.44-3.983c.93-1.939.443-2.95-.733-5.395l-.456-.958a3.522 3.522 0 01-.047-3.628 3.911 3.911 0 012.724-1.49zM2.812 42.215c-.184.44.075.842.865 1.881l.013.018a13.137 13.137 0 011.51 2.354c.476 1 .937 2.021 1.426 3.106l.036.08c2.579 5.726 5.5 12.216 10.767 15.664a10.989 10.989 0 001.339.8 30.051 30.051 0 008.974 3.068c.229.041.431.07.626.1h.018a23.547 23.547 0 003.068.208 20.928 20.928 0 003.758-.34 19.33 19.33 0 0011.875-7.275l.005-.006.014-.018.047-.058.035-.043.044-.055a1.7 1.7 0 00.078-.1l-.526-.272-1.451-.75-.008-.006L5.229 39.805a6.428 6.428 0 00-2.417 2.41zm45.805-.622a1.041 1.041 0 01-.067.121 9.348 9.348 0 00.021 9.5c1.665 2.778.715 4.694-.488 7.121-.056.112-.112.228-.169.345v.006c-.05.1-.1.209-.155.316l2.166 1.122.016.008a.421.421 0 01.086.066.6.6 0 00.058.048l.043.03a1.074 1.074 0 01.2.164.522.522 0 01.071.117c.013.023.024.047.038.069l.038.061a.73.73 0 01.09.172.019.019 0 00.005.009.061.061 0 01.005.011c.011.045.022.09.029.135a8.4 8.4 0 005.743-5.048 19.391 19.391 0 001.37-7.781 23.622 23.622 0 00-2.975-11.015 14.772 14.772 0 00-3.15-4.009 6.043 6.043 0 00-3.754-1.625 1.026 1.026 0 00-.6.314c-.164.254-.078.791.229 1.439l.449.942c.263.548.511 1.065.725 1.565a1.232 1.232 0 01.6-1.091l.869-.524a1.277 1.277 0 011.736.408 1.225 1.225 0 01-.415 1.7l-.869.524A1.289 1.289 0 0149.9 37a1.276 1.276 0 01-.964-.437 5.954 5.954 0 01-.319 5.031zM34.045 51.9l4.395 2.278a5.58 5.58 0 01.887-2.958 9.085 9.085 0 001.142-6.5 9.4 9.4 0 00-1.123-3 1.812 1.812 0 01-.068-.121c-1.42-2.939-.562-4.714.737-7.4l.432-.9c.31-.653.394-1.193.224-1.445a1.109 1.109 0 00-.634-.315c-2.373 0-4.873 2.036-6.86 5.578a23.768 23.768 0 00-3 11.078c0 .631.014 1.2.045 1.733l3.007 1.559a1.109 1.109 0 01-.315-.8 1.33 1.33 0 011.386-1.172h.04l1.058.035a1.453 1.453 0 011.014.446 1.127 1.127 0 01.31.815 1.3 1.3 0 01-1.373 1.171H35.3l-1.058-.035a.49.49 0 01-.117-.023.76.76 0 00-.081-.02zm13.549-41.831c2.479 1.784 7.451 4.779 12.892 4.779.284 0 .568-.008.846-.024a15.911 15.911 0 006.3-2.1l.019-.009a37.33 37.33 0 012.134-1.016 20.735 20.735 0 017.8-1.151c.55 0 1.123.011 1.753.032a11.7 11.7 0 00-4.5-5.1C71.7 3.457 67.446 2.429 62.2 2.429c-.594 0-1.21.013-1.829.04-4.567.193-8.556 2.675-11.1 4.723a39.232 39.232 0 017.17-.68c1.112 0 2.219.053 3.288.157a1.421 1.421 0 01.975.509 1.108 1.108 0 01.244.834A1.331 1.331 0 0159.576 9.1c-.048 0-.1 0-.146-.006a30.587 30.587 0 00-2.965-.14 37.2 37.2 0 00-8.871 1.115zM31.7 68a22.589 22.589 0 01-10.144-2.948c-5.207-2.7-9.857-7.648-11.055-11.757a5.834 5.834 0 01.528-5c.02-.029.047-.066.076-.1A3.548 3.548 0 0113.7 47a4.175 4.175 0 013.173 1.676l.585.69C19 51.2 19.584 51.89 21.519 52.129a14.332 14.332 0 014.032.826 12.015 12.015 0 015.937 4.377c.911 1.291 1.761 1.44 4.311 1.718l.347.04c.319.035.647.072.994.115a4.137 4.137 0 013.218 1.661 2.683 2.683 0 01.061 2.569 10.038 10.038 0 01-3.72 3.416A10.694 10.694 0 0131.7 68zM13.4 49.621l-.025.022a3.7 3.7 0 00-.174 3.031c1.015 3.475 5.212 7.878 9.762 10.239a19.563 19.563 0 008.695 2.6 7.113 7.113 0 006.23-3.14.423.423 0 00.01-.322c-.063-.1-.377-.292-1.151-.388-.452-.056-.868-.1-1.292-.148-.246-.027-.486-.053-.723-.081a1.006 1.006 0 01.115 1.37l-.489.642a1.553 1.553 0 01-1.237.56 1.683 1.683 0 01-.761-.175 1.061 1.061 0 01-.472-1.624l.488-.641a1.362 1.362 0 01.545-.419 5.894 5.894 0 01-3.8-2.494 9.625 9.625 0 00-4.893-3.49 10.929 10.929 0 00-2.854-.554c-.047 0-.1 0-.154-.01a9 9 0 01-1.795-.393 1.117 1.117 0 01.027 1.374l-.483.665a1.449 1.449 0 01-1.177.568 1.54 1.54 0 01-.756-.2 1.234 1.234 0 01-.615-.81 1.122 1.122 0 01.2-.9l.483-.665a1.427 1.427 0 011.148-.545 6.455 6.455 0 01-.842-.57 1.216 1.216 0 01-.744 1.176l-.84.387a1.519 1.519 0 01-.644.14 1.43 1.43 0 01-1.241-.667 1.109 1.109 0 01-.106-.9 1.284 1.284 0 01.7-.768l.84-.387a1.4 1.4 0 01.589-.121 2.01 2.01 0 01.25.016 40.208 40.208 0 01-.992-1.14l-.571-.674c-.4-.472-.714-.7-.945-.7a.437.437 0 00-.306.136zm15.54 14.191a1.061 1.061 0 01-.432-1.633l.5-.636a1.65 1.65 0 012-.354 1.062 1.062 0 01.432 1.634l-.5.635a1.553 1.553 0 01-1.217.542 1.679 1.679 0 01-.782-.188zm-3.395-2a1.061 1.061 0 01-.429-1.635l.5-.634a1.647 1.647 0 012-.352 1.06 1.06 0 01.429 1.634l-.5.635a1.548 1.548 0 01-1.215.54 1.686 1.686 0 01-.783-.189zm-3.392-1a1.062 1.062 0 01-.432-1.634l.5-.636a1.649 1.649 0 012-.353 1.061 1.061 0 01.432 1.633l-.5.636a1.553 1.553 0 01-1.216.542 1.679 1.679 0 01-.783-.188zM51 59a1.133 1.133 0 01-1.225-.976 1.116 1.116 0 011.2-1.011l.942-.013a1.17 1.17 0 011.247.976 1.117 1.117 0 01-1.2 1.011l-.947.013zm-31.1-1.19a1.061 1.061 0 01-.432-1.633l.5-.635a1.648 1.648 0 012-.353 1.061 1.061 0 01.433 1.634l-.5.636a1.552 1.552 0 01-1.227.541 1.68 1.68 0 01-.782-.189zM52.125 56a1.136 1.136 0 01-1.223-.949 1.1 1.1 0 011.179-1.022l.944-.029a1.139 1.139 0 011.269.949 1.1 1.1 0 01-1.178 1.022l-.945.029zm0-4a1.137 1.137 0 01-1.223-.949 1.1 1.1 0 011.179-1.022l.943-.029a1.138 1.138 0 011.27.949 1.1 1.1 0 01-1.179 1.022l-.943.029zm0-4a1.138 1.138 0 01-1.223-.949 1.1 1.1 0 011.177-1.023l.945-.028a1.154 1.154 0 011.27.947 1.1 1.1 0 01-1.177 1.024l-.944.029zm-17.2 0l-.944-.028a1.1 1.1 0 01-1.181-1.024A1.164 1.164 0 0134.074 46l.945.028a1.1 1.1 0 011.181 1.023 1.137 1.137 0 01-1.227.949zM50.9 43.053a1.1 1.1 0 011.176-1.022l.944-.03a1.146 1.146 0 011.272.946 1.1 1.1 0 01-1.176 1.022l-.943.03h-.049a1.137 1.137 0 01-1.224-.946zM36.055 44l-.943-.03a1.1 1.1 0 01-1.176-1.022A1.149 1.149 0 0135.207 42l.943.03a1.1 1.1 0 011.176 1.022A1.136 1.136 0 0136.1 44zm14.939-4a1.136 1.136 0 01-1.223-.949 1.105 1.105 0 011.179-1.022l.944-.029a1.146 1.146 0 011.269.949 1.1 1.1 0 01-1.179 1.022l-.943.029zm-13.805 0l-.944-.028a1.1 1.1 0 01-1.178-1.022 1.153 1.153 0 011.269-.95l.944.029a1.1 1.1 0 011.178 1.022 1.134 1.134 0 01-1.222.949zm-.653-3.182l-.868-.524a1.225 1.225 0 01-.414-1.7 1.275 1.275 0 011.736-.406l.868.524a1.224 1.224 0 01.414 1.7 1.267 1.267 0 01-1.077.59 1.283 1.283 0 01-.66-.185z"></path></svg>
					Tropical Balinese Mango and Guava Scent. (No biscuit or traditional fake tan smells here!)
				</div>
			</div>
		</div>
	);
};

export default WhatMakesDifferent;
