import React from "react";

import { currentUser } from "../data/mockData";

function Navbar({ pageTitle }) {
   return (
      <nav className="navbar border-bottom bg-white py-0 w-100 pl-0 d-flex flex-wrap justify-content-start align-items-center pr-5">
         <div className="border-right px-3 px-md-5 nav-title app-name opacity-50 font-weight-bold">NARWHAL</div>
         <div className="pl-md-4 pl-2 nav-title text-capitalize">{pageTitle}</div>

         <div className="ml-auto d-flex align-items-center">
            <span className="position-relative mr-4">
               <img src="/assets/icons/icon-mail.svg" alt="" />
               <span className="notification-badge">{currentUser?.notifications_count}</span>
            </span>
            <div className="d-flex align-items-center">
               <div className="opacity-50 font-14 font-weight-bold">{`Hello, ${currentUser?.name}`}</div>
               <span className="avatar-wrapper mx-2">
                  <img src={currentUser?.avatar} className="img-fluid rounded-circle" alt="" />
               </span>
               <img src="/assets/icons/caret-down.svg" className="cursor-pointer" alt="" />
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
