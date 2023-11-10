import React from 'react'

function Button({title, display, style, setDisplay, setAnswer}) {
    function evaluate(){
        let lastElement = display[display.length - 1];
        if(title === "+"){
            if(lastElement === ' '){
                return;
            }
            else{
                display += " + ";
                setDisplay(display);
            }
        }
        else if(title === "-"){
            if(lastElement === ' '){
                return;
            }
            else{
                display += " - ";
                setDisplay(display);
            }
        }
        else if(title === "*"){
            if(lastElement === ' '){
                return;
            }
            else{
                display += " * ";
                setDisplay(display);
            }
        }
        else if(title === "/"){
            if(lastElement === ' '){
                return;
            }
            else{
                display += " / ";
                setDisplay(display);
            }
        }
        else if(title === "="){
            try {
                let evaluatedAnswer = eval(display);
                setAnswer(evaluatedAnswer);
            }
            catch {
                setAnswer(0);
            }
        }
        else if(title === "."){
            if(lastElement === '.'){
                return;
            }
            else{
                display += ".";
                setDisplay(display);
            }
        }
        else if(title === "AC"){
            setDisplay('');
            setAnswer(0);
        }
        else if(title === "DEL"){
            let newDisplay = '';
            let displayLength = display.length - 1;
            if(display[displayLength - 1] === ' ') displayLength -= 1;
            for(let i = 0; i < displayLength; i++){
                newDisplay += display[i];
            }
            setDisplay(newDisplay);
            try {
                let evaluatedAnswer = eval(newDisplay);
                setAnswer(evaluatedAnswer);
            }
            catch {
                setAnswer(0);
            }
        }
        else{
            display += title;
            setDisplay(display);
        }
    }
  return (
    <div className={`btn-icon ${style}`} onClick={() => evaluate()}>{title}</div>
  )
}

export default Button