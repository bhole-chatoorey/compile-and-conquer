
import { createContext, useContext, useMemo } from 'react'
import io from 'socket.io-client'

const SocketContent= createContext()
const GetSocket= ()=> useContext(SocketContent)

const SocketProvider= ({children})=>{
  const socket=  useMemo(()=> 
    io($process.env.REACT_APP_API_URL, {withCredentials: true}) 
  ,[])
  return(
    <SocketContent.Provider value={socket}>
      {children}
    </SocketContent.Provider>
  )
}

export {GetSocket,SocketProvider}


