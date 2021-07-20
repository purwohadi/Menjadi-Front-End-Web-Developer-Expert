import { createRestoItemTemplate } from '../templates/template-creator';

class FavoriteRestoSearchView {
	getTemplate() {
		return `
	<div class="content">
		<h2 class="content__heading">Favorit Food</h2>
	</div>
	<restaurant-list>					
		<div id="resto" class="list"></div>
	</restaurant-list>`;
	}

	runWhenUserIsSearching(callback) {
		document.getElementById('query').addEventListener('change', (event) => {
			callback(event.target.value);
		});
	}

	showResto(restos) {
		this.showFavoriteRestos(restos);
	}

	showFavoriteRestos(restos = []) {
		let html;
		if (restos.length) {
			html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
		} else {
			html = this._getEmptyRestoTemplate();
		}

		document.getElementById('resto').innerHTML = html;

		document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
	}

	_getEmptyRestoTemplate() {
		return '<div class="resto_favorit_not_found">Tidak ada restoran favorit untuk ditampilkan</div>';
	}
}

export default FavoriteRestoSearchView;
