import { quoteAPI, unsplashAPI } from './config';

export const state = {
	quote: {},
	unsplashImg: [],
};

// quote generate START
export async function getQuoteData() {
	try {
		const res = await fetch(quoteAPI);
		const data = await res.json();

		const currData = data[0];

		const { quote } = state;
		quote.content = currData.content;
		quote.author = currData.author;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

// unsplashImg getter
export async function getunSplashImg() {
	try {
		const res = await fetch(unsplashAPI);
		const data = await res.json();

		const { unsplashImg } = state;
		data.forEach((_, idx) => {
			unsplashImg.push(data[idx].download_url.toString());
		});
	} catch (error) {
		// console.log(error);
		throw error;
	}
}

// PIP zone
// export async function screenShareStream(videoEl) {
// 	try {
// 		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
// 		// return (mediaStream = await navigator.mediaDevices.getDisplayMedia());
// 		videoEl.srcObject = mediaStream;
// 		videoEl.onloadedMetadata = () => {
// 			videoEl.play();
// 		};
// 	} catch (error) {
// 		throw error;
// 	}
// }

// day/night mode start
export function dayNightState() {
	return localStorage.getItem('theme');
}
