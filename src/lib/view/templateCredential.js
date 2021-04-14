export const credential = () => {
  const divCredential = document.createElement('div');
  const viewCredential = `
  <div class='credential' id='credential-screen'>

  <img src="img/logocm.png" alt="logo" class="logo-home" id="logoHome">

    <h2 class="home-title">BIENVENIDOS</h2>
    <p class="credential-text">Escanea tu credencial de socio 
    en la parte inferior del tótem para comenzar</p>

    <img src="img/credential.png" alt="credencial" class="credential-img" id="credentialImg" type='button'>

    <div class="modal-background">
      <div class="modal">
        <p class='text-modal'>Socio validado con éxito.</p>
        <button class='modal-button' id='modalShopcartButton'>Continuar</button>
        <span class="modal-close">&times;</span>
      </div>
    </div>

  </div>
      `;
  divCredential.innerHTML = viewCredential;

  // -------------abrir modal --------------------
  const modalButton = divCredential.querySelector('#credentialImg');
  const modalBackground = divCredential.querySelector('.modal-background');
  const modalClose = divCredential.querySelector('.modal-close');

  modalButton.addEventListener('click', function () {
    modalBackground.classList.add('background-active');
  });

  modalClose.addEventListener('click', function () {
    modalBackground.classList.remove('background-active');
  });

  // -------------Cambio a template Shopcart--------------------
  const goToShopcart = divCredential.querySelector('#modalShopcartButton');
  goToShopcart.addEventListener('click', () => {
    location.assign('#shopcart');
  });
  return divCredential;
};
