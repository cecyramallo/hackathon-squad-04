export const pay = () => {
  const divPay = document.createElement('div');

  const viewPay = `
  <div class='pay' id='pay-screen'>
    <p>PAY</p>
  </div>
      `;
  divPay.innerHTML = viewPay;

  return divPay;
};
