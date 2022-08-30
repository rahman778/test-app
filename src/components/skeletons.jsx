import React from "react";

import Skeleton from "react-loading-skeleton";

export function ActivitySkeletons() {
   return (
      <div className="activity d-flex align-items-start pb-3">
         <div className="activity-avatar">
            <Skeleton circle height="100%" width="100%" containerClassName="rounded-circle" />
         </div>
         <div className="col-10">
            <Skeleton count={1} />
            <Skeleton width={70} />
         </div>
      </div>
   );
}

export function TeamCardSkeleton() {
   return (
      <div className="team-card bg-white pt-2">
         <div className="d-flex justify-content-between align-items-start px-3">
            <div className="d-flex align-items-start">
               <div className="logo-wrapper">
                  <Skeleton height="100%" width="100%" />
               </div>
               <div className="d-flex flex-column ml-2">
                  <Skeleton width={50} />
                  <Skeleton height={12} width={80} />
               </div>
            </div>
            <img src={"/assets/icons/star-default.svg"} alt="" />
         </div>
         <div className="team-description font-14 pt-3 mb-3 px-3">
            <Skeleton height={14} />
            <Skeleton height={14} />
         </div>
         <div className="py-3 d-flex card-footer">
            <div className="d-flex align-items-center">
               <img src="/assets/icons/icon-conversations-small.svg" alt="" />
               <div className="ml-1 footer-text">
                  <Skeleton width={50} />
               </div>
            </div>
            <div className="d-flex align-items-center ml-3">
               <img src="/assets/icons/icon-leads-small.svg" alt="" />
               <div className="ml-1 footer-text">
                  <Skeleton width={50} />
               </div>
            </div>
         </div>
      </div>
   );
}
