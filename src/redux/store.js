import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import MMKVStorage from "react-native-mmkv-storage";

import combineReducers from '../redux/combine_reducers'

const storage = new MMKVStorage.Loader().initialize();
const middleWares = [thunk, logger]
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer']
}

const persistedReducer = persistReducer(persistConfig, combineReducers)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(...middleWares))
    let persistor = persistStore(store)
    return { store, persistor }
}