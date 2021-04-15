export const transfer = () => {
  const divTransfer = document.createElement('div');

  const viewTransfer = `
  <div class="Transfer" id="transfer-screen">
  
  <div class="transfer-header">
    <img src="img/logocm-white.png" alt="" />
    <h2 class="partner-name">Hola, Freddy Jeanty</h2>
  </div>
  </div>
      <div class="final-container">
        <h2 class="final-title">Escanea y paga</h2>
        <p class="transfer-text">Escanea el código QR para realizar tu pago</p>
        <img src="img/qr-code.png" alt="qrcode" id="modalTransferButton" />
        <img src="img/transfer-timer.gif" alt="" class="timer"/>
        
        <div class="footer">
        <div class="cancelPurchase">
          <p class="cancel-purchase" id="cancelPurchase">Cancelar compra</p>
        </div>
      </div>

      
      <div class="transfer-modal-background">
      <div class="modal">
        <p class='text-modal'>Pago realizado con éxito</p>
        <button class='modal-button' id='closeModalTransferButton'>Continuar</button>
        <span class="modal-close">&times;</span>
      </div>
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
  </div>
`;
  divTransfer.innerHTML = viewTransfer;

  // -------------abrir modal de successful payment--------------------------------------------------
  const modalTransferButton = divTransfer.querySelector('#modalTransferButton');
  const modalTransferBackground = divTransfer.querySelector('.transfer-modal-background');
  const modalTransferClose = divTransfer.querySelector('#closeModalTransferButton');

  modalTransferButton.addEventListener('click', function () {
    modalTransferBackground.classList.add('transfer-background-active');
    console.log("KYAAA");
  });

  modalTransferClose.addEventListener('click', function () {
    modalTransferBackground.classList.remove('transfer-background-active');
  });

  // -------------abrir modal de cancelar compra--------------------------------------------------

  const modalCancelPurchase = divTransfer.querySelector('#cancelPurchase');
  const modalBackgroundCancelPurchase = divTransfer.querySelector('.cancel-purchase-modal-background');
  const modalCloseCancelPurchase = divTransfer.querySelector('#noCancelPurchase');

  modalCancelPurchase.addEventListener('click', function () {
    modalBackgroundCancelPurchase.classList.add('cancel-purchase-background-active');
  });

  modalCloseCancelPurchase.addEventListener('click', function () {
    modalBackgroundCancelPurchase.classList.remove('cancel-purchase-background-active');
  });

  // -------------Cambio a template home-------------------------------------------------------
  const goToHome = divTransfer.querySelector('#yesCancelPurchase');
  goToHome.addEventListener('click', () => {
    location.assign('');
  });

  // -------------Cambio a template final-------------------------------------------------------
  const goToFinal2 = divTransfer.querySelector('#closeModalTransferButton');
  goToFinal2.addEventListener('click', () => {
    location.assign('#final');
  });

  return divTransfer;
};
