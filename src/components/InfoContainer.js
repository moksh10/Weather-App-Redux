import React from 'react'
import './infoContainer.css'
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import getInfo from '../actions/weatherAction'
function InfoContainer() {
    const [query, setQuery] = useState("Tokyo")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInfo(query))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="info-container">
            <div className="search-box">
                <input type="text" placeholder="Enter Location" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <div className="search-icon">
                <i class="fa fa-search"></i>
                </div>
            </div>
            <div className="weather-details">
                
            <h1>Monday, 19 Sep '19</h1>
                <h1>06:09 pm</h1>

            </div>
            <div className="weather-details">
                <h1>Weather details</h1>
                <div>Min</div>
                <div>86°C</div>
                <div>Max</div>
                <div>62°C</div>   
                <div>Pressure</div>
                <div>1200mbar</div>
                <div>Humidity</div>
                <div>73%</div>
                <div>Visibility</div>
                <div>10000 km</div>
                <div>Wind</div>
                <div>2.25 km/h</div> 
                

         </div>

        </div>
    )
}

export default InfoContainer
