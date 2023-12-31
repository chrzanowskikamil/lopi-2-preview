import { useReducer } from 'react';
import { Product } from '../../../types/ProductsResponse';

import {
  THE_HIGHEST_MONEY_VALUE,
  THE_LOWEST_MONEY_VALUE,
  INITIAL_CURRENT_PAGE,
} from './CategoriesVariables';

import { SortType, SortOrder } from './CategoriesEnums';

export interface CategoriesReducerProps {
  state: StateProps;
  onProductsSort: (
    allProducts: Product[],
    sortType: string,
    sortOrder: string
  ) => void;
  onShowMore: (allProducts: Product[], pageNumber: number) => void;
  onHigherMoneyValueFilterChange: (higherMoneyValue: number) => void;
  onLowerMoneyValueFilterChange: (lowerMoneyValue: number) => void;
  onAvailabilityFilterChange: (availabilityValue: boolean) => void;
}

export interface StateProps {
  higherMoneyValueFilter: number;
  sortType: string;
  sortOrder: string;
  currentPage: number;
  lowerMoneyValueFilter: number;
  availability: boolean;
  allProducts: Product[];
}

type ActionProps =
  | {
      type: 'on_product_sort';
      allProducts: Product[];
      sortType: string;
      sortOrder: string;
    }
  | { type: 'on_show_more'; allProducts: Product[]; pageNumber: number }
  | { type: 'on_higher_money_value_filter_change'; higherMoneyValue: number }
  | { type: 'on_lower_money_value_filter_change'; lowerMoneyValue: number }
  | { type: 'on_availability_filter_change'; availabilityValue: boolean };

const categoriesReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'on_product_sort': {
      return {
        ...state,
        currentPage: INITIAL_CURRENT_PAGE,
        allProducts: action.allProducts,
        sortType: action.sortType,
        sortOrder: action.sortOrder,
      };
    }
    case 'on_show_more': {
      return {
        ...state,
        allProducts: action.allProducts,
        currentPage: action.pageNumber,
      };
    }
    case 'on_higher_money_value_filter_change': {
      return {
        ...state,
        higherMoneyValueFilter: action.higherMoneyValue,
      };
    }
    case 'on_lower_money_value_filter_change': {
      return {
        ...state,
        lowerMoneyValueFilter: action.lowerMoneyValue,
      };
    }
    case 'on_availability_filter_change': {
      return {
        ...state,
        availability: action.availabilityValue,
      };
    }

    default: {
      return state;
    }
  }
};

export const useCategoriesReducer = ({ products }: { products: Product[] }) => {
  const initialState = {
    allProducts: products,
    sortType: SortType.PRICE,
    sortOrder: SortOrder.ASCENDING,
    currentPage: INITIAL_CURRENT_PAGE,
    lowerMoneyValueFilter: THE_LOWEST_MONEY_VALUE,
    higherMoneyValueFilter: THE_HIGHEST_MONEY_VALUE,
    availability: true,
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  const onProductsSort = (
    allProducts: Product[],
    sortType: string,
    sortOrder: string
  ) => {
    dispatch({
      type: 'on_product_sort',
      allProducts,
      sortType,
      sortOrder,
    });
  };

  const onShowMore = (allProducts: Product[], pageNumber: number) => {
    dispatch({
      type: 'on_show_more',
      allProducts,
      pageNumber,
    });
  };

  const onHigherMoneyValueFilterChange = (higherMoneyValue: number) => {
    dispatch({
      type: 'on_higher_money_value_filter_change',
      higherMoneyValue,
    });
  };

  const onLowerMoneyValueFilterChange = (lowerMoneyValue: number) => {
    dispatch({
      type: 'on_lower_money_value_filter_change',
      lowerMoneyValue,
    });
  };

  const onAvailabilityFilterChange = (availabilityValue: boolean) => {
    dispatch({
      type: 'on_availability_filter_change',
      availabilityValue,
    });
  };

  return {
    onLoadMoreProducts: {
      sortOrder: state.sortOrder,
      sortType: state.sortType,
      currentPage: state.currentPage,
      allProducts: state.allProducts,
      onShowMore,
    },

    onProductsDisplay: {
      lowerMoneyValueFilter: state.lowerMoneyValueFilter,
      higherMoneyValueFilter: state.higherMoneyValueFilter,
      availability: state.availability,
      allProducts: state.allProducts,
    },

    onSidebarFilter: {
      onAvailabilityFilterChange,
      lowerMoneyValueFilter: state.lowerMoneyValueFilter,
      higherMoneyValueFilter: state.higherMoneyValueFilter,
      onLowerMoneyValueFilterChange,
      onHigherMoneyValueFilterChange,
      availability: state.availability,
    },

    onProductsSort,
  };
};
