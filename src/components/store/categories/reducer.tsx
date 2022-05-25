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
        categoriesList: payload,
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