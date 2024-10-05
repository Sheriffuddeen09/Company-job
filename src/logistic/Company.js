import { useEffect, useState } from "react"
import { companyFetch } from "../apiFetch/axios"
import AOS from "aos"
import 'aos/dist/aos.css'


function Company(){

    const [company, setCompany] = useState([])
useEffect(() =>{

    companyFetch().then(json =>{
        setCompany(json)
        return json
    })
}, [])

useEffect(() =>{
    AOS.init({duration: 2000})
}, [])

const content = (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-5 justify-items-center items-center md:grid-cols-3 p-16 " data-aos="zoom-in">
        {
            company.map((com) =>(
                <div key={com.id}>
                   <img src={com.image} alt="imagepicture" className="sm:w-40 bg-white rounded-xl w-60 h-32" /> 
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