import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { combineReducers } from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import { api } from "./services/api"
import storage from "redux-persist/lib/storage"
import userSlice from "./features/userSlice"
import persistStore from "redux-persist/es/persistStore"

import sidebarSlice from "./features/sidebarSlice"
import testSlice from "./features/testSlice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [ sidebarSlice.name, testSlice.name],
}
export const reducer = combineReducers({
  [api.reducerPath]: api.reducer, // this is my RTK Query
  [userSlice.name]: userSlice.reducer,
  [sidebarSlice.name]: sidebarSlice.reducer,
  [testSlice.name]:testSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
})
const persistor = persistStore(store)

export { store, persistor }
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
