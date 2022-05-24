//import { useDispatch } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import { deleteItem } from '../store/items/actions';
//import { IconButton } from '@mui/material';
import "./historyItem.scss";
//import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { useDispatch } from 'react-redux';

export const HistoryItem = ({itemsList}: any) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
      dispatch(deleteItem(itemsList.dataId));
    };

    return (
              <>
          <ListItem className="listItem">
            <ListItemText className='listItem' primary={itemsList.date}/>
            <ListItemText className='listItem' primary={itemsList.img}/>
            <ListItemText className='listItem' primary={itemsList.inputValue}/>
            <details className="dropdownSummary">
          <summary className="dropdownSummary">
            ...
          </summary>
          <div className="dropdownHistory">
           <button className="dropdownBtn">Edit</button><br></br>
           <button  className="dropdownBtn" onClick={handleDeleteClick}>Delete</button>
          </div>
        </details>
    
          </ListItem>
          <Divider className='dividerItem'/>
        </>
      );
    };
                