import React from 'react'
import { useNavigate} from 'react-router-dom'

function About() {
    const nevigater = useNavigate()
  return (
    <div>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/home')}>ritik</button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/calculator')}>calculator</button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/tiktaktoe')}>TikTakToe</button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/snakek-ladder')}>Snake Ladder</button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/rock-papper-scissor')}>Rock Papper Scissor</button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/todo')}>Todo</button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/todo-list')}>Todo- List </button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/kbc')}>kbc </button>
        <button className='border-2 bg-black text-[white] hover:bg-[red]' onClick={()=> nevigater('/array')}>kbc </button>

    </div>
  )
}

export default About