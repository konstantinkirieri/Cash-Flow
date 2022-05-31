import { useState } from "react";

export const Switcher = () => {
    const [typeIcon, setTypeIcon] = useState < 1 | 2 >(2) ;

    const handleClickExpenses: any = () => {
      setTypeIcon(2);
    }
  
    const handleClickIncome: any = () => {
      setTypeIcon(1);
    }

    return <div className="switcher">
    <button
    className={"exp-btn" + (typeIcon === 2 ? " btn_focus" : "")}
    onClick={handleClickExpenses}
    >
    Expenses
    </button>
    <button
    className={"inc-btn" + (typeIcon === 1 ? " btn_focus" : "")}
    onClick={handleClickIncome}
    >
    Income
    </button>
    </div>

     }