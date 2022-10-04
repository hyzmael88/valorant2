import { useContext, useEffect } from 'react'
import AppLevelContext from '../context/AppLevelContext'
import AgentList from '../components/AgentList'

function Agents() {
    const {agents, fetchAgents} = useContext(AppLevelContext)

    useEffect(()=>{
        fetchAgents()
    },[])
    console.log(agents)
  return (
    <AgentList />
  )
}

export default Agents