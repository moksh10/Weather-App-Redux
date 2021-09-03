import { GET_INFO,SET_INFO,ERROR } from "../actions/actionTypes"
const initialInfo = {name:"",id:"",main:"",temp:"",temp_min:"",temp_max:"",humidity:"",pressure:"",visibility:"",wind:"",bg:"fog"}
const reducer=(state=initialInfo,action)=>{
    switch(action.type)
    {
        case GET_INFO:
            return state
        case SET_INFO:
            return {...action.payload}    
        case ERROR:
            return state
        default:
            return state

    }
}
export default reducer