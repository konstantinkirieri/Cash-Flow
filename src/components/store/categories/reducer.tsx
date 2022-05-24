// import { ADD_CATEGORY, DELETE_CATEGORY, SET_CATEGORIES } from "./actions";

// const initialCategories: any = [];

// export const itemsReducer = (state = initialCategories, { type, payload }: any) => {
//   switch (type) {
//     case ADD_CATEGORY:
//       return [...state, payload];
//     case DELETE_CATEGORY:
//       return state.filter(({ id }: any) => id !== payload.categoryId);
//     case SET_CATEGORIES:
//       return payload;
//     default:
//       return state;
//   }
// };

import { REQUEST_STATUS } from "../../GetFetch/GetFetch";
import {
  REQUEST_CATEGORIES_FAILURE,
  REQUEST_CATEGORIES_LOADING,
  REQUEST_CATEGORIES_SUCCESS,
} from "./actions";

  const initialState = {
  categoriesList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
  };


export const categoriesReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case REQUEST_CATEGORIES_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_CATEGORIES_SUCCESS:
      return {
        ...state,
        itemsList: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_CATEGORIES_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default:
      return state;
    }
};