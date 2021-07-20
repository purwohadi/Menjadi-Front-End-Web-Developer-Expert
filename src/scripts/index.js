import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';

import App from './view/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './global/config';

const app = new App({
	button: document.querySelector('#menu'),
	drawer: document.querySelector('#drawer'),
	content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
	WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
console.log('Hello Coders! :)');
