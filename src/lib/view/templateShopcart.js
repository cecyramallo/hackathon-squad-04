export const shopcart = () => {
  const divShopcart = document.createElement('div');

  const viewShopcart = `
  <div class="shopcart" id="shopcart-screen">
  <div class="shopcart-header">
    <img src="img/logocm-white.png" alt="" />
    <h2 class="partner-name">Hola, Gabriela Morales</h2>
  </div>

  <div>
    <ul class="items">
      <li>Producto</li>
      <li>Cantidad</li>
      <li>Precio</li>
    </ul>
    <div class="">
      <div class="button-item-container">
        <button class="the-button" id="theButton">+</button>
        <p id="itemsContainer"></p>
      </div>
      <div class="button-item-container">
        <button class="the-button" id="theButton2">+</button>
        <p id="itemsContainer2"></p>
      </div>
      <div class="button-item-container">
        <button class="the-button" id="theButton3">+</button>
        <p id="itemsContainer3"></p>
      </div>
      <div class="button-item-container">
        <button class="the-button" id="theButton4">+</button>
        <p id="itemsContainer4"></p>
      </div>

      <div class="footer">
        <div class="cancelPurchase">
          <p class="cancel-purchase" id="cancelPurchase">Cancelar compra</p>
        </div>
        
        <div class="right">
          <div>
            <div class="totalPrice">
              <p class="total">Total:</p>
              <p class="total-price" id="totalPrice"></p>
              </br>
            </div>
            <p class="empty-cart" id="EmptyShopcart">Vaciar carrito</p>
            </br>
            <button class="finish-shop-button" id='modalShopcartButton'>Finalizar pedido</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="finish-purchase-modal-background">
  <div class="finish-purchase-modal">
    <p class='finish-purchase-text-modal'>Por favor, regresa el lector de código a su lugar para continuar con el pago.</p>
    <button class='finish-purchase-modal-button' id='closeModalShopcartButton'></button>
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

<div class="empty-cart-modal-background">
  <div class="empty-cart-modal">
    <p class='empty-cart-text-modal'>¿Estás seguro que deseas vaciar el carrito?<br></p>
    <p class='empty-cart-text-modal2'>No podrás deshacer esta opción</p>
    <div class="empty-cart-modal-button-container">
      <button class='empty-cart-modal-button' id='yesEmptyCart'>SI</button>
      <button class='empty-cart-modal-button' id='noEmptyCart'>NO</button>
    </div>
  </div>
</div>

</div>

      `;
  divShopcart.innerHTML = viewShopcart;

  // -------------abrir modal de finalizar compra----------------------------------------------
  const modalButton = divShopcart.querySelector('#modalShopcartButton');
  const modalBackground = divShopcart.querySelector('.finish-purchase-modal-background');
  const modalClose = divShopcart.querySelector('#closeModalShopcartButton');

  modalButton.addEventListener('click', function () {
    modalBackground.classList.add('finish-purchase-background-active');
  });

  modalClose.addEventListener('click', function () {
    modalBackground.classList.remove('finish-purchase-background-active');
  });

  // -------------abrir modal de vaciar carrito--------------------------------------------------

  const modalEmptyShopcart = divShopcart.querySelector('#EmptyShopcart');
  const modalBackgroundEmptyShopcart = divShopcart.querySelector('.empty-cart-modal-background');
  const modalCloseEmptyShopcart = divShopcart.querySelector('#noEmptyCart');
  const modalCloseEmptyShopcart2 = divShopcart.querySelector('#yesEmptyCart');

  modalEmptyShopcart.addEventListener('click', function () {
    modalBackgroundEmptyShopcart.classList.add('empty-cart-background-active');
  });

  modalCloseEmptyShopcart.addEventListener('click', function () {
    modalBackgroundEmptyShopcart.classList.remove('empty-cart-background-active');
  });

  modalCloseEmptyShopcart2.addEventListener('click', function () {
    modalBackgroundEmptyShopcart.classList.remove('empty-cart-background-active');
  });

  // -------------Recargar shopcar para vaciar carrito---------------------------------------------
  const reloadShopcart = divShopcart.querySelector('#yesEmptyCart');
  reloadShopcart.addEventListener('click', () => {
    location.assign('#shopcart');
  });

  const eraseButton = divShopcart.querySelector('#yesEmptyCart');
  const eraseItems = eraseButton.addEventListener('click', () => {
    divShopcart.querySelector('#item1').innerHTML = '';
    divShopcart.querySelector('#item2').innerHTML = '';
    divShopcart.querySelector('#item3').innerHTML = '';
    divShopcart.querySelector('#item4').innerHTML = '';
    divShopcart.querySelector('#totalPrice').innerHTML = '';
  });


  // -------------abrir modal de cancelar compra--------------------------------------------------

  const modalCancelPurchase = divShopcart.querySelector('#cancelPurchase');
  const modalBackgroundCancelPurchase = divShopcart.querySelector('.cancel-purchase-modal-background');
  const modalCloseCancelPurchase = divShopcart.querySelector('#noCancelPurchase');

  modalCancelPurchase.addEventListener('click', function () {
    modalBackgroundCancelPurchase.classList.add('cancel-purchase-background-active');
  });

  modalCloseCancelPurchase.addEventListener('click', function () {
    modalBackgroundCancelPurchase.classList.remove('cancel-purchase-background-active');
  });

  // -------------Cambio a template credential-------------------------------------------------------
  const goToCredential= divShopcart.querySelector('#yesCancelPurchase');
  goToCredential.addEventListener('click', () => {
    location.assign('#credential');
  });


  // Declaramos la data que usaremos
  const items = [
    { producto: 'Azúcar 1KG DamaBlanca', cantidad: '10', precio: 6200 },
    { producto: 'Prestigio Countline 35 gr', cantidad: '16', precio: 5280 },
    { producto: 'Cerveza Lager 355 CC 6U', cantidad: '30', precio: 9496 },
    { producto: 'Snicker singles 25gr', cantidad: '5', precio: 24950 },
  ];

  // Declaramos los botones que pintarán los productos
  // Agregamos un botón de eliminar(no funciona jaja)
  const button = divShopcart.querySelector('#theButton');
  const button2 = divShopcart.querySelector('#theButton2');
  const button3 = divShopcart.querySelector('#theButton3');
  const button4 = divShopcart.querySelector('#theButton4');

  // Con el método map sumamos el valor del precio de los productos
  let total = 0;
  const sumaPrecios = items.map((item) => (total += item.precio));
  console.log(total);

  // Le agregamos el evento a los botones para que nos pinten la info de la data
  const addItem = button.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer').innerHTML = `
    <div class='item-container' id='item1'>
      <div class='product-container'>
        <img class='product-img' src="img/product1.png" alt="">
        <span class='product'>${items[0].producto}</span>
        <span class='cuantity'>${items[0].cantidad}</span>
        <span class='price'>$${items[0].precio}</span>
      </div>
      <div class='trash'>
        <img src="img/trash.png" alt="trash button" type='button'>
      </div>
      
    </div>
    `;
  });

  const addItem2 = button2.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer2').innerHTML = `
    <div class='item-container' id='item2'>
      <div class='product-container'>
        <img src="img/product2.png" alt="">
        <span class='product2'>${items[1].producto}</span>
        <span class='cuantity2'>${items[1].cantidad}</span>
        <span class='price2'>$${items[1].precio}</span><br>
      </div>
      <div class='trash'>
        <img src="img/trash.png" alt="trash button" type='button'>
      </div>
    </div>
    `;
  });

  const addItem3 = button3.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer3').innerHTML = `
    <div class='item-container' id='item3'>
      <div class='product-container'>
        <img src="img/product3.png" alt="">
        <span class='product3'>${items[2].producto}</span>
        <span class='cuantity3'>${items[2].cantidad}</span>
        <span class='price3'>$${items[2].precio}</span><br>
      </div>
      <div class='trash'>
        <img src="img/trash.png" alt="trash button" type='button'>
      </div>
    </div>
    `;
  });

  const addItem4 = button4.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer4').innerHTML = `
    <div class='item-container' id='item4'>
      <div class='product-container'>
        <img src="img/product4.png" alt="">
        <span class='product4'>${items[3].producto}</span>
        <span class='cuantity4'>${items[3].cantidad}</span>
        <span class='price4'>$${items[3].precio}</span><br>
      </div>
      <div class='trash'>
        <img src="img/trash.png" alt="trash button" type='button'>
      </div>
    </div>
    `;

    // Aquí pintamos el total de la suma del valor de los productos que hicimos con el método map
    divShopcart.querySelector('#totalPrice').innerHTML = '$' + total;
  });

  // -------------Cambio a template Pay-----------------------------------------------------------------
  const goToPay = divShopcart.querySelector('#closeModalShopcartButton');
  goToPay.addEventListener('click', () => {
    location.assign('#pay');
  });

  return divShopcart;
};
