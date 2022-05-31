import React, { useState } from "react";
//import Categories from "../Category/Category";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import "./switch.scss";
import "../KeyBoard/KeyBoard.scss";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { logOut } from "../../services/firebase";
//import { categoriesList } from "../Category/Category";
import { categoryRef } from "../../services/firebase";
import {query, orderByChild} from "firebase/database";
import { db } from "../../services/firebase";
import { useEffect } from "react";
import { ref } from "firebase/database";
import { createPrivateKey } from "crypto";

export const Switcher = () => {
 
//  const [typeIcon, setTypeIcon] = useState < 1 | 2 >(2) ;

//   const handleClickExpenses: any = () => {
//     setTypeIcon(2);
//   };

//   const handleClickIncome: any = () => {
//     setTypeIcon(1);
//   };


// 2 наброска, как фильтровать по Expences, потом что-то подобное нужно делать по Income и вешать это на кнопки Income и Expences
// как я понимаю

// export const fetchCatByExpences = () => {
//   return () => {
//     const keyRef = ref(db, '/CategoriesList/' + privateKey);
//     keyRef
//       .orderByChild('type')
//       .equalTo("Expences")
//       .on('value', (snapshot: any) => {
//         const catList: any[] = [];
//         snapshot.forEach((child: any) => catList.push(child.val()));

//         console.log(catList);
        
//   });
// };
// }
//--------------------------------------------
// const handleClickExpenses = () => {
// let CategoriesList: any = [];
//      CategoriesList
//       .orderByChild('type')
//       .equalTo("Expences")
//             .onValue(categoryRef, (snapshot: any) => {
           
//                 let CopyCatArray = snapshot.val();
//                 Object.keys(CopyCatArray).forEach((id) => {
//                   CategoriesList.push(CopyCatArray[id]);
//                   console.log(CategoriesList);
//               })    
//           });
//         }
//--------------------------------


  const navigate = useNavigate();
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/");
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
      {/* <div className="switcher">
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
      </div> */}
      
        <KeyBoard />
        {/* <Categories cats={categoriesList.filter((CategoriesList: { typeId: number; }) => CategoriesList.typeId === typeIcon)} /> */}
    </div>
  );
};