import FavoriteRestoShow from '../src/scripts/view/pages/favorite-resto-show';
import FavoriteRestoSearchView from '../src/scripts/view/pages/favorite-resto-search-view';
import FavoriteRestoIdb from '../src/scripts/data/favorite-idb';

describe('Showing all favorite Restaurant Apps Starter Project', () => {
	let view;

	const renderTemplate = () => {
		view = new FavoriteRestoSearchView();
		document.body.innerHTML = view.getTemplate();
	};
	
	beforeEach(() => {
		renderTemplate();
	});

	describe('When no Restaurant Apps Starter Project have been liked', () => {
		it('should ask for the favorite Restaurant Apps Starter Project', () => {
			const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);

			new FavoriteRestoShow({
				view,
				favoriteRestos,
			});
			expect(favoriteRestos.getAll).toHaveBeenCalledTimes(1);
		});
		
		it('should show the information that no Restaurant Apps Starter Project have been liked', (done) => {
			document.getElementById('resto').addEventListener('resto:updated', () => {
				expect(document.querySelectorAll('.resto_favorit_not_found').length)
					.toEqual(1);

				done();
			});

			const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
			favoriteRestos.getAll.and.returnValues([]);

			new FavoriteRestoShow({
				view,
				favoriteRestos,
			});
		});
	});

	describe('When favorite Restaurant Apps Starter Project exist', () => {		
		it('should show the Restaurant Apps Starter Project', (done) => {
			document.getElementById('resto').addEventListener('resto:updated', () => {
				expect(document.querySelectorAll('.list-item').length)
					.toEqual(2);
				done();
			});

			const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
			favoriteRestos.getAll.and.returnValues([
				{
					id: 11, name: 'A', rating: 3, description: 'Restaurant A',
				},
				{
					id: 22, name: 'B', rating: 4, description: 'Restaurant B',
				},
			]);

			new FavoriteRestoShow({
				view,
				favoriteRestos,
			});
		});
		
	});
});
