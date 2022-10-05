import React, { createContext } from 'react'
import {useEffect , useState} from 'react'
import axios from 'axios'

const AppLevelContext = createContext();
const API = "https://valorant-api.com/v1"

export const AppLevelProvider = ({children}) => {

    const [agents, setAgents] = useState([])
    const [weapons, setWeapons] = useState([])
    const [maps, setMaps] = useState([])

    const fetchAgents = async() =>{
        const response = await axios.get(`${API}/agents`)
        setAgents(response.data.data)
    }
    const fetchWeapons = async() =>{
        const response = await axios.get(`${API}/weapons`)
        setWeapons(response.data.data)
    }
    const fetchMaps = async() =>{
        const response = await axios.get(`${API}/maps`)
        setMaps(response.data.data)
    }

    return(
        <AppLevelContext.Provider value={{
            agents,
            weapons,
            maps,
            setAgents,
            setMaps,
            setWeapons,
            fetchAgents,
            fetchMaps,
            fetchWeapons

        }}>{children}</AppLevelContext.Provider>
    )
}

export default AppLevelContext