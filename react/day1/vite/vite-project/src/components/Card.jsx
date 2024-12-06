import React from 'react'
import pic from "../images/react.svg"
import './Card.css'

const card = (props) => {
  return (
    <div className = "card">
        <h1>{props.name}</h1>
        <img src={pic}/>
        
    </div>
  )
}



export default card