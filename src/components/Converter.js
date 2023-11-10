import React, { useState } from 'react'
import CategoryBar from './CategoryBar'
import ConvertContent from './ConvertContent';
import {currencyList, lengthList, areaList, temperataureList, speedList, pressureList} from '../data/units';

function Converter() {
  const [converter, setConverter] = useState('currency');
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className='converter-container'>
        {!showSideBar && <div className='sidebar-icon' onClick={() => setShowSideBar(true)}>
          <i className="fas fa-bars"></i>
        </div>}
      <div className="converter-section">
        <div className={`category-container ${showSideBar && "sidebar-active"}`}>
          <CategoryBar categoryTitle="Currency" converter={converter} setConverter={setConverter} setShowSideBar={setShowSideBar} />
          <CategoryBar categoryTitle="Length" converter={converter} setConverter={setConverter} setShowSideBar={setShowSideBar} />
          <CategoryBar categoryTitle="Area" converter={converter} setConverter={setConverter} setShowSideBar={setShowSideBar} />
          <CategoryBar categoryTitle="Temperature" converter={converter} setConverter={setConverter} setShowSideBar={setShowSideBar} />
          <CategoryBar categoryTitle="Speed" converter={converter} setConverter={setConverter} setShowSideBar={setShowSideBar} />
          <CategoryBar categoryTitle="Pressure" converter={converter} setConverter={setConverter} setShowSideBar={setShowSideBar} />
        </div>
        <div className="converter-content">
          {converter === "currency" && <ConvertContent unitList={currencyList} category={converter} imgUrl="./money.png" title="Exchange Rate Calculator" firstUnit="USD" secondUnit="INR" />}
          {converter === "length" && <ConvertContent unitList={lengthList} category={converter} imgUrl="./length.png" title="Length Calculator" firstUnit="m" secondUnit="cm" />}
          {converter === "area" && <ConvertContent unitList={areaList} category={converter} imgUrl="./area.png" title="Area Calculator" firstUnit="m2" secondUnit="cm2" />}
          {converter === "temperature" && <ConvertContent unitList={temperataureList} category={converter} imgUrl="./temperature.png" title="Temperature Calculator" firstUnit="C" secondUnit="F" />}
          {converter === "speed" && <ConvertContent unitList={speedList} category={converter} imgUrl="./speed.png" title="Speed Calculator" firstUnit="km/h" secondUnit="m/s" />}
          {converter === "pressure" && <ConvertContent unitList={pressureList} category={converter} imgUrl="./pressure.png" title="Pressure Calculator" firstUnit="bar" secondUnit="Pa" />}
        </div>
      </div>
    </div>
  )
}

export default Converter