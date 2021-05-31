import {changeRoute} from './lib/router.js';

const init = () => {
        window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash)
    })
    window.location.hash = '#/'
}
window.addEventListener('load', init)

