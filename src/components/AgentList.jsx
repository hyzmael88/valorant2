import { useContext } from 'react'
import AppLevelContext from '../context/AppLevelContext'
import AgentCard from './AgentCard'

function AgentList() {
    const {agents} = useContext(AppLevelContext)
  return (
    <div className='container mt-4 mb-4 text-center' >
        <div className='row'>
            {agents.map(agent =>(
                
            <AgentCard agent = {agent} />
        ))}
            
        

        </div>
       
    </div>
  )
}

export default AgentList