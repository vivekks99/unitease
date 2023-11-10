import React, { useState } from 'react'
import UnitOption from './UnitOption';
import convert from 'convert-units';

function ConvertContent({unitList, category, firstUnit, secondUnit, imgUrl, title}) {
  const [unitOne, setUnitOne] = useState(firstUnit);
  const [unitTwo, setUnitTwo] = useState(secondUnit);
  const [unitOneValue, setUnitOneValue] = useState(1);
  const [unitTwoValue, setUnitTwoValue] = useState(0);

  function handleSwap(){
    const temp = unitOne;
    const tempVal = unitOneValue;
    setUnitOne(unitTwo);
    setUnitTwo(temp);
    setUnitOneValue(unitTwoValue);
    setUnitTwoValue(tempVal);
  }

  function calculateCurrency(){
    fetch(`https://open.exchangerate-api.com/v6/latest/${unitOne}`)
    .then(res => res.json())
    .then(data => {
      setUnitTwoValue((unitOneValue * data.rates[unitTwo]).toFixed(2));
    });
  }

  function calculateUnit(){
    const answer = convert(unitOneValue).from(unitOne).to(unitTwo);
    setUnitTwoValue(answer);
  }

  let convertUnit;
  if (category === "currency") convertUnit = calculateCurrency;
  else convertUnit = calculateUnit;


  return (
    <>
        <div className="convert-img"><img src={imgUrl} alt="" /></div>
        <div className='convert-title'>{title}</div>
        <div className="unit-change">
            <select value={unitOne} onChange={(e) => setUnitOne(e.target.value)}>
                {unitList.map(unit => (
                    <UnitOption key={unit} unitTitle={unit} />
                ))}
            </select>
            <input type="number" value={unitOneValue} onChange={(e) => setUnitOneValue(e.target.value)} />
        </div>

        <div className="swap-rate-container">
            <button className="calculate-btn"  onClick={() => convertUnit()}>Calculate</button>
            <img src="./arrows.png" alt="" className='arrow-icon' onClick={() => handleSwap()} />
            <div className="rate" ></div>
        </div>

        <div className="unit-change">
            <select value={unitTwo} onChange={(e) => setUnitTwo(e.target.value)}>
                {unitList.map(unit => (
                    <UnitOption key={unit} unitTitle={unit} />
                ))}
            </select>
            <input type="number" value={unitTwoValue} readOnly />
        </div>
    </>
  )
}

export default ConvertContent
