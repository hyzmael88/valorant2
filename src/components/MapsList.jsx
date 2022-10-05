import React from "react";
import MapCard from "./MapCard";
import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";



function MapsList() {
  const { maps, fetchMaps } = useContext(AppLevelContext);

  useEffect(() => {
    fetchMaps();
  }, []);
  console.log(maps);
  return (
    <div>
      MapsList
      <MapCard maps={maps} />
    </div>
  );
}

export default MapsList;
