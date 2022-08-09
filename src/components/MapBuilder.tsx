import {} from 'react'
import { Track } from '../assets/data/trackData'
//Bahrain
import Bahrain from "../assets/img/tracks/bahrain-track-layout.svg"
import DRS from "../assets/img/tracks/bahrain-track-drs.svg"
import BahrainSectors from "../assets/img/tracks/bahrain-track-sectors.svg"
import { useAppSelector } from '../hooks'
import { selectView } from '../features/view'

//
interface IProps{
    track: Track
}

const MapBuilder:React.FC<IProps> = ({track}) => {

    const view = useAppSelector(selectView)

    let displayElements;
    switch (track.id){
        case 0:
            displayElements = [<Bahrain/>,<BahrainSectors/>,<><DRS className="drs-zone"/><Bahrain/></>]
        break;
    }

  return (
        <>{displayElements[view.current]}</>
  )
}

export default MapBuilder