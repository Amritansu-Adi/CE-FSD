import React from 'react'
import {useRef} from 'react'

const Useref = () => {
    const x = useRef(0)
    let a = 5
    function increment(){
        x.current ++
    }
    function increment(){
        a++
    }
  return (
    <>
    <div>{x.current}
    
    </div>
    <p>{a}</p>
    <button onClick={increment}>click me</button>
    <button onclick = {increase}>click me 2</button>
</>
  )
}

export default Useref