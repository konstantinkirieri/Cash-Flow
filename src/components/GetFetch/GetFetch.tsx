import { onValue } from "firebase/database";
import { userDataRef } from "../../services/firebase";
import { categoryRef } from "../../services/firebase";
import { store } from "../store";
import { getItemsSuccess } from "../store/history/actions";
import { getCategoriesSuccess } from "../store/categories/actions";

export const API = "https://raw.githubusercontent.com/marieStamp/FinalProject/master/expenses.json"

export function GetFetch() {
    fetch(API)
        .then(res => res.json())
}

export const REQUEST_STATUS = {
    IDLE: 0,
    LOADING: 1,
    SUCCESS: 2,
    FAILURE: 3,
};
/**
 * Функция берет данные из Firebase и передает в Store
 */
export function getDataFB(): void {
    onValue(userDataRef, (snapshot) => {
        const itemsList: any = []
        let CopyUserArray = snapshot.val();
        Object.keys(CopyUserArray).forEach((id) => {
            itemsList.push(CopyUserArray[id])
        })
        store.dispatch(getItemsSuccess(itemsList))
    })
    onValue(categoryRef, (snapshot) => {
        let categoriesList: any = [];
        let CopyCatArray = snapshot.val();
        Object.keys(CopyCatArray).forEach((id) => {
            categoriesList.push(CopyCatArray[id]);
        })
        store.dispatch(getCategoriesSuccess(categoriesList))
    });
}