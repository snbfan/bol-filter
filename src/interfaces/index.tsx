import { PropsWithChildren } from 'react';

export type BolSearchCategoryDTO = {
  data: string[];
};

export type BolSearchCategory = {
  favorite: boolean;
  name: string;
};

export type BolCategoryItemProps = {
  item: BolSearchCategory;
  onCategorySelect: (name: string) => void;
}

export type FiltersValue = {
  name: string;
}

export type BolButtonProps = PropsWithChildren & {
  onButtonClick: () => void;
  ariaLabel: string;
};

