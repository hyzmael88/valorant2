import React from 'react'
import { v4 as uuidv4 } from 'uuid';


function WeaponStatsHeader({damage}) {
  var id = uuidv4()
  return (
    <div class="card-footer">
          <div
            id={`carouselExampleFade${id}`}
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {
                damage.map((stat, index)=>(
                  console.log(stat),
                  index == 0 ?
                  <div class="carousel-item active">
                
                  <h2 id='titulo'>{stat.rangeStartMeters}ms-{stat.rangeEndMeters}ms</h2>
                    <p className='texto'><span>Head Damage: </span><span>{stat.headDamage.toString().substring(0,5)}</span></p>
                    <p className='texto'><span>Body Damage: </span><span>{stat.bodyDamage.toString().substring(0,5)}</span></p>
                    <p className='texto'><span>Leg Damage: </span><span>{stat.legDamage.toString().substring(0,5)}</span></p>
                  </div>
                    :
                    <div class="carousel-item">
                
                <h2 id='titulo'>{stat.rangeStartMeters}ms-{stat.rangeEndMeters}ms</h2>
                    <p className='texto'><span>Head Damage: </span><span>{stat.headDamage.toString().substring(0,5)}</span></p>
                    <p className='texto'><span>Body Damage: </span><span>{stat.bodyDamage.toString().substring(0,5)}</span></p>
                    <p className='texto'><span>Leg Damage: </span><span>{stat.legDamage.toString().substring(0,5)}</span></p>
                    </div>
                ))
              }
              
             
            </div>


            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleFade${id}`}
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
              data-bs-target={`#carouselExampleFade${id}`}
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

export default WeaponStatsHeader