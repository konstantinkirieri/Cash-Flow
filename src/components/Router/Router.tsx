import { History } from "../History/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./router.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddCategory from "../newCategory/NewCategory";
import { auth } from "../../services/firebase";
import { signIn, signOut } from "../../components/store/auth/actions";
import { PrivateRoute } from "../../HOCS/PrivateRoute";
import { PublicOutlet } from "../../HOCS/PublicRoute";
import { SignUp } from "../Home/SignUp";
import { Home } from "../Home/Home";
import { Report } from "../Report/Report";
import { getDataFB } from "../GetFetch/GetFetch";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import React from "react";

export const Router = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        dispatch(signIn());
        getDataFB();
      } else {
        dispatch(signOut());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<PublicOutlet />}>
          <Route path="" element={<SignUp />} />
        </Route>
        <Route path="main">
          <Route
            index
            element={
              <PrivateRoute>
                <KeyBoard />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="addCategory"
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