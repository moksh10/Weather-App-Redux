import API from './../API/api'
const getInfo = (query) =>{
    return dispatch => {
        dispatch({type:'GET_INFO'})
        API.get("",{params:{q: query}})
        .then((res)=>{
            const data = res.data
            const payload = {name:data.name,id:data.weather[0].id,main:data.weather[0].main,temp:data.main.temp,temp_min:data.main.temp_min,temp_max:data.main.temp_max,pressure:data.main.pressure,humidity:data.main.humidity,visibility:data.visibility,wind:data.wind.speed,date:new Date(data.dt*1000)}
            dispatch({type:'SET_INFO',payload:payload})
        })
        .catch((err)=>{
            
            dispatch({type:'ERROR',payload:err})
        })

    }
}

 export default getInfo    
