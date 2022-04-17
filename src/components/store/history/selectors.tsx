import { REQUEST_STATUS } from "../../GetFetch/GetFetch";

export const selectItemsList = (state: any) => state.items.itemsList;
export const selectItemsLoading = (state: any) =>
  state.items.request.status === REQUEST_STATUS.LOADING;
export const selectItemsError = (state: any) => state.items.request.error;