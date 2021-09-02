import React from 'react'
import './infoContainer.css'
function InfoContainer() {
    return (
        <div className="info-container">
            <div className="search-box">
                <input type="text" placeholder="Enter Location" />
                <div className="search-icon">
                <i class="fa fa-search"></i>
                </div>
            </div>
            <div className="weather-details">
                <h1>Weather details</h1>
                <div>Cloudy</div>
                <div>86%</div>
                <div>Humidity</div>
                <div>62%</div>        
         </div>

        </div>
    )
}

export default InfoContainer
