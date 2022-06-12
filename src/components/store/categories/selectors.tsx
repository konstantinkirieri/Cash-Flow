import { REQUEST_STATUS } from "../../GetFetch/GetFetch";

export const selectCategoriesList = (state: any) => state.categories.categoriesList;
export const selectCategoriesLoading = (state: any) =>
  state.categories.request.status === REQUEST_STATUS.LOADING;
export const selectCategoriesError = (state: any) => state.categories.request.error;