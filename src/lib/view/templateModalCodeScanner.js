export const modalScanner = () => {
  const divModalScanner = document.createElement('div');

  const viewModalScanner = `
  <div class='modalScanner' id='modalScanner-screen'>
    <p>MODAL SCANNER</p>
  </div>
      `;
  divModalScanner.innerHTML = viewModalScanner;

  return divModalScanner;
};
