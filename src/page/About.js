import React from 'react'
import { useNavigate} from 'react-router-dom'

function About() {
    const nevigater = useNavigate()
  return (
    <div className='h-[100vh] w-[100%] bg-slate-400 flex gap-2'>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/home')}>ritik</button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/calculator')}>calculator</button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/tiktaktoe')}>TikTakToe</button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/snakek-ladder')}>Snake Ladder</button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/rock-papper-scissor')}>Rock Papper Scissor</button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/todo')}>Todo</button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/todo-list')}>Todo- List </button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/kbc')}>kbc </button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/array')}>kbc </button>
        <button className='border-2 h-[10vh] w-[20%]  bg-black text-[white] hover:bg-red-300' onClick={()=> nevigater('/mines')}>Mines </button>

    </div>
  )
}

export default About