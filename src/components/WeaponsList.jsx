import React from "react";
import WeaponCard from "./WeaponCard";
import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";

function WeaponsList() {
  const { weapons, fetchWeapons } = useContext(AppLevelContext);

  useEffect(() => {
    fetchWeapons();
  }, []);
  console.log(weapons);

  return (
    <div className="container mt-5 mb-4 text-center">
      <div className="row">
        {weapons.map((weapon, index) => (
          <WeaponCard weapon={weapon} index={index} />
        ))}
      </div>
    </div>
  );
}

export default WeaponsList;
