import { Home2 } from "../Home2/Home2";
import { HistoryFetch } from "../HistoryFetch/HistoryFetch";
import Category, { categoriesList } from "../Category/Category";
import { Switcher } from "../Switcher/Switcher";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//import "../../app.scss";
import "./router.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddCategory } from '../newCategory/newCategory/newCategory';
import { auth } from "../../services/firebase";
import { signIn, signOut } from "../../components/store/auth/actions";
import { PrivateRoute } from "../../HOCS/PrivateRoute";
import { PublicOutlet } from "../../HOCS/PublicRoute";
import { SignUp } from "../Home/SignUp";
import { Home } from "../Home/Home";
import { AllCategories } from "../AllCategories/AllCategories";
import { Report } from "../Report/Report";
import React from "react";

export const Router = () => {

    const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);


  return (


<BrowserRouter>
      <ul className="links">
        <li className="mainLinks">
          <Link className="eachLink" to="/">
            Auth
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/category">
            Category
          </Link>
        </li>
        <li className="mainLinks">
        <Link to='/allCategories'>
            All Categories
          </Link>
          </li>
          <li className="mainLinks">
          <Link to='/switcher'>
            Switcher
          </Link>
          </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/home">
            Home
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/report">
            Report
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/history">
            History
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/addcategory">
            Add category
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="/" element={<Home2 />} />
        </Route>
        <Route path="/signup" element={<PublicOutlet />}>
          <Route path="" element={<SignUp />} />
        </Route>
        <Route path="switcher">
          <Route
            index
            element={
              <PrivateRoute>
                <Switcher />
              </PrivateRoute>
            }
          />
          </Route>
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="history"
          element={
            <PrivateRoute>
              <HistoryFetch />
            </PrivateRoute>
          }
        />
        <Route
          path="category"
          element={
            <PrivateRoute>
              <Category cats={categoriesList}/>
            </PrivateRoute>
          }
        />
        <Route
          path="allCategories"
          element={
            <PrivateRoute>
              <AllCategories />
            </PrivateRoute>
          }
        />
        <Route
          path="addcategory"
          element={
            <PrivateRoute>
              <AddCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="report"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<main>404 Not Found</main>} />
      </Routes>
    </BrowserRouter>
    )
  }