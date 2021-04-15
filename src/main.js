// import { home } from './lib/view/templateHome.js';
import { pay } from './lib/view/templatePay.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(pay());
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      // console.log(1, window.location.hash);
      changeRoute(window.location.hash);
    };
  }
};

window.addEventListener('load', init);
