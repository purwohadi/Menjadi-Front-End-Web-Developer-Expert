import FavoriteRestoIdb from '../src/scripts/data/favorite-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(() => {
		addLikeButtonContainer();
	});

	// case 1
	it('should show the like button when the Resto has been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
		expect(document.querySelector('[aria-label="like"]')).toBeTruthy();
	});

	// case 2
	it('should not show the unlike button when the Resto has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
		expect(document.querySelector('[aria-label="unlike"]')).toBeFalsy();
	});

	// case 3
	it('should be able to like the resto', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		const restaurant = await FavoriteRestoIdb.get(1);

		expect(restaurant).toEqual({ id: 1 });
		FavoriteRestoIdb.delete(1);
	});

	// case 4
	it('should not add a resto again when its already liked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		// add restaurant with ID 1 to favorite restaurant list liked
		await FavoriteRestoIdb.put({ id: 1 });

		// simulate user to push like button
		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		// no double restaurant
		expect(await FavoriteRestoIdb.getAll()).toEqual([{ id: 1 }]);
		FavoriteRestoIdb.delete(1);
	});

	// case 5
	// using xit method, not it
	it('should not add a resto when it has no id', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({});

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		expect(await FavoriteRestoIdb.getAll()).toEqual([]);
	});
});
