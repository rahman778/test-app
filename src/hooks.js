import React, { useState, useEffect } from "react";

export const useEventLogFilter = (logData) => {
   const [logEntries, setLogEntries] = useState();

   useEffect(() => {
      const newObj = [];

      for (let index = 0; index < logData?.length; index++) {
         let logText = getTexts(logData[index]);

         const id = logData[index]?.id;
         const avatar = logData[index]?.person.avatar;
         const createdTime = logData[index]?.created_at;

         newObj.push({
            id,
            avatar,
            logDesc: logText,
            created_at: createdTime,
         });
      }

      setLogEntries(newObj);
   }, [logData]);

   const getTexts = (logData) => {
      let logEntriesData = "";

      switch (logData?.action) {
         case "increased_quota":
            logEntriesData = (
               <span>
                  <b>{logData.person.name}</b> increased <b>{logData.target}'s</b> quota
               </span>
            );
            break;

         case "added_leads":
            logEntriesData = (
               <span>
                  <b>{logData.person.name}</b> added new leads to <b>{logData.target}</b>
               </span>
            );

            break;

         case "archived_team":
            logEntriesData = (
               <span>
                  <b>{logData.person.name}</b> archived the team <b>{logData.target}</b>
               </span>
            );

            break;

         default:
            break;
      }

      return logEntriesData;
   };

   return [logEntries];
};
