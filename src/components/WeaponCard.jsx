import React from "react";

import "./styles/WeaponCard.css";
import ReactPlayer from "react-player";
import WeaponSkinsCard from "./WeaponSkinsCard";
import WeaponFooter from "./WeaponFooter";

function WeaponCard({ weapon, index }) {
  


console.log(weapon.weaponStats)
  
  return (
    <div class="col-md-4">
      <div class="card-list">
        <div class="card h-100 mb-4">
          <div class="card-image">
            <h2 className="mt-4">{weapon.displayName}</h2>
            
            <span class="date">Weapon's Category</span>
            <br></br>
            <span>{weapon.category.substring(21, 30)}</span>
            <hr></hr>
          </div>

          <div class="card-body">
            <div
              id={`carouselExampleFade${index}`}
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={weapon.displayIcon}
                    alt="Display Icon"
                  />
                </div>

                {weapon.skins.map((skin) => (
                  <WeaponSkinsCard skin={skin} />
                ))}
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExampleFade${index}`}
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExampleFade${index}`}
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>

          <WeaponFooter />
          
         
        </div>
      </div>
    </div>
  );
}

export default WeaponCard;
