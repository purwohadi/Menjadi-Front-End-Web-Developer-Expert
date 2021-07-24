const itActsAsFavoriteRestoModel = (favoriteResto) => {
	it('should return the resto that has been added', async () => {
		favoriteResto.put({ id: 1 });
		favoriteResto.put({ id: 2 });

		expect(await favoriteResto.get(1))
			.toEqual({ id: 1 });
		expect(await favoriteResto.get(2))
			.toEqual({ id: 2 });
		expect(await favoriteResto.get(3))
			.toEqual(undefined);
	});

	it('should refuse a resto from being added if it does not have the correct property', async () => {
		favoriteResto.put({ aProperty: 'property' });

		expect(await favoriteResto.getAll())
			.toEqual([]);
	});

	it('can return all of the restos that have been added', async () => {
		favoriteResto.put({ id: 1 });
		favoriteResto.put({ id: 2 });

		expect(await favoriteResto.getAll())
			.toEqual([
				{ id: 1 },
				{ id: 2 },
			]);
	});

	it('should remove favorite resto', async () => {
		favoriteResto.put({ id: 1 });
		favoriteResto.put({ id: 2 });
		favoriteResto.put({ id: 3 });

		await favoriteResto.delete(1);

		expect(await favoriteResto.getAll())
			.toEqual([
				{ id: 2 },
				{ id: 3 },
			]);
	});

	it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
		favoriteResto.put({ id: 1 });
		favoriteResto.put({ id: 2 });
		favoriteResto.put({ id: 3 });

		await favoriteResto.delete(4);

		expect(await favoriteResto.getAll())
			.toEqual([
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
			]);
	});
};

export { itActsAsFavoriteRestoModel };
