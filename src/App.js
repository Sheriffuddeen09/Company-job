import { Route, Routes } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Home from "./home/Home"
import Logistics from "./logistic/Logistics"
import Careers from "./careers/Careers"
import About from "./about/About"
import Contact from "./contact/Contact"
import EcoLogistic from "./ecologistic/EcoLogistic"
import Footers from "./layout/Footer"
function App() {


  return (
    <div className=""> 
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
           <Route path="/career" element={
              <div className="overflow-hidden">
                <Careers />
              </div>
          
          } />
           <Route path="/about" element={
              <div className="overflow-hidden">
                <About />
              </div>
          
          } />
           <Route path="/contact" element={
              <div className="overflow-hidden">
                <Contact />
              </div>
          
          } />
           <Route path="/logistic" element={
              <div className="overflow-hidden">
                <EcoLogistic />
              </div>
          
          } />
           <Route path="/t" element={
              <div className="overflow-hidden">
              </div>
          
          } />
      </Routes>
      </div>
      <div>
     <Footers />
     </div>
    </div>
  )
}

export default App