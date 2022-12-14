import { } from 'react'
import "./TurnMarker.scss"
import { Position, Angle } from "../assets/data/trackData"
import styled, { keyframes } from "styled-components"
import { useAppSelector } from '../hooks'
import { selectView } from '../features/view'
import trackData from "../assets/data/trackData"
import { selectActiveTrack } from '../features/activeTrack'

interface Turn {
    turn: number
}

const TurnMarker: React.FC<Turn> = ({ turn }) => {

    //THIS FUNCTIONALITY WILL BE ADDED LATER

    const activeTrack = useAppSelector(selectActiveTrack)
    const view = useAppSelector(selectView)
    const position = activeTrack.turns[turn];
    const animation = keyframes `
    0%{opacity:0;}
    25%{opacity:0;}
    100%{opacity:1;}
  `
    const TrackMarker = styled.div`
    left: ${position.positionX};
    top: ${position.positionY};
    animation ${animation} 2s;
    animation-fill-mode: forwards;
    `
    return (
        <TrackMarker className='turn-marker'>
            {turn + 1}
        </TrackMarker>
    )
}

export default TurnMarker