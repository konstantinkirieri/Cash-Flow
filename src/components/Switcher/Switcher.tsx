import React, { useState } from "react";
import Categories from "../Category/Category";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import "./switch.scss";
import "../KeyBoard/KeyBoard.scss";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { logOut } from "../../services/firebase";
import { categoriesList } from "../Category/Category";

export const Switcher: React.FC = () => {
 
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

  // const [inputValue, setInputValue] = useState<string | number>("");

  // const handleKeyboardChange = (e: any) => {
  //   setInputValue(e.target.value);
  // };


    // const writeToDatabase = () => {
    //     const newId = uuidv4();
    //     //const date = new Date();
    //     //addItemWithFb({name: inputValue, id: newId, date: date});
    //     set(ref(db, `/${newId}`), {inputValue, newId})
    //     console.log("added to firebase");
    //     setInputValue("");
    //   };


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
      
        <KeyBoard />
        <Categories cats={categoriesList.filter((CategoriesList: { typeId: number; }) => CategoriesList.typeId === typeIcon)} />
    </div>
  );
};