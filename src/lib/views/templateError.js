export const errorPage = () => {
  const divError = document.createElement('div');
  const viewError = `
    <h1>ERROR 404</h1>
    <img src="./images/tryagaincat.gif">
    <footer>
    <a href=/#>Volver al inicio</a>
    </footer>
    
    `;

  divError.innerHTML = viewError;

  return divError;
};
