import React, { useState } from 'react'

function Todo() {
    const [task, setTask] = useState("")
    const [todoList, setTodoList] = useState([])
  return (
    <div>
        <div>
            {task}{JSON.stringify(todoList)}
        </div>
        <input value={task} className='border' onChange={(e)=> setTask(e.target.value)} placeholder='Task'></input>
        <button onClick={()=>{ setTodoList([task, ...todoList]); setTask("")}}>Add</button>
        
        <div>
          {todoList.map((i)=>
          <li>{i}</li>
        )}
        </div>
    </div>
  )
}

export default Todo