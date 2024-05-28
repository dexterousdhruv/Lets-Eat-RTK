import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import categoryReducer from "./slices/CategorySlice";
import searchReducer from "./slices/SearchSlice";
import favoriteReducer from "./slices/FavoriteSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  order: cartReducer,
  category: categoryReducer,
  search: searchReducer,
  favoriteList: favoriteReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
  reducer: persistedReducer
})

export default store