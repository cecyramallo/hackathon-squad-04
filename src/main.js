// import { home } from './lib/view/templateHome.js';
import { shopcart } from './lib/view/templateShopcart.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(shopcart());
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      // console.log(1, window.location.hash);
      changeRoute(window.location.hash);
    };
  }
};

window.addEventListener('load', init);