import React from "react";

function Tab({ tabs, activeTab, setActiveTab }) {
   return (
      <div className="d-flex custom-tabs">
         <div className="w-100">
            <nav>
               <div className="nav nav-tabs justify-content-between">
                  {tabs.map((tab, indx) => (
                     <button
                        type="button"
                        key={indx}
                        className={`nav-item nav-link ${activeTab === tab && "active"}`}
                        onClick={() => setActiveTab(tab)}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </nav>
         </div>
      </div>
   );
}

export default Tab;
