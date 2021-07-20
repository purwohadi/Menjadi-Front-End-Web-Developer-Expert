/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');
const { pause } = require('codeceptjs');

Feature('Testing Like Restaurant Apps Starter Project');

Before(({ I }) => {
	I.amOnPage('/#/like');
});

Scenario('Test Something In Here ', ({ I }) => {

});

Scenario('Showing Empty Like Restaurant Apps Starter Project', ({ I }) => {
	I.seeElement('#resto');
	I.see('Tidak ada restoran favorit untuk ditampilkan', '.resto_favorit_not_found');
	I.amOnPage('/');

	I.seeElement('.read-more-button');
	I.click(locate('.read-more-button').first());

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');
	I.seeElement('.list-item');
});

Scenario('Like One Restaurant', async ({ I }) => {
	I.see('Tidak ada restoran favorit untuk ditampilkan', '.resto_favorit_not_found');

	I.amOnPage('/');

	I.seeElement('.read-more-button');

	const firstResto = locate('.read-more-button').first();
	const firstRestoTitle = await I.grabTextFrom(firstResto);
	I.click(firstResto);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');
	I.seeElement('.list-item');

	const likedRestoTitle = await I.grabTextFrom('.read-more-button');

	assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unlike One Restaurant', async ({ I }) => {
	I.see('Tidak ada restoran favorit untuk ditampilkan', '.resto_favorit_not_found');

	I.amOnPage('/');
	I.seeElement('.read-more-button');
	I.click('.read-more-button');
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');
	I.seeElement('.read-more-button');
	I.click('.read-more-button');
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');

	const noFavoriteResto = await I.grabTextFrom('.resto_favorit_not_found');
	const textNoFavorite = 'Tidak ada restoran favorit untuk ditampilkan';

	assert.strictEqual(noFavoriteResto, textNoFavorite);
});
