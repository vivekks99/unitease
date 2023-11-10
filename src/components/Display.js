import React from 'react'

function Display({display, answer}) {
    
  return (
    <div className="display-container">
      <p className='show-answer'>{answer}</p>
      <p className='display'>{display}</p>
    </div>
  )
}

export default Display