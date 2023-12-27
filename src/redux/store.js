import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import persistReducer from "redux-persist/es/persistReducer";
import { reducer } from "./reducer";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  };

  const persistedContactsReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store)