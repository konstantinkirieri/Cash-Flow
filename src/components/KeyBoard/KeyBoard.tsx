import React, { useState } from "react";
import "./KeyBoard.scss";
import "../Switcher/switch.scss";
import { v4 as uuidv4 } from "uuid";
import { set, ref } from "firebase/database";
import { db } from "../../services/firebase";
import IconButton from '@mui/material/IconButton';
import  Categories  from "../Category/Category";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const KeyBoard = () => {
    const [typeId, setTypeId] = useState<"Expences" | "Income">("Expences");
    const [inputValue, setInputValue] = useState("");
    const [img, setImg] = useState('images/Icons/house.png');
    const [view, setView] = useState(false);
    const [startDate, setStartDate] = useState<any>(new Date());

    const date = startDate.toLocaleDateString();

    const handleClickExpenses: any = () => {
        setTypeId("Expences");
    };
    
    const handleClickIncome: any = () => {
        setTypeId("Income");
    }

    const handleImgChange = (icon: string) => {
        setImg(icon)
        setView(false)
      }

    const clickBtn = (e: any) => {
        e.preventDefault();
        let value = e.target.value;
        setInputValue(inputValue + value);
    };
    const deleteAllData = (e: any) => {
        e.preventDefault();
        setInputValue("");
    }

    const deleteValue = (e: any) => {
        e.preventDefault();
        setInputValue(inputValue.slice(0, -1));
    };

    const writeToDatabase = () => {
        const dataId = uuidv4();
        //const date = (new Date()).toLocaleDateString();
        set(ref(db, `UserData/${dataId}`), {dataId, inputValue, img, date, typeId});
        console.log("added to firebase");
        setInputValue("");
        setImg("images/Icons/house.png");
        setTypeId("Expences");
        setStartDate(new Date());
      };

    return (
        <>
        <div className="switcher">
        <button
          className={"exp-btn" + (typeId === "Expences" ? " btn_focus" : "")}
          onClick={handleClickExpenses}
        >
          Expenses
        </button>
        <button
          className={"inc-btn" + (typeId === "Income" ? " btn_focus" : "")}
          onClick={handleClickIncome}
        >
          Income
        </button>
      </div>
        <form className="kbd-form">
            <div className="keyboardField">
            <input
                className="input-amount"
                type="text"
                placeholder="Enter amount"
                value={inputValue} onChange={clickBtn}
            />
            <label className="keyboardLabel">
                <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                    withPortal
                />
            <img className="keyboardCalendar" src="images/calendar.svg" alt="calendar"></img>
            </label>
            <img className="keyboardImg" src={img} alt="icon"
                onClick={() => {
                setView(!view)
                }}>
            </img>
            <IconButton onClick={writeToDatabase}>
          <img className="category-tick" src="images/category-ok.png" alt="ok">
          </img>
      </IconButton>
      </div>
            <div className="keyboard-wrap">
                <button className="keybrd-btn" value="1" onClick={clickBtn}>
                    1
                </button>
                <button className="keybrd-btn" value="2" onClick={clickBtn}>
                    2
                </button>
                <button className="keybrd-btn" value="3" onClick={clickBtn}>
                    3
                </button>
                <button className="keybrd-btn" value="4" onClick={clickBtn}>
                    4
                </button>
                <button className="keybrd-btn" value="5" onClick={clickBtn}>
                    5
                </button>
                <button className="keybrd-btn" value="6" onClick={clickBtn}>
                    6
                </button>
                <button className="keybrd-btn" value="7" onClick={clickBtn}>
                    7
                </button>
                <button className="keybrd-btn" value="8" onClick={clickBtn}>
                    8
                </button>
                <button className="keybrd-btn" value="9" onClick={clickBtn}>
                    9
                </button>
                <button className="keybrd-btn" value="C" onClick={deleteAllData}>
                    C
                </button>
                <button className="keybrd-btn" value="0" onClick={clickBtn}>
                    0
                </button>
                <div className="keybrd-btn" onClick={deleteValue}>
                    <img className="img-btn" src="../images/Icons/back_arrow.png" alt=""/>
                </div>
            </div>
        </form>
        
        {view && <Categories callBack={handleImgChange}/>}

      </>
    );
}