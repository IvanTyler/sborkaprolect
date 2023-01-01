import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getDataReducer } from "../Reducers/getDataReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to
import { basketReducer } from "../Reducers/basketReducer";


const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['basket']
}

const rootReducer = combineReducers({
    data: getDataReducer,
    basket: basketReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

export default store