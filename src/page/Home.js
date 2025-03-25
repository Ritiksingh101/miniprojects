import React, { useContext } from 'react'
import Data from './Data'
import { data } from 'autoprefixer'

function Home() {
  let list = ["A","B","C"]
  const {scrore,setScore}=useContext(data)
  return (
    <div>
      {scrore}
      <Data mydata={list}></Data>
    </div>
  )
}

export default Home