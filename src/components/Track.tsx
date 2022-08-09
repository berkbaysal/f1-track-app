import { useState } from 'react'
import "./Track.scss"
import Sector from './Sector'
import { changeView, selectView } from "../features/view"
import { useAppSelector } from "../hooks"
import trackData, { Track } from "../assets/data/trackData"
import styled, { keyframes } from "styled-components"
import TurnMarker from './TurnMarker'
import DrsMarker from './DrsMarker'
import MapBuilder from './MapBuilder'
import { selectActiveTrack } from '../features/activeTrack'


const Track = () => {
    const view = useAppSelector(selectView)
    const activeTrack = useAppSelector(selectActiveTrack);
    const availableViews = Object.keys(activeTrack.angles)
    const currentView = availableViews[view.current]
    const prevView = availableViews[view.prev]
    console.log(currentView)
    const animation = keyframes`
        from{transform: rotateX(${activeTrack.angles[prevView].rotateX}) rotateY(${activeTrack.angles[prevView].rotateY}) rotateZ(${activeTrack.angles[prevView].rotateZ});}
        to{transform: rotateX(${activeTrack.angles[currentView].rotateX}) rotateY(${activeTrack.angles[currentView].rotateY}) rotateZ(${activeTrack.angles[currentView].rotateZ});}
        }
        `
    const Map = styled.div`animation ${animation} 2s`;
    const turnMarks = activeTrack.turns.map((position, index) => (<TurnMarker turn={index} key={"turn " + index} />));
    const sectorMarks = activeTrack.sectors.map((position, index) => (<Sector sectorNumber={index} key={"sector" + index} />));
    const drsMarks = activeTrack.drsZones.map((position, index) => (<DrsMarker drsZoneNumber={index } key={"drs" + index} />))
    return (
        <div className="track-container">
            <Map className="track">
                {view.current === 0 ? turnMarks : view.current === 1 ? sectorMarks : drsMarks}
                <MapBuilder track={activeTrack} />
            </Map>
        </div>
    )
}

export default Track