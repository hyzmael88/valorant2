import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";
import AgentCard from "./AgentCard";

function AgentList() {
  const { agents, fetchAgents } = useContext(AppLevelContext);

  useEffect(() => {
    fetchAgents();
  }, []);
  console.log(agents);
  return (
    <div className="container mt-5 mb-4 text-center">
      <div className="row">
        {agents.map((agent, index) => (
          <AgentCard agent={agent} index={index} />
        ))}
      </div>
    </div>
  );
}

export default AgentList;
