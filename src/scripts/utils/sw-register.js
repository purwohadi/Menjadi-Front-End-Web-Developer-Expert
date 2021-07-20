import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
	if ('serviceWorker' in navigator) {
		await runtime.register();
		console.log('Service worker is registered');
		return;
	}
	console.log('Service worker not supported in this browser');
};

export default swRegister;
