import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, forwardRef } from "react";
import "./calendar.scss";

export function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  function onChangeDateHandler(value: any) {
    setStartDate(value);
  }

  return (
    <>
      <div className="calendar">
        <DatePicker
          className="date grey"
          selected={startDate}
          onChange={onChangeDateHandler}
          customInput={<ExampleCustomInput />}
          showYearPicker
          withPortal
          dateFormat="yyyy"
          yearItemNumber={4}
        />
        <DatePicker
          className="date"
          selected={startDate}
          onChange={onChangeDateHandler}
          customInput={<ExampleCustomInput />}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          withPortal
        />
        <DatePicker
          className="date grey"
          selected={startDate}
          onChange={onChangeDateHandler}
          customInput={<ExampleCustomInput />}
          dateFormat="dd/MM/yyyy"
          withPortal
        />
      </div>
      <h3 className="calendarOutput">March</h3>
    </>
  );
}

export default Calendar;
