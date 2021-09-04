import API from './../API/api'
const getInfo = (query) =>{
    return dispatch => {
        dispatch({type:'GET_INFO'})
        API.get("",{params:{q: query}})
        .then((res)=>{
            const data = res.data
            const payload = {name:data.name,id:data.weather[0].id,main:data.weather[0].main,temp:data.main.temp,temp_min:data.main.temp_min,temp_max:data.main.temp_max,pressure:data.main.pressure,humidity:data.main.humidity,visibility:data.visibility,wind:data.wind.speed,date:new Date(data.dt*1000),error:""}
            dispatch({type:'SET_INFO',payload:payload})
        })
        .catch((err)=>{
            if(err.response)
            {dispatch({type:'ERROR',payload:{error:err.response.data.message}})}
            else
            {dispatch({type:'ERROR',payload:{error:"Network Error"}})}
            setTimeout(()=>dispatch({type:'ERROR',payload:{error:""}}),4000)

            
        })

    }
}

 export default getInfo    
