const tabControllerEles = document.querySelectorAll('.tab-controller--item');
const tabContentEles = document.querySelectorAll('.tab-content');

const addActiveClass = (selectValue) => {
	tabControllerEles.forEach((ele) => {
		if (ele.innerHTML === selectValue) ele.classList.add('tab-active');
		else ele.classList.remove('tab-active');
	});
};

tabControllerEles.forEach((ele, index) => {
	ele.addEventListener('click', (event) => {
		addActiveClass(ele.innerHTML);
		tabContentEles.forEach((tabContent) => {
			tabContent.style.transform = `translateX(-${index * 100}%)`;
		});
	});
});
