import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";
import { useNavigate } from 'react-router-dom';
import HistoryCalendar from '../HistoryCalendar/HistoryCalendar';
import { db, logOut } from "../../services/firebase";
//import "../Switcher/switch.scss";
import ListItem from '@mui/material/ListItem';
import { store } from '../store';
import React from 'react';
import { ref, remove } from 'firebase/database';


export const History = () => {

  const itemsList: any = store.getState().items.itemsList;
  const handleDeleteClick = (elem: any) => {
    remove(ref(db, `UserData/${elem.dataId}`))
    console.log(elem)
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
                <div className={itemsList[id].typeId === 'Income' ? 'listIncome' : 'list'}>{itemsList[id].inputValue}</div>
                <details className="dropdownSummary">
                  <summary className="dropdownSummary">
                    ...
                  </summary>
                  <div className="dropdownHistory">
                    <button className="dropdownBtn">Edit</button><br></br>
                    <button className="dropdownBtn" onClick={() => handleDeleteClick(itemsList[id])}>Delete</button>
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

    </div >
  )
}

