import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  
import MainLayout from './components/MainLayout'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'


function App() {
  const [store, setStore] = useState("")

  return (
    <>
    {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<Login  regDataLogin={store}/>}/>
          <Route path="/registration" element={<Registration regData={setStore}/>}/>
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
