const version = '1.1.1';
const prefix = 'loaf-alert-';
const options = {
  length: 4,
  duration: 5000,
  class: ''
};

const setOptions = (opt) => {
  for(let props in opt) {
    if(typeof options[props] !== 'undefined') {
      options[props] = opt[props];
      if(props === 'class' && document.getElementById(prefix + 'container')) {
        document.getElementById(prefix + 'container').setAttribute('class', options.class);
      }
    }
  }
};
const apendContainerElement = () => {
  const container = document.createElement('div');
  container.setAttribute('id', prefix + 'container');
  if(options.class) container.setAttribute('class', options.class);
  document.body.append(container);
};
const appendStyleElement = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    #${prefix}container {
        position: fixed;
        left: 20px;
        bottom: 20px;
    }
    .${prefix}box {
      background: #000;
      margin: 10px 0 0 0;
      color: #fff;
      width: 260px;
      padding: 10px 20px;
      font-size: 13px;
      line-height: 20px;
      border-radius: 4px;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    }
  `;
  document.head.append(style);
};

let totalCount = 0;


class LoafAlert {
  
  constructor() {
    if(!document.getElementById(prefix + 'container')) {
      apendContainerElement();
      appendStyleElement();
    }
  }

  showLoafAlert(msg) {
    const count = totalCount;
    const alertEl = document.getElementsByClassName(prefix + 'box');
    const alertLength = alertEl.length;
    const container = document.getElementById(prefix + 'container');
    const messageBox = document.createElement('p');
          messageBox.setAttribute('class', prefix + 'box');
          messageBox.setAttribute('id', prefix + count);
          messageBox.innerHTML = msg;

    if(alertLength >= options.length) alertEl[0].remove();
    container.append(messageBox);

    setTimeout(() => {
      document.getElementById(prefix + count).remove();
    }, options.duration);

    return totalCount = count + 1;
  }
}

export default function(msg) {
  return new LoafAlert().showLoafAlert(msg);
}
export { setOptions };