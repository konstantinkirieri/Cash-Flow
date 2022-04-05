

export const DELETE_ITEM = "ITEMS::DELETE_ITEM";
export const deleteItem = (id: number) => ({
    type: DELETE_ITEM,
    payload: {
      itemId: id,
    },
  });

//export const deleteItemWithFb = (itemId) => (dispatch) => {
//    getItemRefById(itemId.id).remove();
//  };