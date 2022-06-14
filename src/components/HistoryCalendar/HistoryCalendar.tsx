import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import './historyCalendar.scss';
import React from "react";

export function HistoryCalendar() {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;
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
      />
      <img className="calendar" src="images/calendar-v2.png" alt="calendar"></img>
      </label>
    )
}

export default HistoryCalendar;