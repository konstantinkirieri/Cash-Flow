import React from "react";
import { useState } from "react";
import "./calendar.scss";

export function Calendar() {

  let currentDay: number | string = new Date().getDate();
  let currentMonth: number | string = new Date().toLocaleString("eng", { month: "long" });
  let currentYear: number = new Date().getFullYear();

  let [outputMessage, setDate] = useState<string | number>(currentMonth);
  const handleClickYear: any = () => {
    setDate(currentYear);
    console.log(currentYear)
  };
  const handleClickDay: any = () => {
    setDate(currentDay);
    console.log(currentDay)
  };
  const handleClickMonth: any = () => {
    setDate(currentMonth);
    console.log(currentMonth)
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
