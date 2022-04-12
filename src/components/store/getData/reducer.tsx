import { GetData } from "./actions"

const initialState = {
    items: {},
    categoryList: {},
}

export function setData(state = initialState, action: any) {
    switch (action.type) {
        case GetData:
            return {
                ...state,
                items: !state.items
            }
    
        default:
            return state;
    }
}