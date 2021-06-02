import { googleLogin, singIn } from '../firebase/auth.js';

export const initPage = () => {
  const divInit = document.createElement('div');
  // divInit.className = ('container')
  const initView = `
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    </header>
    <main>
    <input type="email" id="email" placeholder="Correo electrónico">
    <input type="password" id="password" placeholder="Contraseña">
    <button class="submit" id="start">Iniciar sesión</button>
    <button class="submit" id="googleLogin">Iniciar sesión con Google</button>
    <h4 class="result"></h4>
    <div id="tryAgain"></div>
    <a href=#/passwordRecover>¿Olvidó su contraseña?</a>
    <h4>¿No tienes cuenta?</h4>
    <a href=#/register>Regístrate</a>
    </main>
    <footer>
    <h5>Información | Ayuda | Privacidad | Condiciones</h5>
    <h6><L> 2021 MichiTips</h6>
    </footer>
    `;
  divInit.innerHTML = initView;

  const loginGoogle = divInit.querySelector('#googleLogin');
  loginGoogle.addEventListener('click', () => {
    googleLogin();
  });

  const regularLogin = divInit.querySelector('#start');
  regularLogin.addEventListener('click', () => {
    singIn();
  });

  return divInit;
};
