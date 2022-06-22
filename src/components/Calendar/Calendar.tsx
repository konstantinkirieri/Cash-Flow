import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDataCalendar } from "../store/calendar/actions";
import "./calendar.scss";

export function Calendar() {
  const dispatch = useDispatch()
  let currentDay: number | string = new Date().getDate();
  let currentMonth: number | string = new Date().toLocaleString("eng", { month: "long" });
  let currentYear: number = new Date().getFullYear();

  let [outputMessage, setDate] = useState<string | number>(currentMonth);
  const handleClickYear: any = () => {
    setDate(currentYear);
    dispatch((getDataCalendar({ elem: currentYear, type: "Year" })))
  };
  const handleClickDay: any = () => {
    setDate(currentDay);
    dispatch((getDataCalendar({ elem: currentDay, type: "Day" })))
  };
  const handleClickMonth: any = () => {
    setDate(currentMonth);
    let getMonth: any = new Date().getMonth()
    if ((getMonth + 1) <= 9) {
      getMonth = `0${getMonth + 1}`
    }
    dispatch((getDataCalendar({ elem: getMonth, type: "Month" })))
  };

  if (outputMessage === currentDay) {
    outputMessage = "Today"
  }

  return (
    <div className="calendarBox">
      <div className="dates">
        <button className={outputMessage === 'Today' ? 'datesBtnFocus left' : 'datesBtn left'} onClick={handleClickDay}>
          Day
        </button>
        <button className={outputMessage === currentMonth ? 'datesBtnFocus' : 'datesBtn'} onClick={handleClickMonth}>
          Month
        </button>
        <button className={outputMessage === currentYear ? 'datesBtnFocus right' : 'datesBtn right'} onClick={handleClickYear}>
          Year
        </button>
      </div>
      <h2 className="outputDate">{outputMessage}</h2>
    </div>
  );
}
