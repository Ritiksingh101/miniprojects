import React, { createContext, useState } from 'react'

export const Data = createContext()

function Context({children}) {
    const [value, setValue] = useState(1)
    const [scrore,setScore] =useState(5)
  return (
    <Data.Provider value={{value, setValue,scrore,setScore}}>
        {children}
    </Data.Provider>
  )
}

export default Context