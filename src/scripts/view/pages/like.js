import FavoriteIdb from '../../data/favorite-idb';
import FavoriteRestoSearchView from './favorite-resto-search-view';

import FavoriteRestoShowPresenter from './favorite-resto-show';

const view = new FavoriteRestoSearchView();
const Like = {
	async render() {
		return view.getTemplate();
	},

	async afterRender() {
		new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteIdb });
	},
};
export default Like;
