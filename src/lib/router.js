/* eslint-disable no-use-before-define */
import { initPage } from './views/templateInit.js';
import { recoverPage } from './views/templateRecover.js';
import { registerPage } from './views/templateRegister.js';
import { errorPage } from './views/templateError.js';
import { homePage } from './views/templateHome.js';

export const changeRoute = (hash) => showTemplate(hash);

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#/passwordRecover':
      containerRoot.appendChild(recoverPage());
      break;
    case '#/register':
      containerRoot.appendChild(registerPage());
      break;
    case '#/home':
      containerRoot.appendChild(homePage());
      break;
    case '':
    case '#':
    case '#/':
      containerRoot.appendChild(initPage());
      break;
    default:
      containerRoot.appendChild(errorPage());
  }
};
