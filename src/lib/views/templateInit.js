export const initPage = () => {
    const firstView = `
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    </header>
    <main>
    <input type="email" id="email" placeholder="Correo electrónico">
    <input type="password" id="password" placeholder="Contraseña">
    <button class="submit" id="start">Iniciar sesión</button>
    <button class="submit" id="googleStart">Iniciar sesión con Google</button>
    <a href=#/passwordRecover>¿Olvidó su contraseña?</a>
    <h4>¿No tienes cuenta?</h4>
    <a href=#/register>Regístrate</a>
    </main>
    <footer>
    <h5>Información | Ayuda | Privacidad | Condiciones</h5>
    <h6><L> 2021 MichiTips</h6>
    </footer>
    `
    return firstView
}
