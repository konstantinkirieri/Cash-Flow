// import { createStore } from 'redux';
// import { itemsReducer } from './history/reducer';
// // import { setData } from './getData/reducer';

//  declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
//         __REDUX_DEVTOOLS_EXTENSION__: any;
//     }
// }
// export const store = createStore(
//     itemsReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


    import { createStore, combineReducers, compose, applyMiddleware } from "redux";
    //import { messagesReducer } from "./messages/reducer";
    //import { profileReducer } from "./profile/reducer";
    //import { chatsReducer } from "./chats/reducer";
    import thunk from "redux-thunk";
    import storage from "redux-persist/lib/storage";
    import { persistStore, persistReducer } from "redux-persist";
    import { itemsReducer } from "./history/reducer";
    
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
      blacklist: ["items"],
    };
    const persistedReducer = persistReducer(
      config,
     itemsReducer,
    );
    
    export const store = createStore(
      persistedReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    export const persistor = persistStore(store);