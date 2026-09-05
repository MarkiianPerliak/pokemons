import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { pokemonsReducer } from "./pokemonsSlice";

const persistConfig = {
  key: "pokemons",
  storage,
};




// const rootReduce = combineReducers({
//   pokemons: pokemonsReducer,
//   filter: "filterReducer",
// });

const persisterReducer = persistReducer(persistConfig, pokemonsReducer);

export const store = configureStore({
  reducer: persisterReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export let persistor = persistStore(store);