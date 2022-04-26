import React from "react";
// import AllCategories from "./components/AllCategories/AllCategories";
// import { AddCategory } from './components/newCategory/newCategory/newCategory';
// import Switcher from "./components/Switcher/Switcher";

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