import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import cartReducer from "./cart/cartSlice";
import { persistStore, persistReducer } from'redux-persist';
import storage from'redux-persist/lib/storage';


const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    cart: cartReducer
})

const persitConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:  false}),
});

export const persistor = persistStore(store);