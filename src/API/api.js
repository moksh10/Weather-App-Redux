import axios from 'axios'
export default axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/weather',
    params:{
        appid:'6a450a8127936d3e5340f2f2747830b0',
        units:'metric'
    }

})