export const successfulPayment = () => {
  const divSuccessfulPayment = document.createElement('div');
  const viewSuccessfulPayment = `
  <div class='successfulPayment' id='successfulPayment-screen'>
    <p>SUCCESSFUL PAYMENT</p>
  </div>
      `;
  divSuccessfulPayment.innerHTML = viewSuccessfulPayment;

  return divSuccessfulPayment;
};
