import { GET_INFO,SET_INFO,ERROR } from "../actions/actionTypes"
const initialInfo = {name:"",id:701,main:"",temp:"",temp_min:"",temp_max:"",humidity:"",pressure:"",visibility:"",wind:"",bg:"fog",date:"",error:""}
const reducer=(state=initialInfo,action)=>{
    switch(action.type)
    {
        case GET_INFO:
            return state
        case SET_INFO:
            return {...action.payload}    
        case ERROR:
            return {...state,...action.payload}
        default:
            return state

    }
}
export default reducer