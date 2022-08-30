import React, { useEffect, useMemo, useState } from "react";
import Activity from "../components/Activity";
import Button from "../components/Button";
import SearchInput from "../components/SearchInput";
import { ActivitySkeletons, TeamCardSkeleton } from "../components/skeletons";
import Tab from "../components/Tab";
import TeamCard from "../components/TeamCard";

import { teams, activities } from "../data/mockData";
import { useEventLogFilter } from "../hooks";

function TeamsPage() {
   const [isLoading, setIsLoading] = useState(true);
   const [activeTab, setActiveTab] = useState("All");
   const [search, setSearch] = useState("");
   const [stickyClass, setStickyClass] = useState("");

   const [activityData] = useEventLogFilter(activities);

   useEffect(() => {
      window.addEventListener("scroll", stickNavbar);
      return () => window.removeEventListener("scroll", stickNavbar);
   }, []);

   const stickNavbar = () => {
      if (window !== undefined) {
         let windowHeight = window.scrollY;
         windowHeight > 30 ? setStickyClass("sticky-nav") : setStickyClass("");
      }
   };

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
   }, []);

   const groupTaeams = useMemo(
      () =>
         teams.filter((team) => {
            if (activeTab === "Favorites") {
               return team.is_favorited === true;
            }

            if (activeTab === "Archived") {
               return team.is_archived === true;
            }

            return teams;
         }),
      [activeTab]
   );

   return (
      <div className="teams-page">
         <div className={`teams-page-header bg-white pt-4 px-4 px-lg-5 ${stickyClass}`}>
            <div className="d-flex align-items-center justify-content-between">
               <div className="d-flex align-items-center">
                  <img src="/assets/icons/icon-companies.svg" alt="" />
                  <h3 className="mb-0 font-weight-bold ml-3">Teams</h3>
               </div>
               <Button title={"CREATE NEW TEAM"} />
            </div>
            <div className={`row align-items-center justify-content-between mt-4 `}>
               <div className="col-lg-4 col-xl-3 tab-wrapper">
                  <Tab tabs={["All", "Favorites", "Archived"]} activeTab={activeTab} setActiveTab={setActiveTab} />
               </div>
               <div className="col-6 col-sm-6 col-md-auto mt-3 mt-md-0">
                  <SearchInput name="team" placeholder="Search team name ..." inputValue={search} onChange={(val) => setSearch(val)} />
               </div>
            </div>
         </div>

         <div className="px-3 px-xl-5 pt-xl-5 pt-3 pb-5">
            <div className="row">
               <div className="col-lg-9">
                  <div className="content-wrapper">
                     <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
                        <div className="font-weight-bold font-18">{`${activeTab === "Favorites" ? "Favorited" : activeTab} Teams`}</div>
                        <div className="font-14 team-counter">{`Showing ${groupTaeams.length} out of ${groupTaeams.length} teams`}</div>
                     </div>

                     <div className="px-4 py-3">
                        <div className="row">
                           {isLoading
                              ? [...Array(3)].map((_, i) => (
                                   <div className="col-md-6 col-xl-4 px-xl-2 mb-3" key={i}>
                                      <TeamCardSkeleton />
                                   </div>
                                ))
                              : groupTaeams?.map((team) => (
                                   <div className="col-md-6 col-xl-4 px-xl-2 mb-3" key={team.id}>
                                      <TeamCard data={team} />
                                   </div>
                                ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 mt-4 mt-lg-0">
                  <div className="content-wrapper">
                     <div className="px-4 py-3 border-bottom mb-3">
                        <div className="font-weight-bold font-18">Activity</div>
                     </div>
                     {isLoading
                        ? [...Array(4)].map((_, i) => (
                             <div className="px-4 mb-2" key={i}>
                                <ActivitySkeletons />
                             </div>
                          ))
                        : activityData?.map((activity) => (
                             <div key={activity.id} className="px-4 mb-2">
                                <Activity data={activity} />
                             </div>
                          ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TeamsPage;
