import React, { useState } from 'react'

function RockPapperScissor() {
    const choose = ["Rock", "Paper", "Scisor"]
    const [computerChoice, setComputerChoice] = useState("")
    const [userChoice, setUserChoice] = useState("")
    const [winner, setWinner] = useState("")
    const startGame = (user)=>{
        const randomNum = Math.floor(Math.random()*3)
        const comp = choose[randomNum]
        setComputerChoice(comp)
        setUserChoice(user)

        if(comp == user){
           setWinner("Tie")
        }
        else if(user == "Rock" & comp == "Scisor"){
            setWinner("User")
        }
        else if(user == "Scisor" & comp == "Paper"){
            setWinner("User")
        }
        else if(user == "Paper" & comp == "Rock"){
            setWinner("User")
        }
        else{
            setWinner("Computer")
        }

    }
  return (
    <div>
        {choose.map((i)=>
        <button onClick={()=>startGame(i)} className='border border-black py-2 px-4'>{i}</button>
        )}
        <div>
            <div>Computer: {computerChoice}</div>
            <div>User: {userChoice}</div>
            <div>Winner: {winner}</div>
        </div>

    </div>
  )
}

export default RockPapperScissor