import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import tracks,{Track} from "../assets/data/trackData"

const initialState:{value:Track} = {value:tracks[0]};

export const activeTrackSlice = createSlice({
    name: "activeTrack",
    initialState,
    reducers: {
        changeActiveTrackById: (state, action:PayloadAction<number>) => {
            
        },
    }
})

export const selectActiveTrack = (state:RootState) => state.activeTrack.value
export const { changeActiveTrackById } = activeTrackSlice.actions;
export default activeTrackSlice.reducer;