
import { Route, Routes } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Careers from "./careers/Careers"
import Contact from "./contact/Contact"
import Footers from "./layout/Footer"
import logo from './image/ecologo.png'
import { lazy, Suspense } from "react"
import Article2023 from "./article/Article2023"
import Article2024 from "./article/Article2024"

const About = lazy(() => import('./about/About'))
const Logistics = lazy(() => import('./logistic/Logistics'))
const Home = lazy(() => import('./home/Home'))
function App() {


  return (
    <div className=""> 
       <div>
      <Navbar />
      <Routes>
            <Route path="/" element={
              <div className="overflow-hidden">
                <Suspense fallback={<div className="flex flex-col items-center justify-center my-56">
                  <img src={logo} width={70} height={70} alt="logo" />
                  <div className="bg-gray-300 w-40 h-1 rounded-3xl mt-5">
                  <p className="loading"></p>
                  </div>
                </div>}>
                  <Home/>
              </Suspense>
              </div>
          
          } />
          <Route path="/logistics" element={
              <div className="overflow-hidden">
             <Suspense fallback={<div className="flex flex-col items-center justify-center my-56">
                  <img src={logo} width={70} height={70} alt="logo" />
                  <div className="bg-gray-300 w-40 h-1 rounded-3xl mt-5">
                  <p className="loading"></p>
                  </div>
                </div>}>
                  <Logistics/>
              </Suspense>
              </div>
          
          } />
           <Route path="/careers" element={
              <div className="overflow-hidden">
                <Careers />
              </div>
          
          } />
           <Route path="/about" element={
              <div className="overflow-hidden">
                <Suspense fallback={<div className="flex flex-col items-center justify-center my-56">
                  <img src={logo} width={70} height={70} alt="logo" />
                  <div className="bg-gray-300 w-40 h-1 rounded-3xl mt-5">
                  <p className="loading"></p>
                  </div>
                </div>}>
                <About />
                </Suspense>
              </div>
          
          } />
           <Route path="/contact" element={
              <div className="overflow-hidden">
                <Contact />
              </div>
          
          } />
           <Route path="/tech" element={
              <div className="overflow-hidden">
              </div>
          
          } />
           <Route path="/article/2023" element={
              <div className="overflow-hidden">
                <Article2023 />
              </div>
          
          } />
           <Route path="/article/2024" element={
              <div className="overflow-hidden">
                <Article2024 />
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