import { Route, Routes } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Home from "./Home"
function App() {


  return (
    <div> 
      <Navbar />
      <Routes>
            <Route path="/" element={
              <div className="overflow-hidden">
              <Home/>
              </div>
          
          } />
      </Routes>
     
    </div>
  )
}

export default App