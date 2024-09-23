import { useEffect, useState } from "react"
import { solutionFetch } from "../apiFetch/axios"
import ScrollTrigger from "react-scroll-trigger"
import CountUp from "react-countup"

function Growth(){

    const [solutions, setSolutions] = useState([])
    const [value, setValue] = useState([])

    useEffect(() =>{

        solutionFetch().then(json =>{
            setSolutions(json)
            return json
        })
    },[])

    const contentOne = (
        <div className="text-red-700 text-xl sm:text-6xl">
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={471} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )

    const contentTwo = (
        <div className="text-red-700 text-xl sm:text-6xl">
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={732} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )

    const contentThree = (
        <div className="text-red-700 text-xl sm:text-6xl">
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={358} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )

    const content = (
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center" data-aos="fade-up">
            {
                solutions.map((solution) =>(
                    <div className="mx-auto flex-col flex">
                        <div >
                            <img src={solution.image} alt="solutionImage" className=" bg-white rounded-full w-12 sm:w-20 h-12 sm:h-20  sm:translate-x-20" />
                            <h1 className="text-black lg:text-3xl md:text-xl font-bold text-sm">{solution.title}</h1>
                            <h1 className="text-black lg:text-xl lg:w-80 md:w-52 my-5 text-sm">{solution.body}</h1>
                       
                        </div>
                    </div>
                ))
            }
        </div>
    )
    const contents = (
        <div className="grid sm:grid-cols-3 grid-cols-1" data-aos="zoom-out">
            {
                solutions.map((solution) =>(
                    <div className="mx-auto flex-col flex items-center">
                        <div >
                            <h1 className="text-black lg:text-3xl md:text-xl font-bold text-sm">{solution.number}</h1>
                            <h1 className="text-black lg:text-xl lg:w-80 md:w-52 my-5 text-sm">{solution.numberBody}</h1>
                       
                        </div>
                    </div>
                ))
            }
        </div>
    )
    return (

        <div className="bg-white mx-5 p-7 rounded-xl" data-aos="fade-right">
            {content}
            <hr />
            <div className="grid grid-cols-3 mx-auto justify-items-center mt-4 mb-5">
                            {contentOne}
                            {contentTwo}
                            {contentThree}
            </div>
            {contents}
        </div>
    )
}

export default Growth