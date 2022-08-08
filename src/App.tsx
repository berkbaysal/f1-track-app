import { useEffect, useRef, useState } from "react"
import Button from "./components/Button";
import Track from "./components/Track";
import { changeView } from "./features/view";
import { useAppSelector,useAppDispatch } from "./hooks"


function App() {

    const dispatch = useAppDispatch();
    
    function updateView(nextView:number){
        dispatch(changeView(nextView))
    }

    return (
        <div className="app">
            <Track />
            <span onClick={()=>{updateView(0)}}><Button label="Track Layout"></Button></span>
            <span onClick={()=>{updateView(1)}}><Button label="Track Sectors"></Button></span>
            <span onClick={()=>{updateView(2)}}><Button label="DRS Zones"></Button></span>
            <h1 className="track-name">Bahrain International Circuit</h1>
        </div>
       )
}

export default App;