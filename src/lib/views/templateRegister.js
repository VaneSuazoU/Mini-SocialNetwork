import {createAccount} from '../firebase/auth.js';

export const registerPage = () => {
    const divRegister = document.createElement('div');
    const registerView =`
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    </header>
    <main>
    <input type="email" id="emailRegister" placeholder="Correo electrónico">
    <input type="text" id="userName" placeholder="Nombre">
    <input type="password" id="password" placeholder="Contraseña">
    <h4>Al registrarte aceptas nuestras politicas y condiciones</h4>
    <button class="submit" id="userRegister">Registrarse</button>
    <p class="result"></p>
    <h5>¿Tienes tu cuenta?</h5>
    <a href=/#>Volver al inicio</a>
    </main>
    <footer>
    <h5>Información | Ayuda | Privacidad | Condiciones</h5>
    <h6><L> 2021 MichiTips</h6>
    </footer>
    `
    divRegister.innerHTML = registerView;

    const createUser = divRegister.querySelector('#userRegister');
    createUser.addEventListener('click', () => {
        createAccount();
    });

    return divRegister;
}