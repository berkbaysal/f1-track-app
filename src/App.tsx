import {useState} from "react"
import Bahrain from "./assets/img/tracks/bahrain-track-2.svg"
import DRS from "./assets/img/tracks/bahrain-drs.svg"
import BahrainSectors from "./assets/img/tracks/bahrain-track-sectors.svg"



function App() {

    const [currentView, setCurrentView] = useState<number>(0)

    const availableViews:string[] = ["Track","Sectors"]

    const changeView =()=>{
        if(currentView === 0){
            setCurrentView(1);
        }
        else{
            setCurrentView(0);
        }
    }

    return (
        <div className="track-container">
            
            {currentView===0 &&<Bahrain className="track"/>}
            {currentView===1 && <BahrainSectors className="track" />}

            <button onClick={changeView}>Swap</button>
        </div>);
}

export default App;