import { } from 'react'
import "./Sector.scss"
import styled, { keyframes } from "styled-components"
import { useAppSelector } from '../hooks'
import { selectActiveTrack } from '../features/activeTrack'
import { selectView } from '../features/view'
interface IProps {
  sectorNumber: number,
}

const Sector: React.FC<IProps> = ({ sectorNumber}) => {
  const activeTrack = useAppSelector(selectActiveTrack);
  const view = useAppSelector(selectView);
  const availableViews = Object.keys(activeTrack.angles)
  const currentViewKey = availableViews[view.current]
  const prevViewKey = availableViews[view.prev]

  const angles = {current: activeTrack.angles[currentViewKey] , prev: activeTrack.angles[prevViewKey]}
  const position = activeTrack.sectors[sectorNumber]

  let sectorColor: string;
  switch (sectorNumber+1) {
    case (1):
      sectorColor = "#DF0203";
      break;
    case (2):
      sectorColor = "#00B4E6";
      break;
    case (3):
      sectorColor = "#F2CC00";
      break; //
  }
  const animation = keyframes `
  from{transform: rotateZ(-${angles.prev.rotateZ}) rotateX(-${angles.prev.rotateX});}
  to{transform: rotateZ(-${angles.current.rotateZ}) rotateX(-${angles.current.rotateX});}
  `
  const SectorDiv = styled.div`
  left:${position.positionX};
  top:${position.positionY};
  color:${sectorColor};
  border-bottom:4px solid ${sectorColor};
  animation: ${animation} 2s;
  animation-fill-mode: forwards;
  `

  return (
    <SectorDiv className="sector-banner">
      {"SECTOR " + (sectorNumber + 1)}
    </SectorDiv>
  )
}

export default Sector