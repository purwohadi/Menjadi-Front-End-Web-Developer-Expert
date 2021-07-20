import NotificationHelper from './notification-helper';
import CONFIG from '../global/config';

const WebSocketInitiator = {
	init(url) {
		const webSocket = new WebSocket(url);
		webSocket.onmessage = this._onMessageHandler;
	},

	_onMessageHandler(message) {
		const resto = JSON.parse(message.data);
		NotificationHelper.sendNotification({
			title: `${resto.name} Top!`,
			options: {
				body: resto.description,
				image: `${CONFIG.BASE_IMAGE_URL_M + resto.pictureId}`,
			},
		});
	},
};

export default WebSocketInitiator;
