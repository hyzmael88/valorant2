import React from "react";
import MapFooter from "./MapFooter";
import "./styles/MapCard.css";


function MapCard({ map, index }) {
  try {
    return (
      <div className="col-md-4">
        <div className="card-list">
          <div className="card h-100 mb-4">
            <div className="card-image">
              <h2 classNameName="mt-4">{map.displayName}</h2>

              <span className="date">Real World Coordinates: </span>
              <br></br>
              <span>{map.coordinates}</span>
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
                      src={map.splash}
                      alt="Display Icon"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      id="mapIcon"
                      className="d-block w-100 "
                      src={map.displayIcon}
                      alt="Display Icon"
                    />
                  </div>
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
