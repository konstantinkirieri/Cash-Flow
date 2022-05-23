import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";
import { useNavigate } from 'react-router-dom';
import { HistoryItem } from '../HistoryItem/HistoryItem';
import HistoryCalendar from '../HistoryCalendar/HistoryCalendar';
import React, { useEffect } from 'react';
import { logOut } from "../../services/firebase";
import "../Switcher/switch.scss";
import { onValue } from 'firebase/database';
import { useState } from "react";
import { userDataRef } from '../../services/firebase';
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../store/items/selectors";
import { initItemsTracking } from "../store/items/actions";

//export const itemsList: IList[] = [
//   {
//     id: 1,
//     categoryId: 1,
//     amount: 1000,
//     date: '15.03.2022'
//   },
//   {
//     id: 2,
//     categoryId: 2,
//     amount: 500,
//     date: '15.03.2022'
//   },
//   {
//     id: 3,
//     categoryId: 4,
//     amount: 5000,
//     date: '05.03.2022'
//   },
//   {
//     id: 4,
//     categoryId: 3,
//     amount: 3600,
//     date: '05.03.2022'
//   },
//   {
//     id: 5,
//     categoryId: 2,
//     amount: 1200,
//     date: '15.03.2022'
//   },
//   {
//     id: 6,
//     categoryId: 5,
//     amount: 1190,
//     date: '07.03.2022'
//   },
//   {
//     id: 7,
//     categoryId: 6,
//     amount: 1100,
//     date: '07.03.2022'
//   }
//  ]

// interface IList {
//   dataId: number;
//   date: number | string;
//   img: string;
//   inputValue: number;
// }
// const categoryList: CList[] = [
//     {
//         id: 1,
//         link: '#'
//     },
//     {
//         id: 2,
//         link: '#'
//     },
//     {
//         id: 3,
//         link: '#'
//     },
//     {
//         id: 4,
//         link: '#'
//     },
//     {
//         id: 5,
//         link: '#'
//     },
//     {
//         id: 6,
//         link: '#'
//     }
// ]

// interface CList {
//   id: number;
//   link: string;
// }

// //Здесь черновой вариант, все todo, todos, setTodos нужно заменять
  // useEffect(() => {
  //   onValue(userDataRef, (snapshot) => {
  //     setItems([]);
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       Object.values(data).map((item) => {
  //        return setItems((itemsList => [...itemsList, item])
  //       )})
  //     }
  //   })
  // }, [])

export const History = () => {

  const navigate = useNavigate();
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/")
  };

  const itemsList: any[] = []; // либо const itemsList = useSelector(selectChats); но так ошибку по map выдает
   const dispatch = useDispatch();

   useEffect(() => {
  dispatch(initItemsTracking());
   }, [dispatch]);



    return (
      <div className='historyPage'>
        <div className='historyMenu'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //sx={{ mr: 2 }}
            onClick={() => {
              navigate("/report")
               }}>  
            <ArrowBackIosIcon className='arrowBack'></ArrowBackIosIcon>
          </IconButton>    
          <details className="dropdownSummary">
                <summary className="dropdownSummary">
                <MenuIcon className='menu' />
            </summary>
            <div className="dropdownMenu">
                <ul>
                    <li className="dropdownItem" onClick={() => {
                            navigate("/switcher")}}>Main</li>
                    <li className="dropdownItem"onClick={() => {
                            navigate("/addcategory")}}>Add category</li>
                    <li className="dropdownItem signout"onClick={
                             handleLogOutClick}>Sign Out</li>
                </ul>
            </div>
            </details>
        </div>
        <h2 className='historyHeader'>History</h2>
        
        <HistoryCalendar /> 
        <Divider className='divider' />
        <List className='historyList'>
          {itemsList.map((item: any) => {
            return (
               <div key={item.dataId}>
                <HistoryItem item={item} />
               </div>
              
          )})
          }
        </List>
       
      </div>
    )
}

