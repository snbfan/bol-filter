import { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { CategoryItem } from './CategoryItem';
import { filterByFavorite, filterByName } from '../redux';
import { RootState } from '../redux/types';
import { NoCategoriesMessage } from './NoCategoriesMessage.tsx';

export default function CategoriesList(): ReactElement {
  const { name } = useSelector((state: RootState) => state.filters.value);
  const items = useSelector((state: RootState) => state.categories.value);

  const { favoriteCategories, filteredCategories } = useMemo(() => {
    const favorites = items.filter((item) => filterByFavorite(item));
    const filtered = items.filter((item) => filterByName(item, name) && !filterByFavorite(item));

    return { favoriteCategories: favorites, filteredCategories: filtered };
  }, [items, name]);

  return (
    <div role="list" className="mt-4 space-y-2 h-70 overflow-y-auto focus:ring-2 focus:ring-blue-300 focus:outline-none">
      {favoriteCategories.map((item) => <CategoryItem item={item} key={item.name}/>)}
      {favoriteCategories.length > 0 && <hr className="border-gray-200" />}
      {filteredCategories.length === 0 && <NoCategoriesMessage />}
      {filteredCategories.map((item) => <CategoryItem item={item} key={item.name} />)}
    </div>
  );
}
