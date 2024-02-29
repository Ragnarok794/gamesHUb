import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import TicTacToe from './pages/tictactoe/tictactoe'
import Hangman from './pages/hangman/hangman.jsx'
import Sudoku from './pages/sudoku/sudoku.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route  index element={<Home/>}/>
        <Route path='TicTacToe' element={<TicTacToe/>}/>
        <Route path='Hangman' element={<Hangman/>}/>
        <Route path='Sudoku' element={<Sudoku />}/>

      </Route>
    </Routes>
  </BrowserRouter>

)
