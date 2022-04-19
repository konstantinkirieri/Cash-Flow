import { store } from "../store"
import { getData } from "../store/items/actions"

const API = "https://raw.githubusercontent.com/marieStamp/FinalProject/master/expenses.json"

export function GetFetch() {
    fetch(API)
    .then(res => res.json())
    .then(res => store.dispatch(getData(res)))
}