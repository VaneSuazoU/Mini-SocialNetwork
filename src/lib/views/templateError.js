export const errorPage = () => {
  const divError = document.createElement('div');
  const viewError = `
    <img src="./images/error.png">
    <a href=/#>Volver al inicio</a>
    `;

  divError.innerHTML = viewError;

  return divError;
};
