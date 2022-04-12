const API = "https://raw.githubusercontent.com/marieStamp/FinalProject/master/expenses.json"

export function GetFetch() {
    fetch(API)
    .then(res => res.json())
    .then(res => console.log(res.items))
}