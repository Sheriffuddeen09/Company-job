import { useEffect } from "react"
import AOS from "aos"
import { companys } from "../Data"
import 'aos/dist/aos.css'


function Company(){


useEffect(() =>{
    AOS.init({duration: 2000})
}, [])

const content = (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 justify-items-center items-center md:grid-cols-3 p-16 " data-aos="zoom-in">
        {
            companys.map((com) =>(
                <div key={com.id}>
                   <img src={com.image} alt="imagepicture" className="sm:w-72 bg-white rounded-xl w-72 h-40" /> 
                </div>
            ))
        }
    </div>
)
    return (
        <div >
            <h1 className="text-2xl p-4 text-center  text-white" data-aos="fade-right">Ecoreme has supported these top companies</h1>
            {content}
        </div>
    )
}

export default Company