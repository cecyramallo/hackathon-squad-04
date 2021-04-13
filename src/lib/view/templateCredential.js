export const credential = () => {
  const divCredential = document.createElement('div');
  const viewCredential = `
  <div class='credential' id='credential-screen'>

  <img src="img/logocm.png" alt="logo" class="logo-home" id="logoHome">

    <h2 class="home-title">BIENVENIDOS</h2
    <p>CREDENTIAL</p>
  </div>
      `;
  divCredential.innerHTML = viewCredential;

  return divCredential;
};
