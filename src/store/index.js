import { combineReducers, createStore } from "redux";
import profileReducer from "./profile/reducer";
import messagesReducer from "./messages/reducer";
import chatReducer from "./chats/reducer";

const reducers = combineReducers({
    chats: chatReducer,
    messages: messagesReducer,
    profile: profileReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;
