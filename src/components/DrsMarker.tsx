import {} from 'react'
import "./DrsMarker.scss"
import styled, { keyframes } from "styled-components"
import { useAppSelector } from '../hooks'
import { selectView } from '../features/view'
import { Angle, Position } from '../assets/data/trackData'

interface DrsZone {
    drsZoneNumber: number
    position: Position,
    angles: Angle[]
}

const DrsMarker:React.FC<DrsZone> = ({drsZoneNumber,position,angles}) => {

    const view = useAppSelector(selectView)
    const animation = keyframes `
    0%{opacity: 0;}
    50%{opacity: 0;}
    75%{opacity: 0;}
    100%{opacity: 1;}
  `
    const DrsMarker = styled.div`
    left: ${position.positionX};
    top: ${position.positionY};
    animation: ${animation} 2s;
    transform:  rotateZ(-${angles[2].rotateZ}) rotateX(-${angles[2].rotateX}) translateZ(40px);
    animation-fill-mode: forwards;
    `
   
  return (
    <DrsMarker className="drs-marker">{`DRS ZONE ${drsZoneNumber}`}</DrsMarker>
  )
}

export default DrsMarker