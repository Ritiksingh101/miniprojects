import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Adminkbc() {
  useEffect(()=>{getdata()},[])
     
  // const[show,setShow]=useState(false)
     
    const [question,setQuestion]=useState()
    const [option1,setOption1]=useState()
    const [option2,setOption2]=useState()
    const [option3,setOption3]=useState()
    const [option4,setOption4]=useState()

    const postdata=()=>{
         const obj ={
         
            Question:question,
            OptionA:option1,
            OptionB:option2,
            OptionC:option3,
            OptionD:option4

         }
   
          
        axios.post("http://localhost:5001/api/kbc", obj).then(
            (res)=>{
                alert("data post")
            }
        )

    }
    
    const [data ,setData]=useState([])
    const getdata=()=>{
      axios.get("http://localhost:5001/api/kbc").then((res)=>setData(res.data.data))
    }


  return (
    <div>
        {question}
        <input onChange={(e)=>setQuestion(e.target.value)} placeholder='question'></input>
        <input onChange={(e)=>setOption1(e.target.value)} placeholder='Option-A'></input>
        <input onChange={(e)=>setOption2(e.target.value)} placeholder='Option-B'></input>
        <input onChange={(e)=>setOption3(e.target.value)} placeholder='Option-C'></input>
        <input onChange={(e)=>setOption4(e.target.value)} placeholder='Option-D'></input>
        <button onClick={()=>postdata()}>submit</button>

        <div  >start game</div>
        
       

        
      


        <div className='h-[50vh] w-[100%] bg-fuchsia-400 flex items-center flex-col'>
          
         
          {data.map((i,index)=>
           
           <>
          <label>{i.Question}</label>
          <li>{i.Option1}</li>
          <li>{i.Option2}</li>
          <li>{i.Option3}</li>
          <li>{i.Option4}</li>
           </>   )} 
        </div> 
        

       

    </div>
  )
}

export default Adminkbc