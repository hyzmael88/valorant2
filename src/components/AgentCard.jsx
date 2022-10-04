
import './styles/AgentCard.css'

function AgentCard({agent}) {

  return (

    
    <div className='col-md-4'>
        
    <div class="card-list">

        <div class="card h-100 mb-4">

            <div class="card-image">
                <img src={agent.fullPortrait} alt="agente"/>
            </div>
            <div class="card-body">
                <span class="date">NOMBRE DE AGENTE</span>
                <h2>{agent.displayName}</h2>
                <p>{agent.description}</p>
            </div>

            <div class="card-footer">
                <div class="info">
                    <div class="value">Q</div>
                    <div class="type">{agent.abilities[0].displayName}</div>
                </div>

                <div class="info">
                    <div class="value">E</div>
                    <div class="type">{agent.abilities[1].displayName}</div>
                </div>

                <div class="info">
                    <div class="value">C</div>
                    <div class="type">
                    {agent.abilities[2].displayName}
                    </div>
                </div>
                <div class="info">
                    <div class="value">R</div>
                    <div class="type">
                    {agent.abilities[3].displayName}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AgentCard