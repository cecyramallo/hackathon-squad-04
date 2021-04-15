export const pay = () => {
  const divPay = document.createElement('div');

  const viewPay = `
  <div class='pay' id='pay-screen'>
    <div class="shopcart-header">
      <img src="img/logocm-white.png" alt="" />
      <h2 class="partner-name">Hola, Gabriela Morales</h2>
     </div>
    <div class="pay-container">
      <h2 class="pay-title">Selecciona tu medio de pago</h2>
    </div>
    <div class="pay-buttons-container">
      <img src="img/Redcompra.png" alt="redcompra" type='button' class="pay-buttons" id="redcompra">
      <img src="img/Transfer.png" alt="transfer" type='button'class="pay-buttons">
    </div>
    <div class="pay-footer">
      <a class="cancel-purchase" id="cancelPurchase">Cancelar compra</a>
      <a class="do-you-need-help">¿Necesitas ayuda?</a>
    </div>

    <div class="cancel-purchase-modal-background">
      <div class="cancel-purchase-modal">
        <p class='cancel-purchase-text-modal'>¿Estás seguro que deseas cancelar la compra?</p>
        <p class='cancel-purchase-text-modal2'>No podrás deshacer esta opción</p>
        <div class="cancel-purchase-modal-button-container">
        <button class='cancel-purchase-modal-button' id='yesCancelPurchase'>SI</button>
        <button class='cancel-purchase-modal-button' id='noCancelPurchase'>NO</button>
        </div>
      </div>
    </div>

    <div class="redcompra-modal-background">
      <div class="redcompra-modal">
        <img src="img/credit.png" alt="credit" type='button'class="credit-buttons">
        <img src="img/debit.png" alt="debit" type='button'class="debit-buttons">
        <span class="modal-close">&times;</span>
        <div class="redcompra-modal-button-container">
        <button class='redcompra-modal-button' id='yesCancelPurchase'>Continuar</button>
        </div>
      </div>
    </div>




  </div>
      `;
  divPay.innerHTML = viewPay;

  // -------------abrir modal de cancelar compra--------------------------------------------------

  const modalCancelPurchase = divPay.querySelector('#cancelPurchase');
  const modalBackgroundCancelPurchase = divPay.querySelector('.cancel-purchase-modal-background');
  const modalCloseCancelPurchase = divPay.querySelector('#noCancelPurchase');

  modalCancelPurchase.addEventListener('click', function () {
    modalBackgroundCancelPurchase.classList.add('cancel-purchase-background-active');
  });

  modalCloseCancelPurchase.addEventListener('click', function () {
    modalBackgroundCancelPurchase.classList.remove('cancel-purchase-background-active');
  });

  // -------------Cambio a template credential-------------------------------------------------------
  const goToCredential = divPay.querySelector('#yesCancelPurchase');
  goToCredential.addEventListener('click', () => {
    location.assign('#credential');
  });

  // -------------abrir modal de redcompra--------------------------------------------------

  const modalRedcompra = divPay.querySelector('#redcompra');
  const modalBackgroundRedcompra = divPay.querySelector('.redcompra-modal-background');
  const modalCloseRedcompra = divPay.querySelector('.modal-close');

  modalRedcompra.addEventListener('click', function () {
    modalBackgroundRedcompra.classList.add('redcompra-background-active');
  });

  modalCloseRedcompra.addEventListener('click', function () {
    modalBackgroundRedcompra.classList.remove('redcompra-background-active');
  });

  return divPay;
};
