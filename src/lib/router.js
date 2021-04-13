import { home } from './view/templateHome.js';
import { credential } from './view/templateCredential.js';
import { validPartner } from './view/templateValidPartner.js';
import { shopcart } from './view/templateShopcart.js';
import { modalScanner } from './view/templateModalCodeScanner.js';
import { pay } from './view/templatePay.js';
import { successfulPayment } from './view/templateSuccessfulPayment.js';
import { final } from './view/templateFinal.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#':
      containerRoot.appendChild(home());
      break;
    case '#credential':
      containerRoot.appendChild(credential());
      break;
    case '#validpartner':
      containerRoot.appendChild(validPartner());
      break;
    case '#shopcart':
      containerRoot.appendChild(shopcart());
      break;
    case '#modalscanner':
      containerRoot.appendChild(modalScanner());
      break;
    case '#pay':
      containerRoot.appendChild(pay());
      break;
    case '#successfulpayment':
      containerRoot.appendChild(successfulPayment());
      break;
    case '#final':
      containerRoot.appendChild(final());
      break;
    default:
      containerRoot.innerHTML = `
      <h2>404: Not found</h2>
      `;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#') {
    return showTemplate(hash);
  }
  if (hash === '#credential') {
    return showTemplate(hash);
  }
  if (hash === '#validpartner') {
    return showTemplate(hash);
  }
  if (hash === '#shopcart') {
    return showTemplate(hash);
  }
  if (hash === '#modalscanner') {
    return showTemplate(hash);
  }
  if (hash === '#pay') {
    return showTemplate(hash);
  }
  if (hash === '#successfulpayment') {
    return showTemplate(hash);
  }
  if (hash === '#final') {
    return showTemplate(hash);
  }
};
