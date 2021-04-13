export const shopcart = () => {
  const divShopcart = document.createElement('div');

  const viewShopcart = `
  <div class='shopcart' id='shopcart-screen'>
    <p>SHOP CART</p>
  </div>
      `;
  divShopcart.innerHTML = viewShopcart;

  return divShopcart;
};
