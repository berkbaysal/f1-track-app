import { useState } from 'react'
import "./Track.scss"
import Bahrain from "../assets/img/tracks/bahrain-track-layout.svg"
import DRS from "../assets/img/tracks/bahrain-track-drs.svg"
import BahrainSectors from "../assets/img/tracks/bahrain-track-sectors.svg"
import Sector from './Sector'
import { changeView, selectView } from "../features/view"
import { useAppSelector } from "../hooks"
import trackData from "../assets/data/trackData"
import styled, { keyframes } from "styled-components"
const AVAILABLE_VIEWS = 3;


const Track = () => {
    const view = useAppSelector(selectView)
    const activeTrack = trackData.find(track => track.name === "Bahrain International Circuit")


    const animation = keyframes`
        from{transform: rotateX(${activeTrack.angles[view.prev].rotateX}) rotateY(${activeTrack.angles[view.prev].rotateY}) rotateZ(${activeTrack.angles[view.prev].rotateZ});}
        to{transform: rotateX(${activeTrack.angles[view.current].rotateX}) rotateY(${activeTrack.angles[view.current].rotateY}) rotateZ(${activeTrack.angles[view.current].rotateZ});}
        }
        `

    //`${constructAnimation("Bahrain International Circuit")}`
    const Map = styled.div`animation ${animation} 2s`;

    const style = { height: "100px" };
    return (
        <div className="track-container">

            {view.current === 0 && <Map className="track"><Bahrain /></Map>}
            {view.current === 1 && <Map className="track">
                <BahrainSectors />
                {activeTrack.sectors.position.map((position, index) => <Sector sectorNumber={index+1} position={position} angle={activeTrack.sectors.angle} key={index}></Sector>)}
            </Map>}
            {view.current === 2 && <Map className="track"><DRS className="drs" /><Bahrain /></Map>}
        </div>
    )
}

export default Track