import { REQUEST_STATUS } from "../../GetFetch/GetFetch";
import {
  DELETE_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE,
  REQUEST_ITEMS_LOADING,
  REQUEST_ITEMS_SUCCESS,
} from "./actions";

const initialState = {
  itemsList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};


export const itemsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case REQUEST_ITEMS_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_ITEMS_SUCCESS:
      return {
        ...state,
        itemsList: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_ITEMS_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    case DELETE_ITEMS_SUCCESS:
      const toDelete = { ...state };
      toDelete.itemsList = toDelete.itemsList.filter((elem: any) => elem.dataId !== payload)
      return toDelete;
    default:
      return state;
  }
};