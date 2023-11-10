import React from 'react'
import Button from './Button';

const calculatorBtns = [['AC','g'],['DEL','g'],['.','g'],['=','o'],['7','g'],['8','g'],['9','g'],['*','o'],['4','g'],['5','g'],['6','g'],['-','o'],['1','g'],['2','g'],['3','g'],['+','o'],['0','g'],['(','g'],[')','g'],['/','o']];

function Buttons({display, setDisplay, setAnswer}) {

  return (
    <div className='btns-container'>
        {calculatorBtns.map((i,index) =>{
          return (<Button title={i[0]} style={i[1]} key={index} display={display} setDisplay={setDisplay} setAnswer={setAnswer} />)
        })}
    </div>
  )
}

export default Buttons