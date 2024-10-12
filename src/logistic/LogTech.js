import { useState } from "react"
import Logistic from "./Logistic"
import Technology from "./Technology"

function LogTech(){
    const [toggle, setToggle] = useState(1)

    const handleToggle= (id) =>{
        setToggle(id)
    }

    return (
        <div>
            <div className="text-white text-2xl inline-flex gap-4 translate-x-5 sm:gap-14 sm:translate-x-20 mt-3 mb-0">
            <p onClick={() =>handleToggle(1)} className="rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer ">Logistic

            <div className={`transition-all duration-500 ease-in-out hover:bg-[#626267] ${toggle === 1 ? 'toggle' : 'nonetoggle'}`}> </div>
            </p>
            <p  onClick={() =>handleToggle(2)} className="rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer ">Technology <div className={`transition-all duration-500 ease-in-out hover:bg-[#626267] ${toggle === 2 ? 'toggle' : 'nonetoggle'}`}> </div></p>
            </div>
            <div className={`${toggle === 1 ? "block" : "hidden"}`}>
            <Logistic />
            </div>
            <div className={`${toggle === 2 ? "block" : "hidden"}`}>
            <Technology />
            </div>
        </div>
    )
}

export default LogTech