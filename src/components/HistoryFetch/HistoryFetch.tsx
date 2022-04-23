import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
//import "../History/history.scss;
import HistoryCalendar from "../HistoryCalendar/HistoryCalendar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { API } from "../GetFetch/GetFetch";
// import {
//   selectItemsError,
//   selectItemsList,
//   selectItemsLoading,
// } from "../../components/store/history/selectors";
// import { getItems } from "../../components/store/history/actions";
// import { useDispatch, useSelector } from "react-redux";

export const HistoryFetch = () => {

  // 1ый вариант с использованием store =>

    // const dispatch = useDispatch();
    // const items = useSelector(selectItemsList);
    // const isLoading = useSelector(selectItemsLoading);
    // const error = useSelector(selectItemsError);

    // const requestItems = async () => {
    //   dispatch(getItems());
    // };
  
    // useEffect(() => {
    //   requestItems();
    // }, []);
  
//------2ой вариант без store =>
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      let cleanupFunction = true;
      setLoading(true);
       fetch(API, {
        method: 'POST', 
        mode: 'cors', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'},
          
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(items)
       })
       
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("not ok");
        }else
        return response.json();
      })
      .then((response) => {
        setError(false);
        setLoading(false);
        if(!cleanupFunction) setItems(response);
      })
      .catch((err) => {
        console.warn(err);
        setError(true);
      })
      .finally(() => {
        cleanupFunction = false;
        setLoading(false);
      });
    }, [items]);
    
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
        
         {isLoading ? (
        <CircularProgress />
      ) : (
        <>
           {/* <button onClick={requestItems}>REQUEST</button> */}
          
           {!!error && <h4>ERROR {error}</h4>} 
          <List>
          { 
            items.map((item: any) => {
              return (
                <>
                <ListItem key={item.id}
                >
                  <ListItemText
                    className="listItem">
                    {/* {item.categoryList.img} */}
                    {item.categoryId}
                  </ListItemText>
                  {/* <ListItemText
                    className="listItem">
                    {item.categoryList.name}
                  </ListItemText> */}

                  <ListItemText
                    className="listItem">
                    {item.amount}
                  </ListItemText>
                  <ListItemText
                    className="listItem">

                    {item.date}
                  </ListItemText>
                
                <IconButton>
                  <EditIcon className="editBtn" />
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon className="deleteBtn"></DeleteForeverIcon>
                </IconButton>
              </ListItem><Divider className="divider" />
              </>
         )})}
           
          </List>
          </>
      )}
                  </div>
            );
          };
        