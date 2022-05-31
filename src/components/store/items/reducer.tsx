import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "./actions";

const initialItems: any = [];

export const itemsReducer = (state = initialItems, { type, payload }: any) => {
  switch (type) {
    case ADD_ITEM:
      return [...state, payload];
    case DELETE_ITEM:
      return state.filter(({ dataId }: any) => dataId !== payload.itemId);
    case SET_ITEMS:
      return payload;
    default:
      return state;
  }
};