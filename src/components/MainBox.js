import './mainBox.css'
import { useSelector } from 'react-redux'
function MainBox() {
    const state = useSelector(state => state)
    const {name,temp,main}=state
   
    return (
        <>

        <div className="main-box">
            <div className="main-left">{temp}°</div>
            <div className="main-middle">
                <div>{name}</div>
               </div>
            <div className="main-right">
                <div className="condition">{main}</div>
                </div> 

        </div>
                
        </>
    )
}

export default MainBox
