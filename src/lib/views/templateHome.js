import { signOff } from '../firebase/auth.js';
import { createPost, showPost } from '../firebase/firestore.js';

export const homePage = () => {
  const divHome = document.createElement('div');
  const homeView = `
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    <button class="logOut" id="logOut"><img src="./images/logout.png"></button>
    </header>
    <h1>Crea tu publicación</h1>
    <textarea id="postText" class="postText" cols="50" rows="4" placeholder="Escribe tu publicación"></textarea>
    <button class="submit" id="upload">Publicar</button>
    <main id="publications"></main>
    <footer>
    <h4 class="result"></h4>
    <div id="tryAgain"></div>
    </footer>
    `;

  divHome.innerHTML = homeView;

  const logOut = divHome.querySelector('#logOut');
  logOut.addEventListener('click', () => {
    signOff();
  });

  const uploadPost = divHome.querySelector('#upload');
  uploadPost.addEventListener('click', () => {
    createPost();
    showPost();
  });

  return divHome;
};
