import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";
import { useNavigate } from 'react-router-dom';
import HistoryCalendar from '../HistoryCalendar/HistoryCalendar';
import { db } from "../../services/firebase";
import React from 'react';
import { ref, remove } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteItems } from '../store/history/actions';
import { Menu } from "../Menu/Menu";
import { selectItemsList } from '../store/history/selectors';
import { selectDataHistoryCalendar } from '../store/calendar/selectors';

export const History = () => {
  const dispatch = useDispatch()
  const itemsList: any = useSelector(selectItemsList)
  const getDataHistoryCalendar = useSelector(selectDataHistoryCalendar)
  const itemsListFiltered: any = []
  const handleDeleteClick = (elem: any) => {
    remove(ref(db, `UserData/${elem.dataId}`))
    dispatch(getDeleteItems(elem.dataId))
  }
  const navigate = useNavigate();
  /**
   * Фильтрация по дате из store 
   */
  if (getDataHistoryCalendar) {
    for (let i = 0; i < itemsList.length; i++) {
      if (Date.parse(getDataHistoryCalendar[0]) <= Date.parse(itemsList[i].date.split(".").reverse().join("-"))) {
        if (Date.parse(getDataHistoryCalendar[1]) >= Date.parse(itemsList[i].date.split(".").reverse().join("-"))) {
          itemsListFiltered.push(itemsList[i])
        }
      }
    }
  }
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
        <Menu />
      </div>
      <h2 className='historyHeader'>History</h2>

      <HistoryCalendar />
      <Divider className='dividerItem' />
      <div className='historyList'>
        {Object.keys(itemsListFiltered).map((id) => {

          return (
            <div className="listItem" key={itemsListFiltered[id].dataId}>
              {/* <div className="listItem"> */}
              <img className='historyImg' src={itemsListFiltered[id].img} alt=''></img>
              <div className='list'>{itemsListFiltered[id].date}</div>
              <div className={itemsListFiltered[id].typeId === 'Income' ? 'listIncome' : 'list'}>{itemsListFiltered[id].inputValue}</div>
              <details className="dropdownSummary">
                <summary className="dropdownSummary">
                  ...
                </summary>
                <div className="dropdownHistory">
                  <button className="dropdownBtn">Edit</button><br></br>
                  <button className="dropdownBtn" onClick={() => handleDeleteClick(itemsListFiltered[id])}>Delete</button>
                </div>
              </details>
            </div>
            // <Divider className='dividerItem' />
          )
        })
        }
      </div>
    </div >
  )
}

