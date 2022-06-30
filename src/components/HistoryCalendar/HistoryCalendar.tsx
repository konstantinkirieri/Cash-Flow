import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import './historyCalendar.scss';
import React from "react";
import { useDispatch } from "react-redux";
import { getDataHistoryCalendar } from "../store/calendar/actions";

export function HistoryCalendar() {
  const dispatch = useDispatch()
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  dispatch(getDataHistoryCalendar(dateRange))
  return (
    <label className="historyCalendar">
      <DatePicker className="datepickerHistory"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        dateFormat="dd/MM/yyyy"
        withPortal
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
      <img className="calendar" src="images/calendar-v2.png" alt="calendar"></img>
    </label>
  )
}

export default HistoryCalendar;