//import { set } from "firebase/database";
import { getItemRefById } from "../../../services/firebase";
// import { userDataRef } from "../../../services/firebase";
// import { onValue } from "firebase/database";


//export const ADD_ITEM = "ITEMS::ADD_ITEM";
export const DELETE_ITEM = "ITEMS::DELETE_ITEM";
//export const SET_ITEMS = "ITEMS::SET_ITEMS";

// export const addItem = (newItem: any) => ({
//   type: ADD_ITEM,
//   payload: newItem,
// });
export const deleteItem = (dataId: number | string) => ({
    type: DELETE_ITEM,
    payload: {
      itemId: dataId,
    },
  });

  // export const addItemWithFb = (newItem: any) => (dispatch: any) => {
  //   set(getItemRefById(newItem.dataId), { empty: true });
  //   set(getItemRefById(newItem.datId), newItem);
  // };
  
  // export const deleteItemWithFb = (itemId: any) => (dispatch: any) => {
  //  getItemRefById(itemId.dataId).remove();
  // }; 

  // export const setItems = (items: any) => ({
  //   type: SET_ITEMS,
  //   payload: items,
  // });
  
  // export const initItemsTracking = () => (dispatch: any) => {
  //   onValue(userDataRef, (itemsSnap: any) => {
  //     console.log(itemsSnap);
  //     const newItems: any[] = [];
  //     itemsSnap.forEach((snapshot: any) => {
  //       newItems.push(snapshot.val());
  //     });
  
  //     dispatch(setItems(newItems));
  //   });
  // };

  