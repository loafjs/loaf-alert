# Loaf Alert [![npm](https://img.shields.io/npm/v/loaf-alert.svg)](https://www.npmjs.com/package/loaf-alert) [![npm](https://img.shields.io/npm/dm/loaf-alert.svg)](https://www.npmjs.com/package/loaf-alert)
Create a small notification box that appears briefly and disappears.  
Notice boxes that are easy to modify and use in 'Webpack' and 'Babel' projects.

## Install
```
npm install --save loaf-alert
```

## How to use
```js
import { setLoafAlert, showLoafAlert } from 'loaf-alert';

// Run only once
setLoafAlert();

document.addEventListener('click', () => {
	// Print message notification box
	showLoafAlert('Show alert message');
});
```
The page(DOM) is loaded and runs 'setLoafAlert({options})' once.  

### Options
```js
setLoafAlert({
	length: 4, // Maximum number of notification boxes to show (Default. 4)
	duration: 5000, // Duration of exposure of the notification box (Default. 5000 (5s))
	class: 'custom-class' // Add a class attribute for modify the style (Default. '')
});
```
Then, when the notification message is needed, execute 'showLoafAlert(message)' function.

### Alert message
showLoafAlert('message text or html');

## Modify style
The following styles are applied by default.
```css
#loaf-alert-container {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.loaf-alert-box {
  background: #000;
  margin: 10px 0 0 0;
  color: #fff;
  min-width: 260px;
  padding: 10px 20px;
  font-size: 13px;
  line-height: 20px;
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
}
```
After you specify an additional class
```js
setLoafAlert({
	class: 'custom-class'
});
```
You can modify the style as shown below.
```css
.loaf-mini-alert-box.custom-class {
  background: #fff;
  color: #000;
}
```

## Example
You can go to the 'example' directory, install the example source, and check the run.
```
cd ./example
```
```
npm install
```
```
npm start
```

## License
[MIT](https://github.com/loafjs/loaf-alert/blob/master/LICENSE)