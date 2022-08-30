import React from "react";

function TeamCard({ data }) {
   const { name, image, description, campaigns_count, leads_count, is_favorited, created_at } = data;

   return (
      <div className="team-card bg-white pt-2">
         <div className="d-flex justify-content-between align-items-start px-3">
            <div className="d-flex align-items-start">
               <div className="logo-wrapper">
                  <img src={image} className="img-fluid" alt="" />
               </div>
               <div className="d-flex flex-column ml-2">
                  <div className="font-weight-bold team-name">{name}</div>
                  <div className="created">{created_at ? `Created on ${created_at}` : ""}</div>
               </div>
            </div>
            <img src={is_favorited ? "/assets/icons/star-active.svg" : "/assets/icons/star-default.svg"} alt="" />
         </div>
         <div className="team-description font-14 pt-3 mb-3 px-3">{description}</div>
         <div className="py-3 d-flex card-footer">
            <div className="d-flex align-items-center">
               <img src="/assets/icons/icon-conversations-small.svg" alt="" />
               <div className="ml-1 footer-text">{`${campaigns_count} Campaigns`}</div>
            </div>
            <div className="d-flex align-items-center ml-3">
               <img src="/assets/icons/icon-leads-small.svg" alt="" />
               <div className="ml-1 footer-text">{`${leads_count} Leads`}</div>
            </div>
         </div>
      </div>
   );
}

export default TeamCard;
