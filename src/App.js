import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { AuthenticationContext } from './context/AuthenticationContext'
import LoginView from './view/LoginView'
import MainView from './view/MainView'
import './App.css'

function App() {
  const { user } = React.useContext(AuthenticationContext) 

  return (
    <div className='App'>
      <AnimatePresence>
        { !user ? <LoginView/> : <MainView/> }
      </AnimatePresence>
    </div>
  )
}

export default App
