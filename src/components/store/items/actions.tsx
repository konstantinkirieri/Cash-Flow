//import { set } from "firebase/database";
//import { getItemRefById } from "../../../services/firebase";

export const ADD_ITEM = "ITEMS::ADD_ITEM";
export const DELETE_ITEM = "ITEMS::DELETE_ITEM";

export const addItem = (newItem: any) => ({
  type: ADD_ITEM,
  payload: newItem,
});
export const deleteItem = (id: number) => ({
    type: DELETE_ITEM,
    payload: {
      itemId: id,
    },
  });

  //export const addItemWithFb = (newItem: any) => (dispatch: any) => {
    //set(getItemRefById(newItem.id), { empty: true });
    //set(getItemRefById(newItem.id), newItem);
  //};
  
  // export const deleteItemWithFb = (itemId: any) => (dispatch: any) => {
  //   getItemRefById(itemId.id).remove();
  // }; 
//export const deleteItemWithFb = (itemId) => (dispatch) => {
//    getItemRefById(itemId.id).remove();
//  };