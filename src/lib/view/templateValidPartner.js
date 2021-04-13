export const validPartner = () => {
  const divValidPartner = document.createElement('div');

  const viewValidPartner = `
  <div class='validPartner' id='validPartner-screen'>
    <p>VALID PARTNER</p>
  </div>
      `;
  divValidPartner.innerHTML = viewValidPartner;

  return divValidPartner;
};
