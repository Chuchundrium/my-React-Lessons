import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let allReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReduser
});

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;