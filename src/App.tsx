import { useEffect, useRef, useState } from "react"
import Button from "./components/Button";
import TopBar from "./components/TopBar";
import Track from "./components/Track";
import TrackInfo from "./components/TrackInfo";
import { changeView } from "./features/view";
import { useAppSelector, useAppDispatch } from "./hooks"


function App() {

    const dispatch = useAppDispatch();

    function updateView(nextView: number) {
        dispatch(changeView(nextView))
    }

    return (
        <div className="app">
            <TopBar />
            <div className="main-content">
                <div className="map-box">
                    <Track />
                    <div className="button-group">
                        <span onClick={() => { updateView(0) }}><Button label="Track Layout"></Button></span>
                        <span onClick={() => { updateView(1) }}><Button label="Track Sectors"></Button></span>
                        <span onClick={() => { updateView(2) }}><Button label="DRS Zones"></Button></span>
                    </div>
                </div>
                <h1 className="track-name">Bahrain International Circuit</h1>
                <div className="track-info">
                    <TrackInfo/>
                </div>
            </div>
        </div>
    )
}

export default App;