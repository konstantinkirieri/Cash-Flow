//import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import "./history.scss";

const itemsList: IList[] = [
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
            <ArrowBackIosIcon className='menu' />
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
        <h2>History</h2>
        <h3>March 2022</h3> 
        <Divider className='divider' />
        <List>
          {itemsList.map((item) => (
            <div>
              <ListItem button key={item.id}>
                <ListItemText className='listItem' primary={item.categoryId}/>
                <ListItemText className='listItem' primary={item.amount}/>
                <ListItemText className='listItem' primary={item.date}/>
              </ListItem>
              <Divider className='divider'/>
            </div>
          ))
          }
        </List>
      </div>
    )
}