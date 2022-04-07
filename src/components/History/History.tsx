import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";
//import Report from '../Report/Report';
//import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { HistoryItem } from '../HistoryItem/HistoryItem';
import HistoryCalendar from '../HistoryCalendar/HistoryCalendar';
// import { caregoriesList } from '../Category/Category'

export const itemsList: IList[] = [
  {
    id: 1,
    categoryId: 1,
    amount: 1000,
    date: '15.03.2022'
  },
  {
    id: 2,
    categoryId: 2,
    amount: 500,
    date: '15.03.2022'
  },
  {
    id: 3,
    categoryId: 4,
    amount: 5000,
    date: '05.03.2022'
  },
  {
    id: 4,
    categoryId: 3,
    amount: 3600,
    date: '05.03.2022'
  },
  {
    id: 5,
    categoryId: 2,
    amount: 1200,
    date: '15.03.2022'
  },
  {
    id: 6,
    categoryId: 5,
    amount: 1190,
    date: '07.03.2022'
  },
  {
    id: 7,
    categoryId: 6,
    amount: 1100,
    date: '07.03.2022'
  }
]

interface IList {
  id: number;
  categoryId: number;
  amount: number;
  date: number | string;
}
const categoryList: CList[] = [
    {
        id: 1,
        link: '#'
    },
    {
        id: 2,
        link: '#'
    },
    {
        id: 3,
        link: '#'
    },
    {
        id: 4,
        link: '#'
    },
    {
        id: 5,
        link: '#'
    },
    {
        id: 6,
        link: '#'
    }
]

interface CList {
  id: number;
  link: string;
}

export const History = () => {
    return (
      <div className='historyPage'>
        <div className='historyMenu'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //sx={{ mr: 2 }}
          >  
            <ArrowBackIosIcon className='arrowBack'></ArrowBackIosIcon>
          </IconButton>    
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //sx={{ mr: 2 }}
          >
            <MenuIcon className='menu' />
          </IconButton>
        </div>
        <h2 className='historyHeader'>History</h2>
        
        <HistoryCalendar /> 
        <Divider className='divider' />
        <List>
          {itemsList.map((item) => (
            
              <div key={item.id}>
                <HistoryItem item={item} />
              </div>
              
          ))
          }
        </List>
      </div>
    )
}