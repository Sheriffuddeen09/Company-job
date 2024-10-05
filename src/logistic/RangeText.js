import { useEffect, useState } from "react";
import Range from "./Range"
import { startupFetch } from "../apiFetch/axios";

function RangeText (){

    const [ranges, setRanges] = useState([]);

    useEffect(() =>{

        startupFetch().then(json =>{
            setRanges(json)
            return json
        })

    }, [])

    const range = <>
    {
        ranges.map((range) =>(
            <div className="sm:w-96 w-60 text-black my-6 text-sm">
            <p>{range.body}</p>
            <p className="-mt-5">{range.main}</p>
            <p className="-mt-5">Call or Whatsapp: <span className="text-blue-400 ">09062830059</span></p>
            </div>
        ))
    }
    </>
    const content = (

        <div className="bg-white rounded-xl px-12 pt-7"  data-aos="zoom-in">
            <h1 className="text-black my-4 sm:text-5xl text-4xl">Ecoreme Logistics</h1>
                {range}
                <button className="flex items-center sm:w-72 w-64 py-3 rounded-xl text-white  mx-auto inline-flex gap-1 sm:gap-2 -translate-x-4 sm:translate-x-0 text-1xl mt-10 mb-20 justify-center bg-green-600 rounded">
                    
                    Click to Order For Pickup/Delivery<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

                </button>
        </div>
    )

return (
    <div className="flex flex-row items-center justify-center bg-gray-800 p-7 flex-wrap gap-44 lg:gap-10">
    {content}
    <Range />
    </div>
)
}

export default RangeText