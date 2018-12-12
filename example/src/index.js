import { setLoafAlert, showLoafAlert } from 'loaf-alert';

setLoafAlert({
	length: 6,
	duration: 50000,
	class: 'custom-class'
});

let count = 0;

document.addEventListener('click', () => {
	showLoafAlert('Show alert message No.' + count);
	count++;
});