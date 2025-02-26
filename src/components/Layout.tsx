import { lazy, ReactElement, Suspense, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './Title';
import { CategoriesFilter } from './CategoriesFilter';
import { Spinner } from './Spinner';
import { Button } from './Button';
import { Wrapper } from './Wrapper';

import { AppDispatch } from '../redux/types';
import { categoriesSlice, fetchCategories, filtersSlice } from '../redux';

const LazyCategoriesList = lazy(() => import('./CategoriesList'));

export function Layout(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const saveFilters = useCallback(() => {
    dispatch(categoriesSlice.actions.saveSelectedCategories());
    dispatch(filtersSlice.actions.setNameFilter(''));
  }, [dispatch])


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Productgroep</Title>
      <CategoriesFilter />
      <Suspense fallback={<Spinner/>}>
        <LazyCategoriesList/>
      </Suspense>
      <Button onButtonClick={saveFilters} ariaLabel={'Filter toepassen'}>Toepassen</Button>
    </Wrapper>
  );
}