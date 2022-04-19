import React, { useState } from "react";
import Categories from "../Category/Category";
import KeyBoard from "../KeyBoard/KeyBoard";
import "./switch.scss";

const Switcher: React.FC = () => {

    // const icons = {
    //     inc: [{}, {}, {}],
    //     exp: [{}, {}, {}]
    // }
    
    // const expView: [] = Categories;


    const [catView, setCatView] = useState<any>([Categories]);

    // icons[catView].map((item: {}, index: number, arr: []) => {
    //     if(index < 7) return (
    //        <Categories /> 
    //     )
    // })


    const handleClickExpenses: any = () => {
        setCatView(catView);
    }

    const handleClickIncome: any = () => {
        
    };
    
    return (
        <>
        <div className='switcher'>
            <button className="exp-btn" autoFocus onClick={handleClickExpenses}>
                Expenses
            </button>    
            <button className="inc-btn" onClick={handleClickIncome}>
                Income
            </button>
        </div>
        <div>
            <KeyBoard />
        </div>
        <div>
            <Categories />
        </div>
        </>
    )
}


export default Switcher;  