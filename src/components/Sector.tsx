import { } from 'react'
import "./Sector.scss"
import {Angle,Position} from "../assets/data/trackData"
import styled, { keyframes } from "styled-components"
interface IProps {
  sectorNumber: number,
  position: Position,
  angle: Angle
}

const Sector: React.FC<IProps> = ({ sectorNumber, position, angle}) => {
  let sectorColor: string;
  switch (sectorNumber) {
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
  from{}
  to{transform: rotateX(${angle.rotateX});}
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
      {"SECTOR " + sectorNumber}
    </SectorDiv>
  )
}

export default Sector