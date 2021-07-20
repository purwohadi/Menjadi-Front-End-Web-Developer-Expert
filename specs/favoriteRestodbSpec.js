import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-idb';
 
describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAll()).forEach(async (resto) => {
      await FavoriteRestoIdb.delete(resto.id);
    });
  });
 
  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});