

export const DELETE_ITEM = "ITEMS::DELETE_ITEM";
export const deleteItem = (id: number) => ({
    type: DELETE_ITEM,
    payload: {
      itemId: id,
    },
  });


export const GET_DATA = "GETDATA::GET_DATA"
export const getData = (items: string) => ({
  type: GET_DATA,
  payload: items,
})

//export const deleteItemWithFb = (itemId) => (dispatch) => {
//    getItemRefById(itemId.id).remove();
//  };