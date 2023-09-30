const animateNavParent = document.querySelector('#pr07');
const overlay = document.querySelector('#overlay');
const navIconContainer = document.querySelector('#nav__menu__icon--container');
const navListContainer = document.querySelector('#pr07 nav');
const navListItems = document.querySelectorAll('nav ul li');

function navOpening() {
	navIconContainer.classList.add('nav--open');
	overlay.classList.remove('overlay--hide');
	navListContainer.classList.remove('nav--hide');

	navListItems.forEach((el, idx) => {
		el.style.animation = `nav__items--slideIn 0.4s linear ${(idx + 1) / 4}s both`;

		el.addEventListener('click', () => {
			navClosing();
		});
	});
}

function navClosing() {
	navIconContainer.classList.remove('nav--open');
	overlay.classList.add('overlay--hide');
	navListContainer.classList.remove('nav--hide');

	// navListItems slideOut animation
	for (let i = navListItems.length - 1, j = 1; i >= 0; i -= 1, j++) {
		navListItems[i].style.animation = `nav__items--slideOut 0.4s linear ${
			j / 4
		}s both`;
	}
}

export const initAnimateNavView = function () {
	animateNavParent.addEventListener('click', (ev) => {
		if (ev.target.closest('#nav__menu__icon--container')) {
			//  navIcon open/close
			navIconContainer.classList.toggle('nav--open');

			if (navIconContainer.classList.contains('nav--open')) {
				navOpening();
			} else {
				navClosing();
			}
		}

		if (ev.target.id === 'overlay') {
			navClosing();
		}

		document.addEventListener('keydown', (ev) => {
			if (ev.key === 'Escape') {
				navClosing();
			}
		});
	});
};
