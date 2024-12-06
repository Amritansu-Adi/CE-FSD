import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
const Registration = ({regData}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)
        const data = {name: name,
           email: email,
          password: password
          }
        regData(data);
        
    }

  return (
    <div>
      <form>
      <div className="form-group">
    <label htmlFor="exampleInputName1">Name</label>
    <input type="text" onChange={(e) => {setName(e.target.value)}} className="form-control" id="exampleInputName1"/>
      </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Registration