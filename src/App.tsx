import { useEffect, useRef, useState } from "react"
import Button from "./components/Button";
import TopBar from "./components/TopBar";
import Track from "./components/Track";
import TrackInfo from "./components/TrackInfo";
import { changeView } from "./features/view";
import { useAppSelector, useAppDispatch } from "./hooks"
import ReactCountryFlag from "react-country-flag";
import { selectActiveTrack } from "./features/activeTrack";
import Select from "@mui/joy/Select"
import Option from "@mui/joy/Option"
import tracks from "./assets/data/trackData"
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { formulaTheme } from "./components/MUI_Themes/SelectTheme";
import { CssVarsProvider } from "@mui/joy/styles"

function App() {

    const dispatch = useAppDispatch();
    const activeTrack = useAppSelector(selectActiveTrack);

    const trackOptions = tracks.map(track => (
        <Option value={track.name} label={<span><ReactCountryFlag countryCode={track.country} />{track.name}</span>}>
            <ListItemDecorator>
                <ReactCountryFlag countryCode={track.country} />
            </ListItemDecorator>
            {track.name}
        </Option>));

    function updateView(nextView: number) {
        dispatch(changeView(nextView))
    }

    return (
        <div className="app">
            <TopBar />
            <div className="main-content">
                <div className="map-box">
                    <Select defaultValue={activeTrack.name} className="select-track"
                        sx={{
                            fontFamily: "sans-serif",
                            border: "none",
                            backgroundColor:"red"
                        }}>
                        {trackOptions}
                    </Select>
                    <Track />
                    <div className="button-group">
                        <span onClick={() => { updateView(0) }}><Button label="Track Layout"></Button></span>
                        <span onClick={() => { updateView(1) }}><Button label="Track Sectors"></Button></span>
                        <span onClick={() => { updateView(2) }}><Button label="DRS Zones"></Button></span>
                    </div>

                </div>

                <div className="track-info">
                    <h1 className="track-name">
                        <ReactCountryFlag countryCode={activeTrack.country} className="country-flag" />
                        {activeTrack.name}
                    </h1>
                    <TrackInfo />
                </div>
            </div>
        </div>
    )
}

export default App;