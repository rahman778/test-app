import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function SideNav() {
   const location = useLocation();

   const getActiveClass = (path) => {
      if (location.pathname.toLowerCase().includes(path)) {
         return "active";
      }
      return "";
   };
   return (
      <nav className="side-nav d-none d-sm-flex flex-column text-center justify-content-start py-4">
         <NavLink className="mb-3" to="/">
            <img src="/assets/icons/sw-logo-white.svg" className="img-fluid" alt="" />
         </NavLink>
         <ul className="pl-0 mb-0 list-unstyled">
            <li className={`nav-item ${getActiveClass("compaigns")}`}>
               <NavLink className="nav-link" to="/compaigns">
                  <img src="/assets/icons/icon-campaign.svg" alt="" />
               </NavLink>
            </li>
            <li className={`nav-item ${getActiveClass("teams")}`}>
               <NavLink className="nav-link" to="/teams">
                  <img src="/assets/icons/icon-teams.svg" alt="" />
               </NavLink>
            </li>
            <li className={`nav-item ${getActiveClass("contacts")}`}>
               <NavLink className="nav-link" to="/contacts">
                  <img src="/assets/icons/icon-leads.svg" alt="" />
               </NavLink>
            </li>
            <li className={`nav-item ${getActiveClass("reports")}`}>
               <NavLink className="nav-link" to="/reports">
                  <img src="/assets/icons/icon-reports.svg" alt="" />
               </NavLink>
            </li>
         </ul>
         <NavLink className="nav-link mt-auto" to="/help">
            <img src="/assets/icons/icon-help.svg" alt="" />
         </NavLink>
      </nav>
   );
}

export default SideNav;
