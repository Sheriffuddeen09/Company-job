import { useEffect, useState } from "react"
import { logFetch, oneFetch, templateFetch, twoFetch } from "../apiFetch/axios"


function Logistic(){

    const [logistics, setLogistics] = useState([])
    const [onelogistics, oneSetLogistics] = useState([])
    const [twologistics, twoSetLogistics] = useState([])
    useEffect(() =>{

        templateFetch().then(json =>{
            setLogistics(json)
            return json
        })
    },[])

    useEffect(() =>{

        oneFetch().then(json =>{
            oneSetLogistics(json)
            return json
        })
    },[])

    useEffect(() =>{

        twoFetch().then(json =>{
            twoSetLogistics(json)
            return json
        })
    },[])

    const [logs, setLogs] = useState([])
    useEffect(() =>{

        logFetch().then(json =>{
            setLogs(json)
            return json
        })
    },[])

    const textcontent = (
        <div>
            {
                logs.map((log) =>(
                    <div className="sm:text-center">
                        <h1 className="font-bold text-center -translate-y-10 sm:translate-y-0 -mb-10 sm:mb-0 sm:text-2xl">{log.dedicate}</h1>
                        <h1 className=" sm:w-8/12 my-3 p-2 mx-auto">{log.service}</h1>
                        <h1 className="font-bold text-center ">{log.services}</h1>
                        <h1 className="text-xl text-gray-500 text-center">{log.view}</h1>
                        <h1 className="text-sm text-gray-500 text-center">{log.sign} <span className=" text-green-500">0 of</span></h1>
                        <h1 className="text-sm text-gray-500 text-center mb-20">{log.liner}</h1>
                        <p className="bg-green-500 w-60 p-3 rounded-sm mx-auto text-white">Create an Account</p>
                        <p className="text-center">Already have an account? <span className="text-green-400 my-3">Sign in</span></p>
                    </div>
                ))
            }
        </div>
    )
    const content = (
        <div className="grid grid-cols-3 mx-20">
            {
                logistics.map((log) =>(
                    <div className="p-4 -mb-40">
                        <div className="">
                            <img src={log.image} alt="imagepic" className="w-80 h-52 rounded-xl"/>
                            <div className="flex-col flex gap-7 bg-logistic h-52 rounded-xl py-7 relative bottom-52 w-80 text-white">
                            <div className="flex flex-row justify-between text-xl  mx-4 font-bold"> 
                                <p>{log.logistic}</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm  mx-4 font-bold"> 

                                <p>{log.type}</p>
                                <p>{log.type2}</p>
                                <p>{log.type3}</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm  mx-4 font-bold"> 
                                <p>{log.quality}</p>
                                <p>{log.quality2}</p>
                                <p>{log.quality3}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

    const onecontent = (
        <div className="grid grid-cols-1">
            {
                onelogistics.map((log) =>(
                    <div className="p-4 -mb-40">
                        <div className="">
                            <img src={log.image} alt="imagepic" className=" w-60 h-52 rounded-xl"/>
                            <div className="flex-col flex gap-7 bg-logistic h-52 rounded-xl py-7 relative bottom-52 w-60 text-white">
                            <div className="flex flex-row justify-between text-xl  mx-4 font-bold"> 
                                <p>{log.logistic}</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm  mx-4 font-bold"> 

                                <p>{log.type}</p>
                                <p>{log.type2}</p>
                                <p>{log.type3}</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm  mx-4 font-bold"> 
                                <p>{log.quality}</p>
                                <p>{log.quality2}</p>
                                <p>{log.quality3}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

    const twocontent = (
        <div className="grid grid-cols-2">
            {
                twologistics.map((log) =>(
                    <div className="p-4 -mb-40">
                        <div className="">
                            <img src={log.image} alt="imagepic" className=" w-80 h-52 rounded-xl"/>
                            <div className="flex-col flex gap-7 bg-logistic h-52 rounded-xl py-7 relative bottom-52 w-80 text-white">
                            <div className="flex flex-row justify-between text-xl  mx-4 font-bold"> 
                                <p>{log.logistic}</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm  mx-4 font-bold"> 

                                <p>{log.type}</p>
                                <p>{log.type2}</p>
                                <p>{log.type3}</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm  mx-4 font-bold"> 
                                <p>{log.quality}</p>
                                <p>{log.quality2}</p>
                                <p>{log.quality3}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

    return (
        <div className="bg-white mx-5 rounded-xl my-3 py-10">
            <div className="hidden lg:block">
            {content}
            </div>
            <div className="sm:hidden block">
            {onecontent}
            </div>
            <div className="lg:hidden hidden md:block">
                {twocontent}
            </div>
            {textcontent}
        </div>
    )
}

export default Logistic