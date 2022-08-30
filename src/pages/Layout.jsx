import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

function Layout() {
   const location = useLocation();
   const pageTitle = location.pathname.substring(1);

   return (
      <div className="container-fluid">
         <div className="row">
            <SideNav />
            <main className="main col px-0">
               <Navbar pageTitle={pageTitle} />
               <Outlet />
            </main>
         </div>
      </div>
   );
}

export default Layout;
