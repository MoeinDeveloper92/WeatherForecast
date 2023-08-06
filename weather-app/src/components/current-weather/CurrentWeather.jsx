import React from 'react'
import "./current-weather.css"
function CurrentWeather() {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className='city'>Belgrade</p>
                    <p className='weather-description'>Sunny</p>
                </div>
                <img src={"/icons/sunny.png"} className='weather-icon' />
            </div>


            <div className='buttom'>
                <p className="temperature">
                    18°C
                </p>
                <div className="details ">
                    <div className="parameter-row">
                        <span className='parameter-label top'>Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Feels Like</span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Wind</span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Humidity</span>
                        <span className="parameter-value">70%</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather