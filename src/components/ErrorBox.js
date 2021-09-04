import React from 'react'
import { useSelector } from 'react-redux'
import './errorbox.css'
function ErrorBox() {
    const state = useSelector(state => state.error)
    let element = state.length!==0?<div className="error">{state.toUpperCase()}</div>:<></>
    return element
}

export default ErrorBox
