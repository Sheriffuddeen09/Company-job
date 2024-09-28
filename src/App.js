import { Route, Routes } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Home from "./Home"
import Logistics from "./Logistics"
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
          <Route path="/logic" element={
              <div className="overflow-hidden">
              <Logistics/>
              </div>
          
          } />
           <Route path="/tech" element={
              <div className="overflow-hidden">
              </div>
          
          } />
      </Routes>
     
    </div>
  )
}

export default App