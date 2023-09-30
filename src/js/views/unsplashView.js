const parentEl = document.querySelector('#img-container');

export const renderImg = function (input) {
	const markup = input
		.map((val) => {
			return `
			<img class="online-photos" src="${val} ">
			`;
		})
		.join('');

	parentEl.innerHTML += markup;
};
