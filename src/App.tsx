//import Calendar from "./components/Calendar/Calendar";
import { Home } from "./components/Home/Home"
import { History } from "./components/History/History";
import Category from "./components/Category/Category";
import { Report } from "./components/Report/Report";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.scss";
// import "./mixin.scss";
import React from "react";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    
      <BrowserRouter>
                <Link to="/">
                  Home
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
                <Route path="/report" element={<Report />} />
                <Route path="/history" element={<History />} />
                <Route path="/category" element={<Category />} />
              </Routes>
              </BrowserRouter>
      
    </div>
  );
}

export default App;