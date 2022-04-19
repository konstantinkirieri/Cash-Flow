import { DELETE_ITEM, GET_DATA } from "./actions";

export const initialItems: any = [];

export const itemsReducer = (state = initialItems, { type, payload }: any) => {
    switch (type) { 
    case DELETE_ITEM:
      return state.filter(({ id }: any) => id !== payload.itemId);
        
    case GET_DATA:
      return {
          ...state,
          items: !state.items
      }
      
    default:
      return state;
}
}