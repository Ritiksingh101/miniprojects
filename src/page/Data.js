import React from 'react'

function Data({mydata}) {
  return (
    <div>
        {mydata.map((i)=>
        <li>{i}</li>
        )}
    </div>
  )
}

export default Data