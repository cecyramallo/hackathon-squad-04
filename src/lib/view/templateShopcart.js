export const shopcart = () => {
  const divShopcart = document.createElement('div');

  const viewShopcart = `
  <div class='shopcart' id='shopcart-screen'>
  
    <div class="shopcart-header">
      <img src="img/logocm-white.png" alt="">
      <h2 class="partner-name">Hola, Gabriela Morales</h2>
    </div>

    <div>
      <ul class="items">
        <li>Producto</li>
        <li>Cantidad</li>
        <li>Precio</li>
      </ul>
      <div class="">
        <button class="the-button" id="theButton">+</button>
        <div>
          <p id="itemsContainer" class='product-container'></p>
        </div>
        <button class="the-button" id="theButton2">+</button>
        <div>
          <p id="itemsContainer2" class='product-container'></p>
        </div>
        <button class="the-button" id="theButton3">+</button>
        <div>
          <p id="itemsContainer3" class='product-container'></p>
        </div>
        <button class="the-button" id="theButton4">+</button>
        <div>
          <p id="itemsContainer4" class='product-container'></p>
        </div>
        <div>
        <p>Total:</p>
        <p id="precioTotal"></p>
        </div>
      </div>

    </div>

  </div>
      `;
  divShopcart.innerHTML = viewShopcart;

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
  const itemsContainer = divShopcart.querySelector('#itemsContainer');
  const itemsContainer2 = divShopcart.querySelector('#itemsContainer2');
  const itemsContainer3 = divShopcart.querySelector('#itemsContainer3');
  const itemsContainer4 = divShopcart.querySelector('#itemsContainer4');

  // Con el método map sumamos el valor del precio de los productos
  let total = 0;
  const sumaPrecios = items.map((item) => (total += item.precio));
  console.log(total);

  // Le agregamos el evento a los botones para que nos pinten la info de la data
  const addItem = button.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer').innerHTML = `
    <span>${items[0].producto}</span>
    <span>${items[0].cantidad}</span>
    <span class='price'>$${items[0].precio}</span>
    <img src="img/trash.png" alt="trash button" type='button'>
    `;
  });

  const addItem2 = button2.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer2').innerHTML = `
    <span>${items[1].producto}</span>
    <span>${items[1].cantidad}</span>
    <span class='price'>$${items[1].precio}</span>
    <img src="img/trash.png" alt="trash button" type='button'>
    `;
  });

  const addItem3 = button3.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer3').innerHTML = `
    <span>${items[2].producto}</span>
    <span>${items[2].cantidad}</span>
    <span class='price'>$${items[2].precio}</span>
    <img src="img/trash.png" alt="trash button" type='button'>
    `;
  });

  const addItem4 = button4.addEventListener('click', () => {
    divShopcart.querySelector('#itemsContainer4').innerHTML = `
    <span>${items[3].producto}</span>
    <span>${items[3].cantidad}</span>
    <span class='price'>$${items[3].precio}</span>
    <img src="img/trash.png" alt="trash button" type='button'>
    `;

    // Aquí pintamos el total de la suma del valor de los productos que hicimos con el método map
    divShopcart.querySelector('#precioTotal').innerHTML = '$' + total;
  });
  return divShopcart;
};
