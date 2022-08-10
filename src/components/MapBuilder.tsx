import {} from 'react'
import { Track } from '../assets/data/trackData'
import { useAppSelector } from '../hooks'
import { selectView } from '../features/view'
//Bahrain
import Bahrain from "../assets/img/tracks/bahrain-track-layout.svg"
import BahrainDrs from "../assets/img/tracks/bahrain-track-drs.svg"
import BahrainSectors from "../assets/img/tracks/bahrain-track-sectors.svg"
//Saudi
import Saudi from "../assets/img/tracks/saudi-track-layout.svg"
import SaudiDrs from "../assets/img/tracks/saudi-track-drs.svg"
import SaudiSectors from "../assets/img/tracks/saudi-track-sectors.svg"
//Australia
import Australia from "../assets/img/tracks/australia-track-layout.svg"
import AustraliaDrs from "../assets/img/tracks/australia-track-drs.svg"
import AustraliaSectors from "../assets/img/tracks/australia-track-sectors.svg"
//Italy
import Italy from "../assets/img/tracks/italy-track-layout.svg"
import ItalyDrs from "../assets/img/tracks/italy-track-drs.svg"
import ItalySectors from "../assets/img/tracks/italy-track-sectors.svg"
//US
import Usa from "../assets/img/tracks/us-track-layout.svg"
import UsaDrs from "../assets/img/tracks/us-track-drs.svg"
import UsaSectors from "../assets/img/tracks/us-track-sectors.svg"
//Spain
import Spain from "../assets/img/tracks/spain-track-layout.svg"
import SpainDrs from "../assets/img/tracks/spain-track-drs.svg"
import SpainSectors from "../assets/img/tracks/spain-track-sectors.svg"


//
interface IProps{
    track: Track
}

const MapBuilder:React.FC<IProps> = ({track}) => {

    const view = useAppSelector(selectView)

    let displayElements;
    switch (track.id){
        case 0:
            displayElements = [<Bahrain/>,<BahrainSectors/>,<><BahrainDrs className="drs-zone"/><Bahrain/></>]
        break;
        case 1:
            displayElements = [<Saudi/>,<SaudiSectors/>,<><SaudiDrs className="drs-zone"/><Saudi/></>]
        break;
        case 2:
            displayElements = [<Australia/>,<AustraliaSectors/>,<><AustraliaDrs className="drs-zone"/><Australia/></>]
        break;
        case 3:
            displayElements = [<Italy/>,<ItalySectors/>,<><ItalyDrs className="drs-zone"/><Italy/></>]
        break;
        case 4:
            displayElements = [<Usa/>,<UsaSectors/>,<><UsaDrs className="drs-zone"/><Usa/></>]
        break;
        case 5:
            displayElements = [<Spain/>,<SpainSectors/>,<><SpainDrs className="drs-zone"/><Spain/></>]
        break;
    }

  return (
        <>{displayElements[view.current]}</>
  )
}

export default MapBuilder