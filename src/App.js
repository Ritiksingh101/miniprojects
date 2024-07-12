import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Calculator from './Calculator'
import TIkTakToe from './page/TIkTakToe'
import SnakeLadder from './page/SnakeLadder'
import RockPapperScissor from './page/RockPapperScissor'
import Todo from './page/Todo'
import Todolis from './page/Todolis'
import Kbc from './page/Kbc'
import Adminkbc from './page/Adminkbc'



function App() {
  return (
    <HashRouter>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<About/>}></Route>
      <Route path='/calculator' element={<Calculator/>}></Route>
      <Route path='/tiktaktoe' element={<TIkTakToe/>}></Route>
      <Route path='/snakek-ladder' element={<SnakeLadder/>}></Route>
      <Route path='/rock-papper-scissor' element={<RockPapperScissor/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/todo-list' element={<Todolis/>}></Route>
      <Route path='/kbc' element={<Kbc/>}></Route>
      <Route path='/kbcadmin' element={<Adminkbc/>}></Route>
      <Route path='/array' element={<Array/>}></Route>

      
      
    
     </Routes>
    </HashRouter>
  )
}

export default App