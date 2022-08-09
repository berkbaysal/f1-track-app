import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import viewReducer from "./features/view"
import activeTrackReducer from "./features/activeTrack"


export const store = configureStore({
    reducer:{
        view: viewReducer,
        activeTrack: activeTrackReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export default store