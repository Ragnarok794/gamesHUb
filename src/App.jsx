
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
function App() {
 

  return (
    <div className='App'>
    <header>
      <Header/>
    </header>
    <main>
      <div>
    <Outlet/>
    </div>
    </main>
    </div>
    
  )
}

export default App
