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
import AllCategories from "./components/AllCategories/AllCategories";
import { AddCategory } from './components/newCategory/newCategory/newCategory';
import Switcher from "./components/Switcher/Switcher";
import KeyBoard from "./components/Keyboard";



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
          <Link to='/allCategories'>
            All Categories
          </Link>
          <Link to='/switch'>
            Switcher
          </Link>          <Link to='/KeyBoard'>
          KeyBoard
          </Link>
            Report
          </Link>
          <Link to='/history'>
            History
          </Link>
          <Link to='/addcategory'>
            Add Category
          </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/history" element={<History />} />
            <Route path="/category" element={<Category />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/allCategories" element={<AllCategories />} />
            <Route path="/switch" element={<Switcher />} />
            <Route path="/KeyBoard" element={<KeyBoard />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
