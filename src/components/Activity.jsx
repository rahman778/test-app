import React from "react";

function Activity({ data }) {
   const { avatar, logDesc, created_at } = data;

   return (
      <div className="activity d-flex align-items-start pb-3">
         <div className="activity-avatar">
            <img className="img-fluid rounded-circle" src={avatar || ""} alt="" />
         </div>
         <div className="col-10">
            <div className="font-14">{logDesc}</div>
            <div className="activity-time">{created_at}</div>
         </div>
      </div>
   );
}

export default Activity;
