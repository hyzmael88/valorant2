import React from "react";

import "./styles/WeaponCard.css";
import ReactPlayer from "react-player";
import WeaponSkinsCard from "./WeaponSkinsCard";
import WeaponFooter from "./WeaponFooter";

function WeaponCard({ weapon, index }) {
  

try {
  if(weapon.weaponStats){
  var stats = weapon.weaponStats
  }
  
} catch (error) {
  console.log(error)
}
  
  return (
    <div className="col-md-4">
      <div className="card-list">
        <div className="card h-100 mb-4">
          <div className="card-image">
            <h2 className="mt-4">{weapon.displayName}</h2>
            
            <span className="date">Weapon's Category</span>
            <br></br>
            <span>{weapon.category.substring(21, 30)}</span>
            <hr></hr>
          </div>

          <div className="card-body">
            <div
              id={`carouselExampleFade${index}`}
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={weapon.displayIcon}
                    alt="Display Icon"
                  />
                </div>

                {weapon.skins.map((skin) => (
                  <WeaponSkinsCard skin={skin} />
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExampleFade${index}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExampleFade${index}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
                  {
                    stats!=null?
                    <WeaponFooter stats={stats}/>
                    : null
                  }
          
          
         
        </div>
      </div>
    </div>
  );
}

export default WeaponCard;
