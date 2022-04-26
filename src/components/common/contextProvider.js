import React, { createContext, useEffect, useState } from 'react'
export const Ctx1 = createContext()

const ContextProvider = (props) => {
    const [activeMovie, updateActiveMovie] = useState('')
    const [activePerson, updateActivePerson] = useState('')
    useEffect(()=>{
      // console.log('this is active movie')
      // console.log(activeMovie)
    }, [activeMovie])
    useEffect(()=>{
      // console.log('this is active person')
      // console.log(activePerson)
    }, [activePerson])
  return (
    <Ctx1.Provider value={{activeMovie, activePerson, updateActiveMovie, updateActivePerson}}>{props.children}</Ctx1.Provider>
  )
}

export default ContextProvider