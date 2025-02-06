import { software } from "../Data"

function Software(){

    
    const content = (
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center" data-aos="fade-up">
            {
                software.map((soft) =>(
                    <div className="mx-auto flex-col flex">
                        <div >
                            <img src={soft.image} alt="solutionImage" className=" bg-white rounded-full w-12 sm:w-20 h-12 sm:h-20  sm:translate-x-0 mb-2" />
                            <h1 className="text-black text-xl md:text-xl font-bold ">{soft.title}</h1>
                            <h1 className="text-black text-sm lg:w-80 md:w-52 my-5 text-sm">{soft.body}</h1>
                       
                        </div>
                    </div>
                ))
            }
        </div>
    )
    return (

        <div className="bg-white mx-5 p-7 rounded-xl" data-aos="fade-right">
            {content}
           
        </div>
    )
}

export default Software