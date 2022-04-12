//import Calendar from "./components/Calendar/Calendar";
import { Home } from "./components/Home/Home"
import { History } from "./components/History/History";
import Category from "./components/Category/Category";
import { Report } from "./components/Report/Report";
import { ExpIcons } from "./components/Category/Category";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.scss";
// import "./mixin.scss";
import React from "react";
import { Provider }from "react-redux"
import {store} from "./components/store/index"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    
    <Provider store={store}>
      <BrowserRouter>
                <Link to="/">
                  Home
                </Link>
                <Link to='/category'>
                  Category
                </Link>
                <Link to='/report'>
                  Report
                </Link>
                <Link to='/history'>
                  History
                </Link>
                <Link to='/category'>
                  Category
                </Link>
              
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category" element={<ExpIcons />} />
                <Route path="/report" element={<Report />} />
                <Route path="/history" element={<History />} />
                <Route path="/category" element={<Category />} />
              </Routes>
              </BrowserRouter>
    </Provider>
      
    </div>
  );
}

export default App;