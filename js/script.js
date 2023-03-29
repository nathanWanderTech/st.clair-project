const generateCurrentYearForFooter = () => {
	const thisYear = new Date().getFullYear();
	const footerEle = document.querySelector('#copyright');
	footerEle.innerHTML = `Copyright © ${thisYear} Digital Oasis`;
};

generateCurrentYearForFooter();
