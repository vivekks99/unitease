import React, { useState } from 'react'
import Buttons from './Buttons';
import Display from './Display';

function Calculator() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState(0);

  return (
    <div className='calculator'>
        <Display display={display} answer={answer} />
        <Buttons display={display} setDisplay={setDisplay} setAnswer={setAnswer} />
    </div>
  )
}

export default Calculator