import React from "react";
import { useState } from "react";
import Categories from "../Category/Category";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import "./switch.scss";
import "../KeyBoard/KeyBoard.scss";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { logOut } from "../../services/firebase";
import { categoriesList } from "../Category/Category";
import { set, ref } from "firebase/database";
import { db } from "../../services/firebase";
import { v4 as uuidv4 } from "uuid";

// чтобы экспортировать в Router и AllCategories "writeToDatabase" его нужно поставить сюда на верхний уровень, 
// но на верхнем уровне нельзя использовать useState

// const [inputValue, setInputValue] = useState<string | number>("");

//   const handleKeyboardChange = (e: any) => {
//     setInputValue(e.target.value);
//   };


//  export const writeToDatabase = () => {
//         const newId = uuidv4();
//         //const date = new Date();
//         //addItemWithFb({name: inputValue, id: newId, date: date});
//         set(ref(db, `/UsersData/${newId}`), {inputValue, newId})
//         console.log("added to firebase");
//         setInputValue("");
//       };

export const Switcher: React.FC = ({value, onChange, onClick}: any) => {
 
  const [typeIcon, setTypeIcon] = useState < 1 | 2 >(2);

  const handleClickExpenses: any = () => {
    setTypeIcon(2);
  };

  const handleClickIncome: any = () => {
    setTypeIcon(1);
  };

  const navigate = useNavigate();
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  //const [inputValue, setInputValue] = useState<string | number>("");

  //const handleKeyboardChange = (e: any) => {
    //onChange(e.target.value);
  //};


  const writeToDatabase = () => {
        const newId = uuidv4();
        //const date = new Date();
        //addItemWithFb({name: inputValue, id: newId, date: date});
        set(ref(db, `/UsersData/${newId}`), {value, newId})
        console.log("added to firebase");
        onChange("");
      };

  return (
    <div className="mainPage">
      <div className="keyboardHead">
        <div className="report-icon">
          <img
            className="report-icon"
            src="../images/report1.png"
            alt=""
            onClick={() => {
              navigate("/report");
            }}
          />
        </div>
        <details className="dropdownSummary">
          <summary className="dropdownSummary">
            <MenuIcon className="menu" />
          </summary>
          <div className="dropdownMenu">
            <ul>
              <li
                className="dropdownItem"
                onClick={() => {
                  navigate("/addcategory");
                }}
              >
                Add category
              </li>
              <li
                className="dropdownItem"
                onClick={() => {
                  navigate("/history");
                }}
              >
                History
              </li>
              <li className="dropdownItem signout" onClick={handleLogOutClick}>
                Sign Out
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div className="switcher">
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
      
        <KeyBoard value={value} onChange={onChange} />
        <Categories cats={categoriesList.filter((CategoriesList: { typeId: number; }) => CategoriesList.typeId === typeIcon)} />
    </div>
  );
};