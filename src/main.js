// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {initPage} from './lib/views/templateInit.js';
import {registerPage } from './lib/views/templateRegister.js';
import {recoverPage } from './lib/views/templateRecover.js';

myFunction();

document.getElementById('root').innerHTML = initPage()
document.getElementById('root').appendChild(registerPage());
document.getElementById('root').appendChild(recoverPage());