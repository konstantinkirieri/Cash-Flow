import { useState } from "react";
import "./calendar.scss";

export function Calendar() {

  let currentDay: number | string = new Date().getDate();
  let currentMonth: number | string = new Date().toLocaleString("eng", { month: "long" });
  let currentYear: number = new Date().getFullYear();
  
  let [outputMessage, setDate] = useState<string | number>(currentMonth);
  const handleClickYear = () => {
    setDate(currentYear);
  };
  const handleClickDay = () => {
    setDate(currentDay);
  };
  const handleClickMonth = () => {
    setDate(currentMonth);
  };

  if (outputMessage === currentDay) {
    return (
      <>
        <div className="dates">
          <button className="datesBtn left" onClick={handleClickDay}>
            Day
          </button>
          <button className="datesBtn" onClick={handleClickMonth}>
            Month
          </button>
          <button className="datesBtn right" onClick={handleClickYear}>
            Year
          </button>
        </div>
        <div className="outputDate">Today</div>
      </>
    );
  } else {
    return (
      <>
        <div className="dates">
          <button className="datesBtn left" onClick={handleClickDay}>
            Day
          </button>
          <button className="datesBtn" onClick={handleClickMonth}>
            Month
          </button>
          <button className="datesBtn right" onClick={handleClickYear}>
            Year
          </button>
        </div>
        <div className="outputDate">{outputMessage}</div>
      </>
    );
  }
}
