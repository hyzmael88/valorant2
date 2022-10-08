import "./styles/AgentCard.css";
import ReactAudioPlayer from "react-audio-player";

function AgentCard({ agent, index }) {
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
        <div className="col-md-4">
          <div className="card-list">
            <div className="card h-100 mb-4">
              <div className="card-image">
                <img src={agent.fullPortrait} alt="agente" />
              </div>

              <div className="card-body">
                <span className="date">Agent's Name</span>
                <h2>{agent.displayName}</h2>
                <span>{agent.role.displayName}</span>
                <hr></hr>

                <div
                  id={`carouselExampleFade${index}`}
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p>{agent.description.substring(0, 250)}</p>
                    </div>
                    <div className="carousel-item">
                      <p>{agent.role.description}</p>
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
                    <span className="visually-hidden" >Previous</span>
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



                <div id="voice">
                  <label id="voice-label">Voice:</label>
                  <ReactAudioPlayer
                    className="audio"
                    src={agent.voiceLine.mediaList[0].wave}
                    controls
                  />
                </div>
              </div>

              <div className="card-footer">
                <div className="info">
                  <div className="value">Q</div>
                  <div className="type">{agent.abilities[0].displayName}</div>
                </div>

                <div className="info">
                  <div className="value">E</div>
                  <div className="type">{agent.abilities[1].displayName}</div>
                </div>

                <div className="info">
                  <div className="value">C</div>
                  <div className="type">{agent.abilities[2].displayName}</div>
                </div>
                <div className="info">
                  <div className="value">R</div>
                  <div className="type">{agent.abilities[3].displayName}</div>
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
