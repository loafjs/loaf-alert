import lAlert, { setOptions } from '../../index';

setOptions({
  length: 6,
  duration: 5000,
  class: 'custom-class'
});

let count = 0;

document.getElementById('show-alert-button').addEventListener('click', () => {
  lAlert('Show alert message No.' + count);
  count++;
});