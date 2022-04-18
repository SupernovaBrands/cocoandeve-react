const checkLazyImages = () => {
	const removeShimmer = (img) => {
		// eslint-disable-next-line no-param-reassign
        console.log('remove shimmer')
		img.onload = null;
		const parent = img.closest('.bg-shimmer');
		parent.classList.add('bg-shimmer--loaded');
		setTimeout(() => {
			parent.classList.remove('bg-shimmer', 'bg-shimmer--loaded');
		}, 400);
	};

	document.querySelectorAll('.bg-shimmer img').forEach((img) => {
        console.log('bg shimmer load', img)
		if (img.complete) {
			removeShimmer(img);
		} else {
			// eslint-disable-next-line no-param-reassign
			img.onload = () => {
				removeShimmer(img);
			};
		}
	});
};

export default checkLazyImages
