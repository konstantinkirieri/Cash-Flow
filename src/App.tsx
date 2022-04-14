//import Calendar from "./components/Calendar/Calendar";
import { Home } from "./components/Home/Home"
import { History } from "./components/History/History";
import Category from "./components/Category/Category";
import { Report } from "./components/Report/Report";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./app.scss";
// import "./mixin.scss";
import React from "react";
import { Provider } from "react-redux"
import { store } from "./components/store/index"

import { AddCategory } from './components/newCategory/newCategory/newCategory';
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
          <Link to='/addcategory'>
            Category
          </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/history" element={<History />} />
            <Route path="/category" element={<Category />} />
            <Route path="/addcategory" element={<AddCategory />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;