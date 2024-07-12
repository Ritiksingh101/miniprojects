import React, { useState } from 'react'

function SnakeLadder() {
    const [dice, setDice] = useState(0)
    const [turn, setTurn] = useState(1)
    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const throwDice =()=>{
        const diceValue = Math.ceil(Math.random()*6);
        setDice(diceValue);
        if (turn == 1){
            if(diceValue + p1 <=30){
                setP1(diceValue + p1)
            }
            
            setTurn(2)
        }
        else if (turn == 2){
            if(diceValue + p2 <=30){
                setP2(diceValue + p2)
            }
            
            setTurn(1)
        }
    }   

  return (
    <div className='main'>
        <div className='board'>
            <div className={p1 == 25 & p2 == 25 ? "goti3" : p1 == 25 ? "goti1" : p2 ==25 ? "goti2" : "blank"}>25</div>
            <div className={p1 == 26 & p2 == 26 ? "goti3" : p1 == 26 ? "goti1" : p2 ==26 ? "goti2" : "blank"}>26</div>
            <div className={p1 == 27 & p2 == 27 ? "goti3" : p1 == 27 ? "goti1" : p2 ==27 ? "goti2" : "blank"}>27</div>
            <div className={p1 == 28 & p2 == 28 ? "goti3" : p1 == 28 ? "goti1" : p2 ==28 ? "goti2" : "blank"}>28</div>
            <div className={p1 == 29 & p2 == 29 ? "goti3" : p1 == 29 ? "goti1" : p2 ==29 ? "goti2" : "blank"}>29</div>
            <div className={p1 == 30 & p2 == 30 ? "goti3" : p1 == 30 ? "goti1" : p2 ==30 ? "goti2" : "blank"}>30</div>
            <div className={p1 == 24 & p2 == 24 ? "goti3" : p1 == 24 ? "goti1" : p2 ==24 ? "goti2" : "blank"}>24</div>
            <div className={p1 == 23 & p2 == 23 ? "goti3" : p1 == 23 ? "goti1" : p2 ==23 ? "goti2" : "blank"}>23</div>
            <div className={p1 == 22 & p2 == 22 ? "goti3" : p1 == 22 ? "goti1" : p2 ==22 ? "goti2" : "blank"}>22</div>
            <div className={p1 == 21 & p2 == 21 ? "goti3" : p1 == 21 ? "goti1" : p2 ==21 ? "goti2" : "blank"}>21</div>
            <div className={p1 == 20 & p2 == 20 ? "goti3" : p1 == 20 ? "goti1" : p2 ==20 ? "goti2" : "blank"}>20</div>
            <div className={p1 == 19 & p2 == 19 ? "goti3" : p1 == 19 ? "goti1" : p2 ==19 ? "goti2" : "blank"}>19</div>
            <div className={p1 == 13 & p2 == 13 ? "goti3" : p1 == 13 ? "goti1" : p2 ==13 ? "goti2" : "blank"}>13</div>
            <div className={p1 == 14 & p2 == 14 ? "goti3" : p1 == 14 ? "goti1" : p2 ==14 ? "goti2" : "blank"}>14</div>
            <div className={p1 == 15 & p2 == 15 ? "goti3" : p1 == 15 ? "goti1" : p2 ==15 ? "goti2" : "blank"}>15</div>
            <div className={p1 == 16 & p2 == 16 ? "goti3" : p1 == 16 ? "goti1" : p2 ==16 ? "goti2" : "blank"}>16</div>
            <div className={p1== 17 & p2== 17? "goti3" : p1== 17 ? "goti1" : p2== 17 ? "goti2" : "blank" }>17</div>
            <div className={p1== 18 & p2==18 ? "goti3" : p1== 18 ? "goti1" : p2== 18 ? "goti2" : "blank" }>18</div>
            <div className={p1== 12 & p2==12 ? "goti3" : p1== 12 ? "goti1" : p2== 12 ? "goti2" : "blank" }>12</div>
            <div className={p1== 11 & p2==11 ? "goti3" : p1==11  ? "goti1" : p2 == 11 ? "goti2" : "blank" }>11</div>
            <div className={p1== 10 & p2== 10? "goti3" : p1==10 ?  "goti1" : p2== 10 ? "goti2" : "blank" }>10</div>
            <div className={p1==9  & p2==9 ? "goti3" : p1== 9 ? "goti1" : p2== 9 ? "goti2" : "blank" }>9</div>
            <div className={p1== 8 & p2==8 ? "goti3" : p1== 8 ? "goti1" : p2== 8 ? "goti2" : "blank" }>8</div>
            <div className={p1== 7 & p2==7 ? "goti3" : p1== 7 ? "goti1" : p2== 7 ? "goti2" : "blank" }>7</div>
            <div className={ p1==1 & p2 == 1 ? "goti3" : p1 == 1 ? "goti1" : p2 == 1 ? "goti2" : "blank"}>1</div>
            <div className={p1 == 2 & p2== 2 ? "goti3" : p1 == 2 ? "goti1" : p2 == 2 ? "goti2" : "blank"}>2</div>
            <div className={p1==3 & p2==3 ? "goti3" :p1==3 ? "goti1" :p2==3 ? "goti2" :"blank"}>3</div>
            <div className={p1==4 & p2==4 ? "goti3" :p1==4?"goti1": p2==4 ? "goti2" : "blank"}>4</div>
            <div className={p1==5 & p2==5 ?"goti3" : p1==5 ?"goti1": p2==5? "goti2": "blank"}>5</div>
            <div className={p1==6 & p2==6 ?"goti3": p1==6 ? "goti1" : p2==6 ? "goti2" : "blank"}>6</div>

        </div>
        p1 = {p1}
        <button onClick={()=>throwDice()} className='dice'>{dice}</button>
        p2 = {p2}

        {/* --------------------Conditions---------------------------- */}
        {p1 == 30 ? alert("P1 won") : null}
        {p2 == 30 ? alert("P2 won") : null}
        {p1 == 3 ? setTimeout(()=>{setP1(22)}, 500) : p2==3 ? setTimeout(()=>{setP2(22)},500):null}
        {p1==5 ? setTimeout(()=>{setP1(8)},500) :p2==5 ? setTimeout(()=>{setP2(8)},500):null }
        {p1==11 ? setTimeout(()=>{setP1(26)},500):p2==11 ? setTimeout(()=>{setP2(26)},500):null}
        {p1==20 ? setTimeout(()=>{setP1(29)},500):p2==20 ? setTimeout(()=>{setP2(29)},500):null}

         {/* -------------------snake bite----------------------------------------------- */}
         {p1 == 27 ? setTimeout(()=>{setP1(1)}, 500) : p2==27 ? setTimeout(()=>{setP2(1)},500):null}
        {p1==21 ? setTimeout(()=>{setP1(9)},500) :p2==21 ? setTimeout(()=>{setP2(9)},500):null }
        {p1==17 ? setTimeout(()=>{setP1(4)},500):p2==17 ? setTimeout(()=>{setP2(4)},500):null}
        {p1==19 ? setTimeout(()=>{setP1(7)},500):p2==19 ? setTimeout(()=>{setP2(7)},500):null}

           
    </div>
  )
}

export default SnakeLadder