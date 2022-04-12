import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import "./history.scss";
import HistoryCalendar from "../../HistoryCalendar/HistoryCalendar";
//import items from "../../expenses.json";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

export function History(): any {
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin',  'http://localhost:3000')
    // headers.append('Access-Control-Allow-Methods', 'POST')
    // headers.append('Access-Control-Allow-Headers', 'Content-Type')
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // headers.append('Access-Control-Allow-Origin', '*');
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [expenses, setItems] = useState([]);
  
    useEffect(() => {
       fetch("https://raw.githubusercontent.com/marieStamp/FinalProject/master/expenses.json")
       //{mode: 'no-cors',  
       //   credentials: 'include',
       //   method: 'POST',
       //   headers: headers
    //   })
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
      )
    }, [])
    
    if (error) {
      return <div>Error!</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
  
    return (
      <div className="historyPage">
        <div className="historyMenu">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //sx={{ mr: 2 }}
          >
            <ArrowBackIosIcon className="arrowBack"></ArrowBackIosIcon>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //sx={{ mr: 2 }}
          >
            <MenuIcon className="menu" />
          </IconButton>
        </div>
        <h2 className="historyHeader">History</h2>
  
        <HistoryCalendar />
        <Divider className="divider" />
        <List>
          { expenses &&
            expenses.map((item: any) => {
              return (
                <div>
                  <ListItem  key={item.items.id}
                  >
                    <ListItemText
                      className="listItem">
                      {item.categoryList.img}
                    </ListItemText>
                    <ListItemText
                      className="listItem">
                          {item.categoryList.name}
                      </ListItemText>
  
                    <ListItemText
                      className="listItem">
                      {item.items.amount}
                    </ListItemText>
                    <ListItemText
                      className="listItem">
                     
                      {item.items.date}
                    </ListItemText>
                    </ListItem>
                    <IconButton >
                      <EditIcon className="editBtn" />
                    </IconButton>
                    <IconButton >
                      <DeleteForeverIcon className="deleteBtn"></DeleteForeverIcon>
                    </IconButton>
                 </div>
                  
                    );
            })}
                  <Divider className="divider" />
            
          </List>
            </div>
            );
          };
        }