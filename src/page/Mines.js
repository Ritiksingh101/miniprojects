import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Mines() {
  const [gridNumber, setGridNumber] = useState(9)
  useEffect(() => { setGrid(new Array(gridNumber).fill("D")) }, [gridNumber])
  useEffect(() => { getAmountData() }, [])
  const [grid, setGrid] = useState(new Array(gridNumber).fill("D"))
  const [betPrice, setBetPrice] = useState(0)

  const [myAmount, setMyAmount] = useState(0)

  const getAmountData = () => {
    axios.get("http://localhost:5001/api/mine").then((res) => setMyAmount(res.data.data[0].amount))
  }
  const [hasStarted, setHasStarted] = useState(false)

  const [clickedList, setClickedList] = useState([])
  const startGame = () => {
    const randomNum = Math.floor(Math.random() * 9)
    setGrid(grid.map((i, index) => index == randomNum ? "B" : "D"))
    axios.put("http://localhost:5001/api/mine/669f78fb41b6f1050c902653", { amount: myAmount - betPrice }).then((res) => { getAmountData() })
    setHasStarted(true)

  }

  const [oddList, setOddList] = useState([1.10, 1.26, 1.47, 1.76, 2.20, 2.94, 4.41, 8.82])
  const [winAmount, setWinAmount] = useState(0)

  const check = (index, i) => {
    if (i == "D") {
      setClickedList([...clickedList, index])
      setWinAmount(betPrice * oddList[clickedList.length])
    }
    else {
      setClickedList([...clickedList, index])
      setTimeout(() => {
        setHasStarted(false)
        setClickedList([])
        setGrid(new Array(gridNumber).fill("D"))
      }, 3000)

    }



  }
  const collectAmount = () => {
    axios.put("http://localhost:5001/api/mine/669f78fb41b6f1050c902653", { amount: myAmount + winAmount }).then(() => { getAmountData(); setHasStarted(false); setClickedList([]); setGrid(new Array(gridNumber).fill("D")) })
  }




  return (
    <div className='h-[100vh] w-[100%] flex'>

      <div className='h-[100vh] w-[25%] '>
        {/*  */}
        <div className="bg-[#2A2A2A] h-[100vh] text-white p-4 rounded-md">
          <div className="text-lg font-bold mb-4">NUMBER OF MINES</div>
          <div className="flex  border-2 mb-4">
            <div className="bg-green-500  w-[30%]  border-2 rounded-md px-4 py-2">1</div>
            <div className="bg-gray-800 w-[30%] border-2  rounded-md px-4 py-2">3</div>
            <div className="bg-gray-800  w-[30%]  border-2 rounded-md px-4 py-2">5</div>
            <div className="bg-gray-800  w-[30%]  border-2 rounded-md px-4 py-2">7</div>
            <div className="bg-gray-800  w-[30%] border-2  rounded-md px-4 py-2">CUSTOM</div>
          </div>
          <div className="text-lg font-bold mb-4">GRID SIZE</div>
          <div className="flex gap-4 h-[10vh]">
            <div onClick={() => setGridNumber(9)} className="bg-emerald-500 flex items-center w-[25%] h-[4vh] rounded-full py-2 px-4 text-white font-bold">
              <div className="">3x3</div>
            </div>
            <div onClick={() => setGridNumber(25)} className=" bg-[#0f0f0fad] flex items-center rounded-full w-[25%] h-[4vh] py-2 px-4 text-white font-bold">
              <div className="">5x5</div>
            </div>
            <div onClick={() => setGridNumber(49)} className="bg-[#0f0f0fad] flex items-center  rounded-full w-[25%] h-[4vh] py-2 px-4 text-white font-bold">
              <div>7x7</div>
            </div>
            <div onClick={() => setGridNumber(81)} className="bg-[#0f0f0fad]  flex items-center rounded-full w-[25%] h-[4vh] py-2 px-4 text-white font-bold">
              <div className="">9x9</div>
            </div>
          </div>
          <div className="text-lg font-bold flex gap-4 h-[10vh]"><label>BET AMOUNT</label>
            <input onChange={(e) => setBetPrice(e.target.value)} className='text-[black] h-[5vh] w-[50%]' placeholder='enter amount' type='number'></input>
          </div>

          <div className="flex gap-3 justify-center">
            {clickedList.length == 0 ?
              <button style={{ backgroundColor: hasStarted ? "#24896B" : "#20C997" }}
                onClick={() => hasStarted == false && startGame()}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">BET</button>
              :
              <button style={{ backgroundColor: "#20C997" }}
                onClick={() => collectAmount()}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
                Collect {winAmount}</button>}

          </div>
          <div className="mt-4 text-lg font-bold">DEMO BALANCE</div>
          <div className="text-2xl font-bold text-yellow-500">€{myAmount}</div>
        </div>

        {/*  */}

      </div>
      <div className='bg-[#272749] h-[100vh] text-white'>  <label className=' text-[40px] font-bold'></label></div>

      <div className='h-[100vh] text-white w-[75%] flex flex-col bg-[#272749] gap-3 justify-center items-center '>



        <label className='h-[30vh] w-[50%] bg-black'><img className='h-[30vh] w-full object-fill' src='https://rotativka.com/en/wp-content/uploads/sites/3/2021/06/Mines-Demo.jpg'></img></label>
        {JSON.stringify(grid)} {JSON.stringify(clickedList)}
        <div className={`h-[50vh] w-[50%] grid-cols-${Math.sqrt(gridNumber)} shadow-2xl`}>
          {grid.map((i, index) =>
            <button onClick={() => hasStarted && check(index, i)} className=' w-36  m-2  shadow-lg h-[16vh] border-2  rounded-md shadow-white  '>
              {clickedList.includes(index) ? <img className='h-full w-full object-cover' src={i == "D" ? "https://static.vecteezy.com/system/resources/thumbnails/008/513/899/small/blue-diamond-illustration-png.png"
                : "https://www.freeiconspng.com/thumbs/bomb-png/high-resolution-bomb-png-clipart-2.png"}></img> : null} </button>
          )}
        </div>


      </div>
    </div>
  )
}

export default Mines