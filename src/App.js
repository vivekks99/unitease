import React, { useState } from 'react'
import Calculator from './components/Calculator'
import Converter from './components/Converter'
import Toggle from './components/Toggle';

function App() {
  const [currentTab, setCurrentTab] = useState("calculator");
  return (
    <div className='app'>
      <div className="app-title">
        <span>UnitEase</span> - All in one Calculator & Unit Converter
      </div>
      <Toggle currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "calculator" ? <Calculator /> : <Converter />}
    </div>
  )
}

export default App