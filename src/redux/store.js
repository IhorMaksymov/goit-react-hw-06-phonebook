import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactReducer, filterReducer } from "./contactSlice";

const reducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
})

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


const persistor = persistStore(store);

export { store, persistor };