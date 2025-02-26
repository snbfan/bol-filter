import { BolSearchCategory, BolSearchCategoryDTO } from '../interfaces';

export const localStorageKey = 'bol_selected_items';

export function filterByName(item: BolSearchCategory, name: string): boolean {
  return !name || item.name.toLowerCase().includes(name.toLowerCase());
}

export function filterByFavorite(item: BolSearchCategory): boolean {
  return item.favorite;
}

export async function fetchFilterCategories(): Promise<BolSearchCategory[]> {
  const items = localStorage.getItem(localStorageKey);

  if (items) {
    return JSON.parse(items);
  }

  try {
    const response = await fetch('/items.json');
    const parsed: BolSearchCategoryDTO = await response.json();

    const parser = new DOMParser();
    const refinedData = parsed.data.map((category) => ({
      name: parser.parseFromString(category, 'text/html').body.textContent || '',
      favorite: false,
    }));

    localStorage.setItem(localStorageKey, JSON.stringify(refinedData));

    return refinedData;
  } catch(error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
