import CONFIG from '../global/config';

class DataSource {
	static async restaurantGet() {
		const uriDefault = `${CONFIG.BASE_URL}list`;
		const response = await fetch(uriDefault);
		const responseJson = await response.json();
		if (responseJson.restaurants) {
			return Promise.resolve(responseJson.restaurants);
		}
		return Promise.reject(new TypeError('Data restoran tidak di temukan'));
	}

	static async detailResto(id) {
		const uriDefault = `${CONFIG.BASE_URL}detail/${id}`;
		const response = await fetch(uriDefault);
		const responseJson = await response.json();
		if (responseJson.restaurant) {
			return Promise.resolve(responseJson.restaurant);
		}
		return Promise.reject(new TypeError('Data restoran tidak di temukan detail'));
	}
}

export default DataSource;
