import React from 'react'
import './infoContainer.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import getInfo from '../actions/weatherAction'
function InfoContainer() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const {temp_min,temp_max,pressure,humidity,visibility,wind,date}=state
    const handleClick=()=>{
        if(query.length!==0)
        {
            dispatch(getInfo(query))
        }
        

    }
    let dateNew = ""
    if(date.length!==0)
    {
        
    const dateTemp=date.toString().split(" ")
    dateNew = dateTemp[0]+", "+dateTemp[1]+" "+dateTemp[2]+" '"+dateTemp[3].substring(2,4)
    
    }

    return (
        <div className="info-container">
            <div className="search-box">
                <input type="text" placeholder="Enter Location" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <div className="search-icon" onClick={handleClick}>
                <i class="fa fa-search"></i>
                </div>
            </div>
            <div className="weather-details">
                
            <h1>{dateNew}</h1>

            </div>
            <div className="weather-details">
                <h1>Weather details</h1>
                <div>Min</div>
                <div>{temp_min}°C</div>
                <div>Max</div>
                <div>{temp_max}°C</div>   
                <div>Pressure</div>
                <div>{pressure}mbar</div>
                <div>Humidity</div>
                <div>{humidity}%</div>
                <div>Visibility</div>
                <div>{visibility} m</div>
                <div>Wind</div>
                <div>{wind} km/h</div> 
                

         </div>

        </div>
    )
}

export default InfoContainer
