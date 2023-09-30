const pipParent = document.querySelector('#pr03');
export const videoEl = document.querySelector('#video');
export const screenShareBtn = document.querySelector('#screen-share-start');
export const pipStartBtn = document.querySelector('#pip-start');

function reqPiP() {
	videoEl.requestPictureInPicture();
}

function availButt() {
	if (screenShareBtn.classList.contains('enable')) {
		pipStartBtn.disabled = false;
	} else {
		pipStartBtn.disabled = true;
	}
}

// pipStartBtn.addEventListener('click', function () {
// 	reqPiP();
// });

const initPipView = function () {
	pipParent.addEventListener('click', (ev) => {
		if (ev.target.id === 'screen-share-start') {
			// handler();
			// console.log(mediaStream);
			// videoEl.srcObject = mediaStream;
			// videoEl.onloadedMetadata = () => {
			// 	videoEl.play();
			// };
			screenShareBtn.classList.toggle('enable');
			availButt();
		}
		if (ev.target.id === 'pip-start') {
			reqPiP();
		}
	});

	// screenShareBtn.addEventListener('click', () => {
	// 	// model.screenShareStream();
	// 	handler();
	// 	screenShareBtn.classList.toggle('enable');
	// 	availButt();
	// });
};
