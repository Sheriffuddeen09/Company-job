import { useEffect, useState } from "react"
import { inputsFetch } from "../apiFetch/axios"
function InputSecond(){

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
                <div className="flex flex-col trans gap-3">
                    <label className="text-xl text-black font-bold">Destination Location</label>
                <select name="" className='border-2 border-green-400 p-2 w-60 lg:w-72 rounded-lg'
                value={select}
                onChange={(e) => setSelect(e.target.value)}>{options}</select>
                </div>
            )
return (
    <div className="z-10 mx-auto">

    {content}
    </div>
)
}

export default InputSecond