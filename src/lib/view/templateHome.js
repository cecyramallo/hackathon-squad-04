export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <div class='home' id='home-screen'>
    <img src="img/logocm.png" alt="logo" class="logo-home" id="logoHome">

    <h1 class="home-title">PRESIONA LA PANTALLA<br>PARA INICIAR</h1

    <img src="img/touchButton.gif" alt="touch hand" class="touch-button" id="touchButton">
    <img src="img/touchButton.gif" alt="touch hand" class="touch-button" id="touchButton" type='button'>
    <img src="img/walmartIcon.png" alt="logo walmart" class="walmart-icon" id="" >

  </div>
      `;
  divHome.innerHTML = viewHome;

  // -------------Cambio a template credential--------------------
  const touchButton = divHome.querySelector('#touchButton');
  touchButton.addEventListener('click', () => {
    location.assign('#credential');
  });

  return divHome;
};
