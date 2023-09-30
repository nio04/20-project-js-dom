import * as model from './model';
import * as quoteView from './views/quoteView';
import * as unsplashView from './views/unsplashView';
import * as pipView from './views/pipView';
import * as dayNightModeView from './views/dayNightModeView';
import * as animatedTemplateview from './views/animatedTemplateView';
import * as animateNavView from './views/animateNavView';

const quoteParent = document.querySelector('#pr01');
const infiniteScrollParent = document.querySelector('#pr02');
const pipParent = document.querySelector('#pr03');
const darkLightParent = document.querySelector('#pr05');
const animateNavParent = document.querySelector('#pr07');

// 1) QUOTE GENERATOR ZONE
if (quoteParent) {
	const quoteOperation = async function () {
		try {
			await model.getQuoteData();
			quoteView.showSpinner();
			quoteView.renderQuote(model.state.quote.content, model.state.quote.author);
			quoteView.removeSpinner();
		} catch (error) {
			quoteView.renderError();
		}
	};
	const nextBtn = document.querySelector('#next');
	nextBtn.addEventListener('click', () => {
		quoteOperation();
	});
	quoteOperation();
}

// 2) INFINITE SCROLL ZONE
if (infiniteScrollParent) {
	const unsplashOperation = async function () {
		await model.getunSplashImg();
		unsplashView.renderImg(model.state.unsplashImg);
	};

	const target = document.querySelector('#infinite-target');
	const observer = new IntersectionObserver(
		([entries]) => {
			if (entries.isIntersecting) {
				unsplashOperation();
			}
		},
		{
			threshold: 0,
			rootMargin: '250px',
		}
	);
	observer.observe(target);
}

// 3) PiP ZONE
if (pipParent) {
	async function screenShareStream() {
		try {
			const mediaStream = await navigator.mediaDevices.getDisplayMedia();
			pipView.videoEl.srcObject = mediaStream;
			pipView.videoEl.onloadedMetadata = () => {
				pipView.videoEl.play();
			};
		} catch (error) {
			console.log(error);
		}
	}

	function reqPiP() {
		pipView.videoEl.requestPictureInPicture();
	}

	function availButt() {
		if (pipView.screenShareBtn.classList.contains('enable')) {
			pipView.pipStartBtn.disabled = false;
		} else {
			pipView.pipStartBtn.disabled = true;
		}
	}

	pipView.screenShareBtn.addEventListener('click', () => {
		screenShareStream();
		pipView.screenShareBtn.classList.toggle('enable');
		availButt();
	});

	pipView.pipStartBtn.addEventListener('click', function () {
		reqPiP();
	});
}

// 5) day night mode
if (darkLightParent) {
	dayNightModeView.initDayNightModeView(model.dayNightState());
}

// 7) animate navigation
if (animateNavParent) {
	animateNavView.initAnimateNavView();
}
