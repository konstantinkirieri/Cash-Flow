import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import './historyCalendar.scss';
import React from "react";

export function HistoryCalendar() {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;
    return (
      <div className="historyCalendar">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        dateFormat="dd/MM/yyyy"
        withPortal
      />
      </div>
    )
}

export default HistoryCalendar;