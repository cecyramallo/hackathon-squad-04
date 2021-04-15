export const pay = () => {
  const divPay = document.createElement('div');

  const viewPay = `
  <div class='pay' id='pay-screen'>
    <div class="shopcart-header">
      <img src="img/logocm-white.png" alt="" />
      <h2 class="partner-name">Hola, Freddy Jeanty</h2>
     </div>
    <div class="pay-container">
      <h2 class="pay-title">Selecciona tu medio de pago</h2>
    </div>
    <div class="pay-buttons-container">
      <img src="img/Redcompra.png" alt="redcompra" type='button' class="pay-buttons" id="redcompra">
      <img src="img/Transfer.png" alt="transfer" type='button'class="pay-buttons" id="transfer">
    </div>
    <div class="pay-footer">
      <a class="cancel-purchase" id="cancelPurchase">Cancelar compra</a>
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
      <div class="change-modal-content" id="changeModalContent"></div>
      <div class="credit-debit-container" id="creditDebitContainer">
        <img src="img/credit.png" alt="credit" type="button" id="continueButton" class="credit-buttons"/>
        <img src="img/debit.png" alt="debit" type="button" class="debit-buttons"/>
      </div>
      <span class="modal-close">&times;</span>
      <div class="redcompra-modal-button-container">
      </div>
  
      <div class="change-modal-content2" id="changeModalContent2">
        <div class="do-the-pay">
          <p class="do-the-pay-text">Realiza el pago</p>
          <img src="img/pay-gif.gif" alt="paygif" type="button" id="payGifButton" class="pay-gif-button" />
        </div>
        <span class="modal-close">&times;</span>
      </div>

      <div class="change-modal-content3" id="changeModalContent3">
        <div class="loading">
          <p class="loading-text">Procesando</p>
          <img src="img/loading.gif" alt="loadinggif" type="button" id="loadingButton" class="loading-gif-button"/>
        </div>
        <span class="modal-close">&times;</span>
      </div>

      <div class="change-modal-content4" id="changeModalContent4">
        <div class="successful-payment">
          <p class="successful-payment-text">Pago realizado con éxito</p>
          <button class='continue-button' id='continueToReceiptButton'>Continuar</button>
        </div>
        <span class="modal-close">&times;</span>
      </div>
  
      <div class="change-modal-content5" id="changeModalContent5">
      <div class="receipt">
        <p class="receipt-text">No olvides retirar tu boleta</p>
        <img src="img/receipt.gif" alt="receiptgif" type="button" id="receiptButton" class="receipt-button" />
      </div>
      <span class="modal-close">&times;</span>
    </div>

    </div>
  
   
  </div>


    </div>


  </div>
      `;
  divPay.innerHTML = viewPay;

  // ------------- cambiar a modal do the pay--------------------------------------------------

  const doThePay = divPay.querySelector('#continueButton');
  doThePay.addEventListener('click', () => {
    creditDebitContainer.style.display = 'none';
    changeModalContent2.style.display = 'block';
  });

  // ------------- cambiar a modal loading--------------------------------------------------

  const loading = divPay.querySelector('#payGifButton');
  loading.addEventListener('click', () => {
    changeModalContent2.style.display = 'none';
    changeModalContent3.style.display = 'block';
  });

  // ------------- cambiar a modal successful payment-----------------------------------

  const paymentReady = divPay.querySelector('#loadingButton');
  paymentReady.addEventListener('click', () => {
    changeModalContent3.style.display = 'none';
    changeModalContent4.style.display = 'block';
  });

  // ------------- cambiar a modal receipt--------------------------------------------------

  const receipt = divPay.querySelector('#continueToReceiptButton');
  receipt.addEventListener('click', () => {
    changeModalContent4.style.display = 'none';
    changeModalContent5.style.display = 'block';
  });

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

  // -------------Cambio a template home-------------------------------------------------------
  const goToHome = divPay.querySelector('#yesCancelPurchase');
  goToHome.addEventListener('click', () => {
    location.assign('');
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

  // -------------Cambio a template Transfer-------------------------------------------------------
  const goToTransfer = divPay.querySelector('#transfer');
  goToTransfer.addEventListener('click', () => {
    location.assign('#transfer');
  });

// -------------Cambio a template final-------------------------------------------------------
  const goToFinal = divPay.querySelector('#receiptButton');
  goToFinal.addEventListener('click', () => {
    location.assign('#final');
  });
  return divPay;
};
