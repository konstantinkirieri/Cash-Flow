// import React, { useState } from "react";
//import Categories from "../Category/Category";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import "./access.scss";
import "../KeyBoard/KeyBoard.scss";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { logOut } from "../../services/firebase";
import { Switcher } from "../Switcher/Switcher";
//import { categoriesList } from "../Category/Category";
// import { categoryRef } from "../../services/firebase";
// import {query, orderByChild} from "firebase/database";
// import { db } from "../../services/firebase";
// import { useEffect } from "react";
// import { ref } from "firebase/database";
// import { createPrivateKey } from "crypto";

export const Access = () => {
 



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
      
        <Switcher />
        <KeyBoard />
        {/* <Categories cats={categoriesList.filter((CategoriesList: { typeId: number; }) => CategoriesList.typeId === typeIcon)} /> */}
    </div>
  );
};