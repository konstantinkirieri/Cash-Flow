export const GET_DATA_CALENDAR = "GET::DATA::CALENDAR";
export const GET_DATA_HISTORY_CALENDAR = "GET::DATA::HISTORY::CALENDAR"

export const getDataCalendar = (elem: any) => ({
    type: GET_DATA_CALENDAR,
    payload: elem
})

export const getDataHistoryCalendar = (elem: any) => ({
    type: GET_DATA_HISTORY_CALENDAR,
    payload: elem
})