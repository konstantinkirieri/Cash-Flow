    import { createStore, combineReducers, compose, applyMiddleware } from "redux";
    import thunk from "redux-thunk";
    import storage from "redux-persist/lib/storage";
    import { persistStore, persistReducer } from "redux-persist";
    import { itemsReducer } from "./history/reducer";
    import { homeReducer } from "./auth/reducer";
    
    declare global {
            interface Window {
                __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
                __REDUX_DEVTOOLS_EXTENSION__: any;
            }
        }
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const config = {
      key: "CashFlow",
      storage,
      blacklist: ["home", "items"],
    };
    const persistedReducer = persistReducer(
      config,
      combineReducers({
        home: homeReducer,
        items: itemsReducer
      })  
    );
    
    export const store = createStore(
      persistedReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    export const persistor = persistStore(store);