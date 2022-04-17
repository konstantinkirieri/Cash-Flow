import React from "react";
import Categories from "../Category/Category";
// import { useSatate } from "react";
import "./switch.scss";

const Switcher: React.FC = () => {

    const handleClickExpenses: any = () => {
        // <Categories />;
        return (
            <div>Hello</div>
        )
    }

    const handleClickIncome: any = () => {
        <Categories />;
    };
    
    return (
        <div className='switcher'>
            <button className="exp-btn" autoFocus onClick={handleClickExpenses}>
                Expenses
            </button>    
            <button className="inc-btn" onClick={handleClickIncome}>
                Income
            </button>
        </div>
    )
}


export default Switcher;  