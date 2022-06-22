import { GET_DATA_CALENDAR } from "./actions";

const initialState = {
    dataCalendar: "",
}

export const calendarReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_DATA_CALENDAR:
            return {
                ...state,
                dataCalendar: payload,
            }

        default:
            return state
    };
}