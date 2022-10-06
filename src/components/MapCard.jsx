import React from "react";
import MapFooter from "./MapFooter";
import "./styles/MapCard.css";


function MapCard({ map, index }) {
  try {
    return (
      <div class="col-md-4">
        <div class="card-list">
          <div class="card h-100 mb-4">
            <div class="card-image">
              <h2 className="mt-4">{map.displayName}</h2>

              <span class="date">Real World Coordinates: </span>
              <br></br>
              <span>{map.coordinates}</span>
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
                      src={map.splash}
                      alt="Display Icon"
                    />
                  </div>

                  <div class="carousel-item">
                    <img
                      id="mapIcon"
                      class="d-block w-100 "
                      src={map.displayIcon}
                      alt="Display Icon"
                    />
                  </div>
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
              <MapFooter callouts={map.callouts} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default MapCard;
