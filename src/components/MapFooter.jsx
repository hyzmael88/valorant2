import React from 'react'

function MapFooter({callouts}) {
    try {
        return (
            <div className="card-footer">
          <ul>
            {
                callouts != null?
                callouts.map(callout=>(
                    callout != null?
                    <li>{callout.regionName}</li>
                    :
                   null
                ))
                :
                <li>Callouts no disponibles por el momentor</li>
            }
          </ul>
          </div>


          )
    } catch (error) {
        console.log(error)
    }
  
}

export default MapFooter