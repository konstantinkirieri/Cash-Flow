import { GET_DATA_CALENDAR, GET_DATA_HISTORY_CALENDAR } from "./actions";

const initialState = {
    dataCalendar: "",
    dataHistoryCalendar: "",
}

export const calendarReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_DATA_CALENDAR:
            return {
                ...state,
                dataCalendar: payload,
            }
        case GET_DATA_HISTORY_CALENDAR:
            return {
                ...state,
                dataHistoryCalendar: payload,
            }

        default:
            return state
    };
}