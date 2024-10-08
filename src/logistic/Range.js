import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

function Range (){

    const [value, setValue] = useState(false)

    const contentOne = (
        <div>
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={100} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )

    const contentTwo = (
        <div>
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={24} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )
    const contentThree = (
        <div>
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={100} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )

    const contentFour = (
        <div>
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={100} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )

    return (
        <div className="lg:flex-row flex-col gap-4 -mb-20 sm:mb-10 items-center flex "  data-aos="fade-up">
    
    <div className=" md:flex-row md:items-center lg:flex-col flex-col gap-5 flex -translate-y-40 lg:translate-y-5">
                <div className="bg-gradient-to-t from-black h-72 sm:w-72 w-72 rounded-xl 
                justify-center items-center 
                text-white to-green-700 flex flex-col" data-aos="fade-up">
                    <p className=" mt-6 text-center font-bold text-xl"> Speed</p> 
                    <h1 className="inline-flex text-6xl font-bold"> {contentOne}%</h1>
                </div> 
                <div className="bg-white border-2 mt-4 h-72 sm:w-72 w-72 md:-translate-y-2 rounded-xl 
                justify-center items-center 
                text-black to-green-700 flex flex-col" data-aos="fade-up">
                <p className="mt-6 text-center font-bold text-xl">Pickup / Delivery <br /> Orders</p>
                <h1 className="inline-flex text-6xl font-bold"> {contentTwo}/7</h1>
                </div> 
            </div> 
            <div className=" md:flex-row md:items-center lg:flex-col flex-col gap-5 flex -translate-y-40 lg:translate-y-5">
            <div className="bg-gradient-to-t from-green-400 to-white border-2 mt-4 h-72 sm:w-72 w-72 md:-translate-y-2 rounded-xl 
                justify-center items-center 
                text-black to-green-700 flex flex-col" data-aos="fade-up">
                <p className="mt-6 text-center font-bold text-xl"> Customer Service </p>
                <h1 className="inline-flex text-6xl font-bold"> {contentFour}%</h1>
                </div> 
                <div className="bg-gradient-to-t from-blue-300 h-72 sm:w-72 w-72 rounded-xl 
                justify-center items-center 
                text-black to-red-200 flex flex-col" data-aos="fade-up">
                    <p className=" mt-6 text-center font-bold text-xl"> Flexibility<br /> Security</p> 
                    <h1 className="inline-flex text-6xl font-bold"> {contentThree}%</h1>
                </div> 
               
            </div> 
            
        </div>
    )
    }
    
export default Range