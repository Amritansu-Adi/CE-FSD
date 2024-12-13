import React from 'react'
import { useState } from 'react'

const Login = ({regDataLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function verification(e){
    e.preventDefault()
    if (regDataLogin.email  == email && regDataLogin.password == password){
      alert("Login Successful")
      Navigate("/dashboard")
    }
    else{
      alert("Login Failed")
    }}
  return (
    <div>
      <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={verification}>Submit</button>
      </form>
    </div>
  )
}

export default Login