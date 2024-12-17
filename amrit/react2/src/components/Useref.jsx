import React from 'react'
import {useRef} from 'react'

const Useref = () => {
    const x = useRef(0)
    let a = 5
    function increment(){
        x.current ++
    }
    function increase(){
        a++
    }
  return (
    <>
    <div>{x.current}
    
    </div>
    <p>{a}</p>
    <button onClick={increment}>click me</button>
    <button onClick = {increase}>click me 2</button>
</>
  )
}

export default Useref