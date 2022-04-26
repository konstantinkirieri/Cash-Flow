import { createStore } from 'redux';
import { itemsReducer } from './items/reducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}
export const store = createStore(
    itemsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );