import {passRecover} from '../firebase/auth.js';

export const recoverPage = () => {
    const divRecover = document.createElement('div');
    const recoverView = ` 
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    </header>
    <main>
    <h5>¿Olvidaste tu contraseña?</h5>
    <h6>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes tu cuenta.</h6>
    <input type="email" id="emailrecover" placeholder="Correo electrónico">
    <button class="submit" id="sendLink">Enviar enlace</button>
    <p class="result"></p>
    <a href=/#>Volver al inicio</a>
    </main>
    <footer>
    <h5>Información | Ayuda | Privacidad | Condiciones</h5>
    <h6><L> 2021 MichiTips</h6>
    </footer>
    `
 
    divRecover.innerHTML = recoverView;

    const recoverPassword = divRecover.querySelector('#sendLink');
    recoverPassword.addEventListener('click', () => {
        passRecover();
    });

 

    return divRecover;
}