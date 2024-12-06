import React from 'react'
import { useState } from 'react'
import Button from './Button'

export const States2 = () => {
    const [color, setCount] = useState("red")
  return (
    <div>
        <h1>my fav colour is {color}</h1>
        <Button name = "red"  state = {setCount}/>
        <Button name = "blue" state = {setCount}/
        >
        <Button name = "green" state = {setCount}/>
    </div>
  )
}

export default States2