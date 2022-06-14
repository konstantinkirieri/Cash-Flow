export const DELETE_ITEM = "ITEMS::DELETE_ITEM";

export const deleteItem = (dataId: number | string) => ({
    type: DELETE_ITEM,
    payload: {
      itemId: dataId,
    },
  });

  