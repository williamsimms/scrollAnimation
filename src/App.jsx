import React from 'react'
import data from './data/data'
import Box from './components/Box/Box'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <h1>Scroll</h1>
      <div className='app__boxes'>
        {data.map((name, index) => (
          <Box content={name} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App
