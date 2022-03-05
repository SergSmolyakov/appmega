import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profileReducer from "./profile/reducer";
import messagesReducer from "./messages/reducer";
import chatReducer from "./chats/reducer";
import  middleware  from './middleware';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const reducers = combineReducers({
    chats: chatReducer,
    messages: messagesReducer,
    profile: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfif = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfif, reducers)


//const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(middleware))
    
    );
    //sagaMiddleware.run(mySaga)
export const persistor = persistStore(store);

export default store;
