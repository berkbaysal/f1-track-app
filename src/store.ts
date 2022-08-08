import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import viewReducer from "./features/view"


export const store = configureStore({
    reducer:{
        view: viewReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export default store