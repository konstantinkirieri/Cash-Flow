import { DELETE_ITEM } from "./actions";

const initialItems: any = [];

export const itemsReducer = (state = initialItems, { type, payload }: any) => {
  switch (type) {

    case DELETE_ITEM:
      return state.filter(({ dataId }: any) => dataId !== payload.itemId);

    default:
      return state;
  }
};