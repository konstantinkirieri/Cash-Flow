import { API } from "../../GetFetch/GetFetch";

export const REQUEST_ITEMS_LOADING = "ITEMS::REQUEST_LOADING";
export const REQUEST_ITEMS_FAILURE = "ITEMS::REQUEST_FAILURE";
export const REQUEST_ITEMS_SUCCESS = "ITEMS::REQUEST_SUCCESS";
export const DELETE_ITEMS_SUCCESS = "DELETE::ITEMS::SUCCESS";

export const getItemsLoading = () => ({
  type: REQUEST_ITEMS_LOADING,
});
export const getItemsSuccess = (items: any) => ({
  type: REQUEST_ITEMS_SUCCESS,
  payload: items,
});
export const getItemsFailure = (err: any) => ({
  type: REQUEST_ITEMS_FAILURE,
  payload: err,
});
export const getDeleteItems = (item: any) => ({
  type: DELETE_ITEMS_SUCCESS,
  payload: item,
})

export const getItems = () => async (dispatch: any) => {
  dispatch(getItemsLoading());

  try {
    const response = await fetch(API);
    console.log(response);

    if (!response.ok) {
      throw new Error("not ok");
    }

    const result = await response.json();

    dispatch(getItemsSuccess(result));

  } catch (err: any) {
    console.warn(err);
    dispatch(getItemsFailure(err));
  }
};