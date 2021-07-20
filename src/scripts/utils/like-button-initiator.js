import FavoriteIdb from '../data/favorite-idb';
import { createLikeButtonTemplate, createUnLikedButtonTemplate } from '../view/templates/template-creator';

const LikeButtonInitiator = {
	async init({ likeButtonContainer, resto }) {
		this._likeButtonContainer = likeButtonContainer;
		this._resto = resto;

		await this._renderButton();
	},

	async _renderButton() {
		const { id } = this._resto;

		if (await this._isRestoExist(id)) {
			this._renderUnLiked();
		} else {
			this._renderLike();
		}
	},

	async _isRestoExist(id) {
		const resto = await FavoriteIdb.get(id);
		return !!resto;
	},

	_renderLike() {
		this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteIdb.put(this._resto);
			this._renderButton();
		});
	},

	_renderUnLiked() {
		this._likeButtonContainer.innerHTML = createUnLikedButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteIdb.delete(this._resto.id);
			this._renderButton();
		});
	},
};

export default LikeButtonInitiator;
