import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './mainBox.css'
function MainBox() {
    const ele = <FontAwesomeIcon icon={faSun}/>
    return (
        <div className="main-box">
            <div className="main-left">16°</div>
            <div className="main-middle">
                <div>London</div>
               </div>
            <div className="main-right">
                <div className="icon">{ele}</div>
                <div className="condition">Rain</div>
                </div> 
        </div>
    )
}

export default MainBox
