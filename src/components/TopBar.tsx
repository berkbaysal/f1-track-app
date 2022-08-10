import { MenuItem, TextField, ThemeProvider } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { searchTheme } from './theme'
import "./TopBar.scss"
import { Track } from '../assets/data/trackData'
import tracks from '../assets/data/trackData'
import Flag from "react-world-flags";
import { useAppDispatch, useAppSelector } from '../hooks'
import { changeActiveTrack, selectActiveTrack } from '../features/activeTrack'

const TopBar = () => {

  const [activeSearchTerm, setActiveSearchTerm] = useState<string>("")
  const [searchResultsVisible, setSearchResultsVisible] = useState<boolean>(false);
  const activeTrack = useAppSelector(selectActiveTrack);
  const dispatch = useAppDispatch();
  const searchBarRef = useRef();

  let searchResultsDisplay = [];


  function populateSearchResults() {
    let matchingResults: Track[] = [];
    tracks.forEach(track => {
      if (track.name.toLowerCase().includes(activeSearchTerm.toLowerCase()) ||
        track.country.full.toLowerCase().includes(activeSearchTerm.toLowerCase())) {
        matchingResults.push(track);
      }
    })
    return (matchingResults)
  }

  function createSearchJSX(searchResults: Track[]) {
    if (searchResults.length === 0) {
      return (<li className='result'>No matching results</li>)
    }

    return (searchResults.map(track => (
      <li className="result" key={track.name} onClick={(e) => { handleSearchClick(track.name) }}>
        <div className="country-flag-container"><Flag code={track.country.code} /></div>
        <div className="circuit-info">
          <span className='circuit-name'>{track.name}</span>
          <span className='country-name'>{track.country.full}</span>
        </div>
      </li>
    )))
  }
  function handleChange(e) {
    setActiveSearchTerm(e.target.value)

  }
  function handleSearchClick(target) {
    dispatch(changeActiveTrack(target));
    setActiveSearchTerm("");
  }
  function handleFocus() {
    setSearchResultsVisible(true);
  }

  function handleBlur() {
    setTimeout(() => { setSearchResultsVisible(false) }, 100);
  }

  console.log(searchResultsVisible);
  useEffect(() => { populateSearchResults() }, [activeSearchTerm])

  return (
    <div className='top-bar'>
      <div className="app-name">F1 Track Information App</div>
      <div className="search-group-container">
        <div className="search-group" onFocus={handleFocus} onBlur={handleBlur}>
          <form>
            <ThemeProvider theme={searchTheme}>
              <TextField
                ref={searchBarRef}
                placeholder="Search for a Track"
                className="search-bar"
                label="" variant="outlined"
                value={activeSearchTerm}
                onChange={(e) => { handleChange(e) }} >
                {populateSearchResults().map(track => (<MenuItem value={track.name}>{track.name}</MenuItem>))}
              </TextField>
            </ThemeProvider>
            {(activeSearchTerm.length > 0 && searchResultsVisible) &&
              <div className="search-results">
                <ul className="result-list">
                  {createSearchJSX(populateSearchResults())}
                </ul>
              </div>}
          </form>
        </div>
      </div>

    </div>
  )
}

export default TopBar