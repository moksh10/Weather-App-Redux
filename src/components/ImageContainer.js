import React from 'react'
import { useSelector } from 'react-redux'
import './imageContainer.css'
import {useSpring,animated} from 'react-spring'
import MainBox from './MainBox'
function ImageContainer() {
    const id = useSelector(state=>state.id)
  
    let bg = "fog"
    if(id>=200&&id<=232)
    {
        bg="storm"

    }
    else if(id>=300&&id<=321)
    {
        bg="drizzle"
    }
    else if(id>=500&&id<=531)
    {
        bg="rain"
    }
    else if(id>=600&&id<=622)
    {
        bg="snow"
    }
    else if(id>=701&&id<=781)
    {
        bg="fog"
    }
    else if(id===800)
    {
        bg="clear"
    }
    else
    {
        bg="cloudy"
    }
    return (
        <>
        <animated.div className={`image-container ${bg}`}>
        </animated.div>
        <MainBox />
        </>
    )
}

export default ImageContainer
