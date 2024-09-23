import { useEffect, useState } from "react"
import { inputsFetch } from "../apiFetch/axios"
import InputSecond from "./InputSecond";
function Input({handleHide}){

    const [select, setSelect] = useState('')
    const [homes, setHomes] = useState([]);

    useEffect(() =>{

        inputsFetch().then(json =>{
            setHomes(json)
            return json
        })

    }, [])

    let 
    options = homes.map((home) =>(
                    <option> 
                        <p> {home.transport}</p>
                    </option>
            ))
        
            const content = (
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-black font-bold">Movement Location</label>
                <select name="" className='border-2 border-green-400 p-2 w-60 lg:w-72 rounded-lg'
                value={select}
                onChange={(e) => setSelect(e.target.value)}>{options}</select>
                </div>
            )
return (
    <div className="z-10 mb-72 sm:translate-y-80 translate-y-96 mt-5 sm:mt-0 rounded-xl bg-white w-9/12 lg:w-9/12 md:w-10/12 flex flex-col mx-auto h-72 sm:h-44 p">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute right-8 top-3 cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#1a222f] hover:text-white rounded-xl" onClick={handleHide}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

    <div className="inline-flex sm:flex-nowrap flex-wrap items-center gap-2 lg:gap-8 p-7">
    {content}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black font-bold sm:translate-y-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

    <InputSecond />
    <button className="bg-black rounded-xl py-2 px-3 sm:translate-y-5 text-white">Process</button>
    </div>
    </div>
)
}

export default Input