import React from 'react'

function WeaponFooter({stats, index}) {
    console.log(stats)
  return (
    <div class="card-footer">
    <div
                  id={`carouselExampleFade${index}`}
                  class="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <p></p>
                    </div>
                    <div class="carousel-item">
                      <p></p>
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
                    <span class="visually-hidden" >Previous</span>
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
  )
}

export default WeaponFooter