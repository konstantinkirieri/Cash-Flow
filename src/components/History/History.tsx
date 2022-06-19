import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";
import { useNavigate } from 'react-router-dom';
import HistoryCalendar from '../HistoryCalendar/HistoryCalendar';
import { db } from "../../services/firebase";
import { store } from '../store';
import React from 'react';
import { ref, remove } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { getDeleteItems } from '../store/history/actions';
import { Menu } from "../Menu/Menu";

export const History = () => {
  const dispatch = useDispatch()

  const itemsList: any = store.getState().items.itemsList;
  const handleDeleteClick = (elem: any) => {
    const index = itemsList.findIndex((element: any, index: number) => {
      if (element.dataId === elem.dataId) {
        return true
      }
    })
    remove(ref(db, `UserData/${elem.dataId}`))
    dispatch(getDeleteItems(index))
  }

  const navigate = useNavigate();

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
        {Object.keys(itemsList).map((id) => {

          return (
            <div className="listItem" key={itemsList[id].dataId}>
              {/* <div className="listItem"> */}
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
            </div>
            // <Divider className='dividerItem' />
          )
        })
        }
      </div>
    </div >
  )
}

