import { createStore,compose } from "redux";
import cartReducer from "./reducer";


const store = createStore(cartReducer,
    /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;