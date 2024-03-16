import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

const App = () => {
  return (
    <div className='App-container'>
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar />
        <Main />
      </div>


    </div>
  )
}

export default App