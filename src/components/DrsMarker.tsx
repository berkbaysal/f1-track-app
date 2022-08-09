import { } from 'react'
import "./DrsMarker.scss"
import styled, { keyframes } from "styled-components"
import { useAppSelector } from '../hooks'
import { selectView } from '../features/view'
import { Angle, Position } from '../assets/data/trackData'
import { selectActiveTrack } from '../features/activeTrack'

interface DrsZone {
  drsZoneNumber: number
}

const DrsMarker: React.FC<DrsZone> = ({ drsZoneNumber }) => {

  const activeTrack = useAppSelector(selectActiveTrack)
  const view = useAppSelector(selectView)

  const position = activeTrack.drsZones[drsZoneNumber];
  const angle = activeTrack.angles.drs;

  const animation = keyframes`
    0%{opacity: 0;}
    50%{opacity: 0;}
    75%{opacity: 0;}
    100%{opacity: 1;}
  `
  const DrsMarker = styled.div`
    left: ${position.positionX};
    top: ${position.positionY};
    animation: ${animation} 2s;
    transform:  rotateZ(-${angle.rotateZ}) rotateX(-${angle.rotateX}) translateZ(40px);
    animation-fill-mode: forwards;
    `

  return (
    <DrsMarker className="drs-marker">{`DRS ZONE ${drsZoneNumber+1}`}</DrsMarker>
  )
}

export default DrsMarker