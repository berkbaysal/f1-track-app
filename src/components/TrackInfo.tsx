import { } from 'react'
import "./TrackInfo.scss"
import { selectActiveTrack } from '../features/activeTrack'
import { useAppSelector } from '../hooks'

const TrackInfo = () => {

  const activeTrack = useAppSelector(selectActiveTrack);
  const trackInfo = activeTrack.trackInfo;

  const trackInfoDisplay = trackInfo.map(item => (
    <div className="info-unit">
      <div className="info-title">{item.title}:</div>
      <div className="info-data">{item.data}</div>
    </div>
  ))

  return (
    <div className="info-container">
      {trackInfoDisplay}
      <div className="quote-box">
        <h2>About the Track:</h2>
        {activeTrack.trackQuote}
      </div>
    </div>
  )
}

export default TrackInfo