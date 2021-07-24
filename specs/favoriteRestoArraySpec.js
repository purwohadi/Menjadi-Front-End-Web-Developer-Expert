import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

	get(id) {
		if (!id) {
			return;
		}
		return favoriteRestos.find((resto) => resto.id === id);
	},

	getAll() {
		return favoriteRestos;
	},

	put(resto) {
		if (!resto.hasOwnProperty('id')) {
			return;
		}

		// pastikan id ini belum ada dalam daftar favorite restaurant
		if (this.get(resto.id)) {
			return;
		}
		favoriteRestos.push(resto);
	},

	delete(id) {
		// cara menghapus film dengan meng-copy film yang ada
		// kecuali film dengan id == id
		favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
	},
};

describe('Favorite Resto Array Contract Test Implementation', () => {
	afterEach(() => favoriteRestos = []);
	itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
