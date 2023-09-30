const parent = document.querySelector('#mode__changer--btn');

function switchTheme() {
	if (document.body.classList.contains('light')) {
		// while night is on
		document.documentElement.setAttribute('data-theme', 'dark');
		document.body.classList.remove('light');
		parent.children['mode--info'].innerHTML = `switch to day mode`;
		localStorage.setItem('theme', 'dark');
	} else {
		// while light is on
		document.documentElement.setAttribute('data-theme', 'light');
		document.body.classList.add('light');
		parent.children['mode--info'].innerHTML = `switch to night mode`;
		localStorage.setItem('theme', 'light');
	}
}

function dayNightStateSaved(currentThemeState) {
	document.documentElement.setAttribute('data-theme', currentThemeState);
	if (currentThemeState === 'dark') {
		parent.children['mode--info'].innerHTML = `switch to day mode`;
		document.body.classList.remove('light');
	}
}

export const initDayNightModeView = function (handler) {
	parent.addEventListener('click', (ev) => {
		if (ev.target.id === 'mode--info' || ev.target.id === 'mode--icon') {
			switchTheme();
		}
	});

	// for local storage checking
	if (handler) {
		dayNightStateSaved(handler);
	}
};
