import React from "react";

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