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
    <div className="container mt-5 mb-4 text-center">
      <div className="row">
      {maps.map((map, index) => (
        <MapCard map={map} index = {index} />
      ))}
   </div>
    </div>
  );
}

export default MapsList;
