export const homePage    = () => {
    const divHome = document.createElement('div');
    const viewHome = `
    <header>
    <h1>MichiTips</h1>
    <h4>LA COMUNIDAD INDOOR</h4>
    <button class="logOut" id="logOut"><img src="./images/logout.png"></button>
    </header>
    <main id="wallContent"></main>
    <footer>
    <button class="submit" id="newPost">Crear Publicación</button>
    </footer>
    
    `
    divHome.innerHTML = viewHome;
    return divHome;
}