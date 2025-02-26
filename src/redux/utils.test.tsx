import { filterByName, filterByFavorite, fetchFilterCategories, localStorageKey } from './utils';

describe('filterByName', () => {
  it('returns true if name is empty', () => {
    expect(filterByName({ name: 'Test', favorite: false }, '')).toBe(true);
  });

  it('returns true if item name includes search term', () => {
    expect(filterByName({ name: 'Test Category', favorite: false }, 'test')).toBe(true);
  });

  it('returns false if item name does not include search term', () => {
    expect(filterByName({ name: 'Sample', favorite: false }, 'test')).toBe(false);
  });
});

describe('filterByFavorite', () => {
  it('returns true if item is a favorite', () => {
    expect(filterByFavorite({ name: 'Test', favorite: true })).toBe(true);
  });

  it('returns false if item is not a favorite', () => {
    expect(filterByFavorite({ name: 'Test', favorite: false })).toBe(false);
  });
});

describe('fetchFilterCategories', () => {
  beforeEach(() => {
    localStorage.clear();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: ['<div>Category1</div>', '<div>Category2</div>'] }),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns parsed categories from localStorage if available', async () => {
    const mockCategories = [{ name: 'Stored Category', favorite: false }];
    localStorage.setItem(localStorageKey, JSON.stringify(mockCategories));

    const result = await fetchFilterCategories();
    expect(result).toEqual(mockCategories);
  });

  it('fetches and processes categories if localStorage is empty', async () => {
    const result = await fetchFilterCategories();
    expect(result).toEqual([
      { name: 'Category1', favorite: false },
      { name: 'Category2', favorite: false },
    ]);
    expect(localStorage.getItem(localStorageKey)).toEqual(JSON.stringify(result));
  });

  it('returns an empty array and logs error on fetch failure', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('Fetch failed')));

    const result = await fetchFilterCategories();
    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalledWith('Error fetching categories:', expect.any(Error));
  });
});
