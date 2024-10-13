import { solutions } from "../Data"

function Growth(){

    
    const content = (
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center text-justify" data-aos="fade-up">
            {
                solutions.map((solution) =>(
                    <div className="mx-auto flex-col flex">
                        <div >
                            <img src={solution.image} alt="solutionImage" className=" bg-white rounded-full w-12 sm:w-20 h-12 sm:h-20  sm:translate-x-0 mb-2" />
                            <h1 className="text-black text-xl md:text-xl font-bold ">{solution.title}</h1>
                            <h1 className="text-black text-sm lg:w-80 md:w-52 my-5 text-sm">{solution.body}</h1>
                       
                        </div>
                    </div>
                ))
            }
        </div>
    )
    const contents = (
        <div className="grid sm:grid-cols-3 grid-cols-1 text-justify" data-aos="zoom-out">
            {
                solutions.map((solution) =>(
                    <div className="mx-auto flex-col flex items-center">
                        <div >
                        <img src={solution.icon} alt="solutionImage" className=" bg-white rounded-full w-12 mb-2 sm:w-20 h-12 sm:h-20  sm:translate-x-0" />
                        <h1 className="text-black text-xl font-bold text-sm">{solution.numbertitle}</h1>
                        <h1 className="text-black lg:w-80 md:w-52 my-5 text-sm">{solution.numberBody}</h1>
                       
                        </div>
                    </div>
                ))
            }
        </div>
    )
    return (

        <div className="bg-white mx-5 p-7 rounded-xl" data-aos="fade-right">
            {content}
            <hr className="mb-5"/>
            {contents}
        </div>
    )
}

export default Growth