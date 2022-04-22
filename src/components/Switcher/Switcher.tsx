import React, { useState } from "react";
import { Categories } from "../Category/Category";
import KeyBoard from "../KeyBoard/KeyBoard";
import "./switch.scss";
import { categoriesList } from "../Category/Category";


const Switcher: React.FC = () => {

    // const [catView, setCatView] = useState(false);

    // const icons = {
        //     inc: [{}, {}, {}],
        //     exp: [{}, {}, {}]
        // }
        
        // const expView: [] = Categories;
        
        // icons[catView].map((item: {}, index: number, arr: []) => {
        //     if(index < 7) return (
        //     )
        // })

    const handleClickExpenses: any = () => {
        const expenses = categoriesList.filter(v => v.typeId === 2).slice(0,7);
        console.log(expenses);
        
        return (<Categories cats={expenses}/>);
    }

    const handleClickIncome: any = () => {
        const income = categoriesList.filter(v => v.typeId === 1);
        console.log(income);
        return (<Categories cats={income}/>);
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
        {/* <div>
            <Categories cats={categoriesList} />
        </div> */}
        </>
    )
}

export default Switcher;  