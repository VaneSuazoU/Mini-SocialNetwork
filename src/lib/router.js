import {initPage} from './views/templateInit.js';
import {recoverPage} from './views/templateRecover.js';
import {registerPage} from './views/templateRegister.js';
import {homePage} from './views/templateHome.js';
import {postPage} from './views/templatePost.js';
import {errorPage} from './views/templateError.js';


export const changeRoute = (hash) => showTemplate(hash)

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    switch (hash){
        case '#/passwordRecover':
        containerRoot.appendChild(recoverPage());
        break;
        case '#/register':
        containerRoot.appendChild(registerPage());
        break;
        case '':
        case '#':
        case '#/':
        containerRoot.appendChild(initPage());
        break;
        default:
        containerRoot.appendChild(errorPage())
    }
}