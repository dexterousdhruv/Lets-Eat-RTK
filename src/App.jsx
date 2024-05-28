import React, {  useState } from "react";
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import SidebarComp from "./components/SidebarComp";
import Success from './pages/Success'
import Error from "./pages/Error";
import ProtectedRoute from './components/ProtectedRoute'
import Favorites from './components/Favorites'


const App = () => {
  const [expanded, setExpanded] = useState(false);
  const marginLeft = {
    marginLeft: expanded ? '305px' : '85px'
  }

  return (
    <>
    <div className="flex">
      <SidebarComp expanded={expanded} setExpanded={setExpanded} />
      <div className='w-full transition-all' style={marginLeft}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} >
          </Route>
          <Route path='/success' element={<ProtectedRoute element={<Success/>} />} />
          <Route path='favorites' element={<Favorites/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App