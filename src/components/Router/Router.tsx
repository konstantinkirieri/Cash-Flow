import { History } from "../History/History";
//import  Category  from "../Category/Category";
import { Switcher } from "../Switcher/Switcher";
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
 import { AllCategories } from "../AllCategories/AllCategories";
import { Report } from "../Report/Report";
import { getDataFB } from "../GetFetch/GetFetch";

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
          path="history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="category"
          element={
            <PrivateRoute>
              <Category value={categoriesList}/>
            </PrivateRoute>
          }
        />  */}
        {/* <Route
          path="allCategories"
          element={
            <PrivateRoute>
              <AllCategories />
            </PrivateRoute>
          }
        /> */}
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