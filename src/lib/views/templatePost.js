import { signOff } from '../firebase/auth.js';

export const postPage = () => {
  const divPost = document.createElement('div');
  const newpostView = `
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    <button class="logOut" id="logOut"><img src="./images/logout.png"></button>
    </header>
    <main>
    <h1>Crea tu publicación</h1>
    <input type="file" id="newPost" class="newPost" value="">
    <div id="postcontainer">
    <img src="" class="imgPost" id="imgPost">
    </div>
    <textarea id="postText" class="postText" cols="50" rows="4" placeholder="Escribe tu publicación"></textarea>
    <button class="submit" id="uploadImg">Publicar</button>
    </main>
    <footer>
    <h5>Información | Ayuda | Privacidad | Condiciones</h5>
    <h6><L> 2021 MichiTips</h6>
    </footer>
    `;
  divPost.innerHTML = newpostView;

  const logOut = divPost.querySelector('#logOut');
  logOut.addEventListener('click', () => {
    signOff();
  });

  return divPost;
};
