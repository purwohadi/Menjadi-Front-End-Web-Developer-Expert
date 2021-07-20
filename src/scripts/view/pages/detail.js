import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `<div id="resto" class="resto"></div>
				<div id="likeButtonContainer"></div>`;
	},

	async afterRender() {
		document.getElementById('button_skip_content').style.display = 'none';
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await DataSource.detailResto(url.id);
		const restaurantContainer = document.querySelector('#resto');
		restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: restaurant.id,
				name: restaurant.name,
				city: restaurant.city,
				description: restaurant.description,
				pictureId: restaurant.pictureId,
				rating: restaurant.rating,
			},
		});
	},
};

export default Detail;
