import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface ViewState{
    value:{
        current:number,
        prev:number
    }
}
const initialState:ViewState = {value:{ current: 1, prev: 1 }};

export const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        changeView: (state, action:PayloadAction<number>) => {
            if(action.payload === state.value.current){return;} //ignore change if changing to same view.
            state.value = { current: action.payload, prev: state.value.current };
        },
    }
})

export const selectView = (state:RootState) => state.view.value
export const { changeView } = viewSlice.actions;
export default viewSlice.reducer;