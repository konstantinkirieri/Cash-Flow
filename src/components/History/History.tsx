import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";
import "../HistoryItem/historyItem.scss";
import { useNavigate } from 'react-router-dom';
//import { HistoryItem } from '../HistoryItem/HistoryItem';
import HistoryCalendar from '../HistoryCalendar/HistoryCalendar';
import { logOut, userDataRef } from "../../services/firebase";
import "../Switcher/switch.scss";
import ListItem from '@mui/material/ListItem';
import { store } from '../store';
import { remove } from 'firebase/database';
import { db } from "../../services/firebase";
import { ref } from "firebase/database";
import { useDispatch } from "react-redux";
import { deleteItem } from '../store/items/actions';
import React from 'react';


export const History = () => {

  const itemsList: any = store.getState().items.itemsList;

  //const dispatch = useDispatch();
  // const handleDeleteClick = () => {
  //   dispatch(deleteItem(itemsList.dataId));
  // };
  const handleDeleteClick = (itemsList: any) => {
        remove(ref(db, `UserData/${itemsList.dataId}`))
  }

  const navigate = useNavigate();

  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/")
  };

  return (
    <div className='historyPage'>
      <div className='historyMenu'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
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
                navigate("/switcher")
              }}>Main</li>
              <li className="dropdownItem" onClick={() => {
                navigate("/addcategory")
              }}>Add category</li>
              <li className="dropdownItem signout" onClick={
                handleLogOutClick}>Sign Out</li>
            </ul>
          </div>
        </details>
      </div>
      <h2 className='historyHeader'>History</h2>

      <HistoryCalendar />
      <Divider className='divider' />
      <List className='historyList'>
        {Object.keys(itemsList).map((id) => {
          return (
            <ListItem key={itemsList[id].dataId}>
              <div className="listItem">
                <img className='historyImg' src={itemsList[id].img} alt=''></img>
                <div className='list'>{itemsList[id].date}</div>
                <div className='list'>{itemsList[id].inputValue}</div>
                <details className="dropdownSummary">
                  <summary className="dropdownSummary">
                    ...
                  </summary>
                  <div className="dropdownHistory">
                    <button className="dropdownBtn">Edit</button><br></br>
                    <button className="dropdownBtn" onClick={() => handleDeleteClick(itemsList)}>Delete</button>
                  </div>
                </details>
                <Divider className='dividerItem' />
                {/* <HistoryItem item={itemsList} /> */}
              </div>
            </ListItem>
          )
        })
        }
      </List>

    </div>
  )
}

