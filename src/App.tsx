import TopBar from "./components/TopBar";
import Track from "./components/Track";
import TrackInfo from "./components/TrackInfo";
import { changeView } from "./features/view";
import { useAppSelector, useAppDispatch } from "./hooks"
import Flag from "react-world-flags";
import { selectActiveTrack } from "./features/activeTrack";
import Select from "@mui/material/Select"
import MenuItem from '@mui/material/MenuItem';
import tracks from "./assets/data/trackData"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { theme } from "./theme"
import { ThemeProvider } from "@mui/material";


function App() {

    const dispatch = useAppDispatch();
    const activeTrack = useAppSelector(selectActiveTrack);

    const trackOptions = tracks.map(track => (
        <MenuItem value={track.name} className="option-item" sx={{ fontFamily: "formula1-regular" }}>
            <Flag code={track.country} className="option-flag" />
            {track.name}
        </MenuItem>));

    function updateView(nextView: number) {
        dispatch(changeView(nextView))
    }
    const muiStyle = {
        fontFamily: "formula1-bold",
    }

    return (
        <div className="app">
            <TopBar />
            <div className="main-content">
                <div className="map-box">
                    <Select defaultValue={activeTrack.name} className="select-track" variant="standard"
                        sx={{ fontFamily: "formula1-regular" }}>
                        {trackOptions}
                    </Select>
                    <Track />
                    <div className="button-group">
                        <ThemeProvider  theme={theme}>
                                <span  onClick={() => { updateView(0) }}><Button className="button" variant="contained" sx={muiStyle}>Layout</Button></span>
                                <span  onClick={() => { updateView(1) }}><Button variant="contained" className="button" sx={muiStyle}>Sectors</Button></span>
                                <span  onClick={() => { updateView(2) }}><Button variant="contained" className="button" sx={muiStyle}>DRS Zones</Button></span>
                        </ThemeProvider>
                    </div>
                </div>
                <div className="track-info">
                    <h1 className="track-name">
                        <Flag code={activeTrack.country} className="country-flag" />
                        {activeTrack.name}
                    </h1>
                    <TrackInfo />
                </div>
            </div>
        </div>
    )
}

export default App;