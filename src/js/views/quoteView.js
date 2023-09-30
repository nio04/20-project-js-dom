const parentEl = document.querySelector('.quote-main--parent');
const quoteParent = document.querySelector('#quote-container');
const errorMessage = 'something weird happended! please contact admin';

export const showSpinner = () => {
	const markup = `
   	<div class="show-spinner">
  		<div class="loader"></div>
    </div>
  `;
	parentEl.insertAdjacentHTML('afterbegin', markup);
};

export const removeSpinner = function () {
	setTimeout(() => {
		document.querySelector('.show-spinner').remove();
	}, 1000);
};

const quoteGenMarkup = (quote, author) => {
	return `
			<p class="quote">${quote}</p>
      <p class="quote-author">${author}</p>
		`;
};

export const renderQuote = function (quote, author) {
	showSpinner();
	const markup = quoteGenMarkup(quote, author);
	quoteParent.innerHTML = markup;
	removeSpinner();
};

export const renderError = function (message = errorMessage) {
	const markup = `
		<section id="error-message--container">
     <p>📢📢📢${message}📢📢📢</p>
    </section>
	`;
	// errorParent.innerHTML = '';
	parentEl.insertAdjacentHTML('afterbegin', markup);
};
