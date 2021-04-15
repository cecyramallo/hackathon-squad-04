import { home } from './lib/view/templateHome.js';
// import { transfer } from './lib/view/templateTransfer.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(home());
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRoute(window.location.hash);
    };
  }
};

window.addEventListener('load', init);
