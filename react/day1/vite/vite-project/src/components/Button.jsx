import React from 'react'

const button = (props) => {
    console.log(props)
  return (
    <button onClick={() => props.state(props.name)}>{props.name}</button>
  )
}

export default button