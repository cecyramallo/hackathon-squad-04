export const final = () => {
  const divFinal = document.createElement('div');

  const viewFinal = `
  <div class='final' id='final-screen'>
    <p>FINAL</p>
  </div>
      `;
  divFinal.innerHTML = viewFinal;

  return divFinal;
};
