import { home } from './view/templateHome';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#':
      containerRoot.appendChild(home());
      break;
    default:
      containerRoot.innerHTML = `
      <h2>No se han encontrado resultados</h2>
          `;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#') {
    return showTemplate(hash);
  }
};
