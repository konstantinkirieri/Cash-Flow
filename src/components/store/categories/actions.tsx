import { API } from "../../GetFetch/GetFetch";

export const REQUEST_CATEGORIES_LOADING = "CATEGORIES::REQUEST_LOADING";
export const REQUEST_CATEGORIES_FAILURE = "CATEGORIES::REQUEST_FAILURE";
export const REQUEST_CATEGORIES_SUCCESS = "CATEGORIES::REQUEST_SUCCESS";

export const getCategoriesLoading = () => ({
  type: REQUEST_CATEGORIES_LOADING,
});
export const getCategoriesSuccess = (categories: any) => ({
  type: REQUEST_CATEGORIES_SUCCESS,
  payload: categories,
});
export const getCategoriesFailure = (err: any) => ({
  type: REQUEST_CATEGORIES_FAILURE,
  payload: err,
});

export const getCategories = () => async (dispatch: any) => {
  dispatch(getCategoriesLoading());

  try {
    const response = await fetch(API);
    console.log(response);

    if (!response.ok) {
      throw new Error("not ok");
    }

    const result = await response.json();

    dispatch(getCategoriesSuccess(result));

  } catch (err: any) {
    console.warn(err);
    dispatch(getCategoriesFailure(err));
  }
};