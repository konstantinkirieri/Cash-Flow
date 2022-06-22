export const GET_DATA_CALENDAR = "GET::DATA::CALENDAR";

export const getDataCalendar = (elem: any) => ({
    type: GET_DATA_CALENDAR,
    payload: elem
})