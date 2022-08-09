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


const Track = () => {
    const view = useAppSelector(selectView)
    const activeTrack: Track = trackData.find(track => track.name === "Bahrain International Circuit")

    const animation = keyframes`
        from{transform: rotateX(${activeTrack.angles[view.prev].rotateX}) rotateY(${activeTrack.angles[view.prev].rotateY}) rotateZ(${activeTrack.angles[view.prev].rotateZ});}
        to{transform: rotateX(${activeTrack.angles[view.current].rotateX}) rotateY(${activeTrack.angles[view.current].rotateY}) rotateZ(${activeTrack.angles[view.current].rotateZ});}
        }
        `
    const Map = styled.div`animation ${animation} 2s`;
    const turnMarks = activeTrack.turns.map((position, index) => <TurnMarker turn={index + 1} position={position} angles={activeTrack.angles} key={"turn " + index} />)
    const sectorMarks = activeTrack.sectors.map((position, index) => <Sector sectorNumber={index + 1} position={position} angles={activeTrack.angles} key={index}></Sector>);
    const drsMarks = activeTrack.drsZones.map((position, index) => <DrsMarker drsZoneNumber={index + 1} position={position} angles={activeTrack.angles}></DrsMarker>)
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