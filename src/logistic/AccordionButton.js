import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ButtonAccordion from "./ButtonAccordion"
import { faqs } from "../Data"
const AccordionsButton = () =>{


    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])

    
    const content = (
        faqs.map((faq) =>{
            return <ButtonAccordion key={faq.id} faq={faq} />
        })
    )
        return (
    <div className=" mb-14 mx-5 mt-2">
            <div className="pb-10 bg-white rounded-xl mb-14">
            <h2 className='pt-12 sm:text-4xl text-2xl pb-6 px-14 ml-6'> Guideline on How it Work </h2>
           {content}
            </div>
    
    </div>
        )
    }
    export default AccordionsButton