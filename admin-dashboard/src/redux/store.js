import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './theme/themeSlice'
import {serviceReducer} from './service/serviceSlice'
import {userReducer} from './users/userSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// export const store = configureStore({
//   reducer: {
    
//   },
// })


const rootReducer = combineReducers({
  sidebar: sidebarReducer,
    serviceReducer: serviceReducer,
    userReducer: userReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);