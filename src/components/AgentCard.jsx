import "./styles/AgentCard.css";
import ReactAudioPlayer from "react-audio-player";

function AgentCard({ agent }) {
    
    /* function changeBackground(e) {
        e.target.style.background = `linear-gradient(
            ${agent.backgroundGradientColors[0]},
             ${agent.backgroundGradientColors[1]},
             ${agent.backgroundGradientColors[2]},
             ${agent.backgroundGradientColors[3]});`;
      } */
     
  {
    if (agent.isPlayableCharacter == true) {
      return (
        <div class="col-md-4">
          <div  class="card-list">
            <div   class="card h-100 mb-4" >
              <div class="card-image">
                <img src={agent.fullPortrait} alt="agente" />
              </div>
              <div class="card-body">
                <span class="date">Agent's Name</span>
                <h2>{agent.displayName}</h2>
                <span>{agent.role.displayName}</span>
                <hr></hr>
                
                <p>{agent.description.substring(0, 250)}</p>
                <div id="voice">
                <label id="voice-label">Voice:</label>
                <ReactAudioPlayer className="audio" src={agent.voiceLine.mediaList[0].wave}  controls />
                </div>
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
                  <div class="type">{agent.abilities[2].displayName}</div>
                </div>
                <div class="info">
                  <div class="value">R</div>
                  <div class="type">{agent.abilities[3].displayName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AgentCard;
