import React from "react";
import WeaponStatsHeader from "./WeaponStatsHeader";
import { v4 as uuidv4 } from 'uuid';

function WeaponFooter({ stats}) {
  return (
    <div className="card-footer">
      
        {
            <WeaponStatsHeader damage={stats.damageRanges}/>
        } 
        

    </div>
  );
}

export default WeaponFooter;
