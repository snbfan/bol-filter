import { ReactElement, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesSlice, filterByFavorite, filterByName } from '../redux';
import { RootState } from '../redux/types';

import { CategoryItem } from './CategoryItem';
import { WarningMessage } from './WarningMessage';

export default function CategoriesList(): ReactElement {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.filters.value);
  const items = useSelector((state: RootState) => state.categories.value);

  const onCategorySelect = useCallback(
    (category: string) => dispatch(categoriesSlice.actions.toggleFavorite({ name: category })),
    [dispatch]
  );

  const { favoriteCategories, filteredCategories } = useMemo(() => {
    const favorites = items.filter((item) => filterByFavorite(item));
    const filtered = items.filter((item) => filterByName(item, name) && !filterByFavorite(item));

    return { favoriteCategories: favorites, filteredCategories: filtered };
  }, [items, name]);

  return (
    <div role="list" className="mt-4 space-y-2 h-70 overflow-y-auto focus:ring-2 focus:ring-blue-300 focus:outline-none">
      {favoriteCategories.map((item) => <CategoryItem item={item} onCategorySelect={onCategorySelect} key={item.name}/>)}
      {favoriteCategories.length > 0 && <hr className="border-gray-200" />}
      {filteredCategories.length === 0 && <WarningMessage>No categories found <span role="img" aria-label="shrugging emoji">🤷‍♂️</span></WarningMessage>}
      {filteredCategories.map((item) => <CategoryItem item={item}  onCategorySelect={onCategorySelect} key={item.name} />)}
    </div>
  );
}
