import { signOff } from '../firebase/auth.js';

export const homePage = () => {
  const divHome = document.createElement('div');
  const homeView = `
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    <button class="logOut" id="logOut"><img src="./images/logout.png"></button>
    </header>
    <main id="publications"></main>
    <footer>
    <h4 class="result"></h4>
    <div id="tryAgain"></div>
    <button class="submit" id="newPost">Crear Publicación</button>
    </footer>
    `;

  divHome.innerHTML = homeView;

  const logOut = divHome.querySelector('#logOut');
  logOut.addEventListener('click', () => {
    signOff();
  });

  const addPost = divHome.querySelector('#newPost');
  addPost.addEventListener('click', () => {
    window.open('#/addPost', '_self');
  });

  return divHome;
};
