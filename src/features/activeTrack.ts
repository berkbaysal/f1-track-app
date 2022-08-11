import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import tracks,{Track} from "../assets/data/trackData"

const initialState:{value:Track} = {value:tracks[6]};

export const activeTrackSlice = createSlice({
    name: "activeTrack",
    initialState,
    reducers: {
        changeActiveTrack: (state, action:PayloadAction<string>) => {
            state.value = tracks.find(track=>track.name === action.payload);
        },
    }
})

export const selectActiveTrack = (state:RootState) => state.activeTrack.value
export const { changeActiveTrack } = activeTrackSlice.actions;
export default activeTrackSlice.reducer;