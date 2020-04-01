import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import appReducer from "./reducers/app-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let allReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    /* only 'form' can be used (out of the box): */
    form: formReducer,
});

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;