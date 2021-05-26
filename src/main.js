// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {initPage} from './lib/views/templateInit.js';
import {registerPage } from './lib/views/templateRegister.js';
import {recoverPage } from './lib/views/templateRecover.js';
import { homePage } from './lib/views/templateHome.js';
import { postPage } from './lib/views/templatePost.js';
import {errorPage} from './lib/views/templateError.js';
import {changeRoute} from './lib/router.js';

document.getElementById('root').innerHTML = initPage()

const init = () => {
    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash)
    })
}
window.addEventListener('load', init)

