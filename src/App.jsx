import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Authentication/Login'
import Registration from './Authentication/Registration'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
