import { useState } from "react"
const ButtonAccordion = ({faq}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
return(
    <div className="py-4 px-4 sm:px-16 bodyaccord" onClick={toggleSubmit}>
            <div className="flex flex-row bodyaccord sm:w-full w-72 justify-between border-l-0 border-r-0 border-t-0 border border-black p-2 bg-white relative cursor-pointer">
                <span className="">
                <p className="text-sm sm:text-xl">
                    {faq.title}
                </p>
                </span>
                <span>
                <p className={`'rota' ${isVisible ? 'roll' : 'rota'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

                </p>
            </span>
            </div>
            <div className={` ${isVisible ? 'block' : 'hidden'}`}>
            <p className="bg-white w-72 sm:w-full bodyaccord p-3 font-bold mt-4  px-10"> {faq.body} </p>
            </div>
        
        </div>
)
}
export default ButtonAccordion