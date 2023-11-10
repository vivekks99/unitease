import React from 'react'

function Toggle({currentTab, setCurrentTab}) {
  return (
    <div className="tabs-container">
        <div className="switching-tabs">
            <div className="tab-items">
                <span className={`tab-item ${currentTab === "calculator" && "active"}`} onClick={() => setCurrentTab("calculator")}>Calculator</span>
                <span className={`tab-item ${currentTab === "converter" && "active"}`} onClick={() => setCurrentTab("converter")}>Converter</span>
                <span className="moving-bg" />
            </div>
        </div>
    </div>
  )
}

export default Toggle