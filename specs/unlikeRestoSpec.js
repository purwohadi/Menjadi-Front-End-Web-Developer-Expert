import FavoriteRestoIdb from '../src/scripts/data/favorite-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(async () => {
		addLikeButtonContainer();
		await FavoriteRestoIdb.put({ id: 1 });
	});

	afterEach(async () => {
		await FavoriteRestoIdb.delete(1);
	});

	// case 1
	it('should display unlike button when the resto has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
		expect(document.querySelector('[aria-label="unlike"]')).toBeTruthy();
	});

	// case 2
	it('should not display like button when the resto has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
		expect(document.querySelector('[aria-label="like"]')).toBeFalsy();
	});

	// case 3
	it('should be able to remove liked resto from the list', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
		document.querySelector('[aria-label="unlike"]').dispatchEvent(new Event('click'));
		expect(await FavoriteRestoIdb.getAll()).toEqual([]);
	});

	// case 4
	it('should not add a resto again when its already unliked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		// hapus dulu film dari daftar resto yang disukai
		await FavoriteRestoIdb.delete(1);

		// kemudian, simulasikan pengguna menekan button batal menyukai resto
		document.querySelector('[aria-label="unlike"]').dispatchEvent(new Event('click'));

		expect(await FavoriteRestoIdb.getAll()).toEqual([]);
	});
});
