import React, { useState, useCallback } from 'react'
import Launch from './components/Launch'
import LaunchDetails from './components/LaunchDetails'
import './App.css'

function App() {
  const [id, setId] = useState(13)
  const changeFlight = useCallback(newId => {
    setId(newId)
  }, [])
  return (
    <div className="App">
      <Launch changeFlight={changeFlight} />
      <LaunchDetails id={id} />
    </div>
  )
}

export default App
