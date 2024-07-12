import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'


function Todolis() {
    useEffect(()=>{dataget()}, [])
    const [Task, setTask]=useState("")
   
    // data post on backend

   const postdata =()=>{
  const   obj={
        task : Task
    }
    axios.post("http://localhost:5001/api/todo",obj) .then(
        (res)=>{console.log(res);alert("data post")},
        (err)=> {console.log(err)}
    )
   }
    
//    data get from backend

const [todolist,setTodolist]=useState([])
const dataget=()=>{

    axios.get("http://localhost:5001/api/todo").then((res)=>setTodolist(res.data.data))
}
     


  return (
    <div>
        {Task}
        <input onChange={(e)=>setTask(e.target.value)} placeholder='enter task'></input>
        <button onClick={()=>postdata()}>Submit</button>
        <div>
            {JSON.stringify(todolist)}
        {todolist.map((i)=>
            <li>
                 
                 {i.task}  
                  
                 <button className=''>delete</button>

            </li>
            )}
        </div>
    </div>
  )
}

export default Todolis