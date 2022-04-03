//import { useDispatch } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import { deleteItem } from '../store/items/actions';
import { IconButton } from '@mui/material';
import "./historyItem.scss";

export const HistoryItem = ({ item }: any) => {
    //const dispatch = useDispatch();
    const handleDeleteClick = () => {
      deleteItem(item.id);
    };

    return (
        <>
          <ListItem className="listItem">
            <ListItemText className='listItem' primary={item.categoryId}/>
            <ListItemText className='listItem' primary={item.amount}/>
            <ListItemText className='listItem' primary={item.date}/>
            <IconButton onClick={handleDeleteClick}><DeleteForeverIcon className='deleteBtn'></DeleteForeverIcon>
            </IconButton>
          </ListItem>
          <Divider className='divider'/>
        </>
      );
    };