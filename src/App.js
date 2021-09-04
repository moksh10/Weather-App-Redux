/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import ImageContainer from './components/ImageContainer'
import InfoContainer from './components/InfoContainer'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import getInfo from './actions/weatherAction'
function App() {
   const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getInfo("Tokyo"))

  },[])
  return (
    <div className="app-container">
      <ImageContainer />
      <InfoContainer />
    </div>
  )
}

export default App
