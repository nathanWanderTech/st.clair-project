const generateCurrentYearForFooter = () => {
	const thisYear = new Date().getFullYear();
	const footerEle = document.querySelector('#copyright');
	footerEle.innerHTML = `Copyright © ${thisYear} Digital Oasis`;
};

generateCurrentYearForFooter();

/* SLIDER */
const reviewerPhotoElements = document.querySelectorAll('.reviewer-photo');
const reviewContentElements = document.querySelectorAll('.review-content');
const ratingsElements = document.querySelectorAll('.ratings');
const reviewerNameElements = document.querySelectorAll('.reviewer-name');
const reviewerTitleElements = document.querySelectorAll('.reviewer-title');
const sliderIndicators = document.querySelectorAll('.slider-indicator');

const handleShowSelectedReview = (nodesArray, selectedIndicator) => {
	const indexOfCurrentSelected = selectedIndicator - 1;
	nodesArray.forEach((ele, index) => {
		if (index !== indexOfCurrentSelected) ele.classList.add('hide');
		else ele.classList.remove('hide');
	});
};

sliderIndicators.forEach((ele) => {
	ele.addEventListener('click', (event) => {
		const indicatorNumber = ele.getAttribute('name');
		const classNames = ele.className;
		if (classNames.includes('selected')) return;

		// Change photo
		handleShowSelectedReview(reviewerPhotoElements, indicatorNumber);
		// Change review content
		handleShowSelectedReview(reviewContentElements, indicatorNumber);
		// Change reviewer name
		handleShowSelectedReview(reviewerNameElements, indicatorNumber);
		// Change reviewer title
		handleShowSelectedReview(reviewerTitleElements, indicatorNumber);
		// Change ratings block
		handleShowSelectedReview(ratingsElements, indicatorNumber);
		// Change selected Indicator
		sliderIndicators.forEach((indicator) => {
			if (indicatorNumber === indicator.getAttribute('name')) {
				indicator.classList.add('selected');
			} else {
				indicator.classList.remove('selected');
			}
		});
	});
});
