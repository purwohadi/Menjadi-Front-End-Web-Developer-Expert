import DataSource from '../../data/data-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const NowList = {
	async render() {
		return `<h2 class="main-title">Lokasi Restaurant & Cafe</h2>
				<p class="main-description">Daftar Restaurant & Cafe Yang Tersedia</p>
				<restaurant-list>
					<div class="list" id="restaurant-list"></div>
				</restaurant-list>
				<div id="loader-text" class="loader loader-default is-active" style="display: none;">
                    <div class="loader-message">Loading</div>
                </div>`;
	},

	async afterRender() {
		const restaurants = await DataSource.restaurantGet();
		const restaurantsContainer = document.querySelector('#restaurant-list');
		restaurantsContainer.innerHTML = '';
		restaurants.forEach((items) => {
			restaurantsContainer.innerHTML += createRestoItemTemplate(items);
		});
	},
};

export default NowList;
