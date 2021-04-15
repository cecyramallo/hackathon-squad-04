export const final = () => {
  const divFinal = document.createElement('div');

  const viewFinal = `
    <div class="final" id="final-screen">
      <div class="final-header">
        <img src="img/logocm-white.png" alt="" />
        <h2 class="partner-name">Hola, Gabriela Morales</h2>
      </div>
      <div class="final-container">
        <h2 class="final-title">Has finalizado tu compra con éxito</h2>
        <p class="final-text">Puedes revisar tu historial de compras en www.centralmayorista.cl</p>
        <button class="final-button" id="finalButton">Finalizar</button>
      </div>
    </div>
      `;
  divFinal.innerHTML = viewFinal;

  // -------------Cambio a template final-------------------------------------------------------
  const goToHome = divFinal.querySelector('#finalButton');
  goToHome.addEventListener('click', () => {
    location.assign('');
  });

  return divFinal;
};
