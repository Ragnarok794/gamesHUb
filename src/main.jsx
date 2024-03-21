import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import TicTacToePage from './pages/tictactoe/tictactoePage.jsx'
import HangmanPage from './pages/hangman/hangmanPage.jsx'
import SudokuPage from './pages/sudoku/SudokuPage.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Bookmarks from './PrivatePages/bookmarks.jsx'
import { BookmarksProvider } from './context/BookmarksContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <AuthProvider>
  <BookmarksProvider>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route  index element={<Home/>}/>
        <Route path='TicTacToe' element={<TicTacToePage/>}/>
        <Route path='Hangman' element={<HangmanPage/>}/>
        <Route path='Sudoku' element={<SudokuPage />}/>
        <Route path='Marcadores' element={<Bookmarks/>}/>

      </Route>
    </Routes>
    </BookmarksProvider>
    </AuthProvider>
  </BrowserRouter>

)
