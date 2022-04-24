//import Calendar from "./components/Calendar/Calendar";
// import { Home } from "./components/Home/Home"
// import { HistoryFetch } from "./components/HistoryFetch/HistoryFetch";
// import Category from "./components/Category/Category";
// import { Report } from "./components/Report/Report";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//import "./app.scss";
// import "./mixin.scss";
import React from "react";
//import { Provider } from "react-redux"
//import { store } from "./components/store/index"

import { Provider } from "react-redux";
import { store, persistor } from "./components/store/index";
import { Router } from "./components/Router/Router";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@mui/material";

function App() {
 
  return (
    <div className="App">
      <Provider store={ store }>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
       <main> 
       <Router />
      </main>
      </PersistGate>
      </Provider>
    </div>
  )
}
export default App