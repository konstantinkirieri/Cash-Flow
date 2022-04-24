import React, { useState } from "react";
import { Categories } from "../Category/Category";
import KeyBoard from "../KeyBoard/KeyBoard";
import "./switch.scss";
import { categoriesList } from "../Category/Category";


export const Switcher: React.FC = () => {

    const [typeIcon, setTypeIcon] = useState<1 | 2>(2);

    const handleClickExpenses: any = () => {
        setTypeIcon(2)
    }

    const handleClickIncome: any = () => {
        setTypeIcon(1)
    };
    
    return (
        <>
            <div className='switcher'>

                <button className={"exp-btn" + (typeIcon === 2 ? " btn_focus" : "")} onClick={handleClickExpenses}>
                    Expenses
                </button>    
                <button className={"inc-btn" + (typeIcon === 1 ? " btn_focus" : "")} onClick={handleClickIncome}>
                    Income
                </button>
            </div>
            <KeyBoard />
            <Categories cats={categoriesList.filter(item => item.typeId === typeIcon)} />
        </>
    )
}

//export default Switcher;  