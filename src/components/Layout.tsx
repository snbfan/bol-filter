import { lazy, ReactElement, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './Title';
import { CategoriesFilter } from './CategoriesFilter';
import { Spinner } from './Spinner';
import { ApplyButton } from './ApplyButton';
import { Wrapper } from './Wrapper';
import { AppDispatch } from '../redux/types';
import { fetchCategories } from '../redux';

const LazyCategoriesList = lazy(() => import('./CategoriesList'));

export function Layout(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();

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
      <ApplyButton />
    </Wrapper>
  );
}