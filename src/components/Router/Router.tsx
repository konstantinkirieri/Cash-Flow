import { Home2 } from "../Home2/Home2";
import { HistoryFetch } from "../HistoryFetch/HistoryFetch";
import Category from "../Category/Category";
import { Report } from "../Report/Report";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "../../app.scss";
// import "./mixin.scss";
//import { Provider } from "react-redux"
//import { store } from "../../components/store/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddCategory } from '../newCategory/newCategory/newCategory';
import { auth } from "../../services/firebase";
import { signIn, signOut } from "../../components/store/auth/actions";
import { PrivateRoute } from "../../HOCS/PrivateRoute";
import { PublicOutlet } from "../../HOCS/PublicRoute";
import { SignUp } from "../Home/SignUp";
import { ConnectedHome } from "../Home/Home";

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
//     <div className="App">
//       <header className="App-header">
//       </header>

//       <Provider store={store}>
//         <BrowserRouter>
//           <Link to="/">
//             Home
//           </Link>
//           <Link to='/category'>
//             Category
//           </Link>
//           <Link to='/report'>
//             Report
//           </Link>
//           <Link to='/history'>
//             History
//           </Link>
//           <Link to='/addcategory'>
//             Category
//           </Link>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/report" element={<Report />} />
//             <Route path="/history" element={<HistoryFetch />} />
//             <Route path="/category" element={<Category />} />
//             <Route path="/addcategory" element={<AddCategory />} />
//           </Routes>
//         </BrowserRouter>
//       </Provider>

//     </div>
//   );
// }


<BrowserRouter>
      <ul className="links">
        <li className="mainLinks">
          <Link className="eachLink" to="/">
            Home2
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/category">
            Category
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
        <Route path="report">
          <Route
            index
            element={
              <PrivateRoute>
                <Report />
              </PrivateRoute>
            }
          />
          </Route>
        <Route
          path="home"
          element={
            <PrivateRoute>
              <ConnectedHome />
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
              <Category />
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
        <Route path="*" element={<main>404 Not Found</main>} />
      </Routes>
    </BrowserRouter>
    )
  }