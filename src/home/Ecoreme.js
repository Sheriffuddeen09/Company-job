import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AOS from "aos"
import { welcomes } from "../Data";
import 'aos/dist/aos.css'

function Ecoreme(){
    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(true)

    useEffect(() =>{
      AOS.init({duration:2000})
  }, [])

    const handleFlip = () => {
      setFlip(!flip)
    }

    
    useEffect(() => {
      const lastIndex = welcomes.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, welcomes]);


    useEffect(() =>{

        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 10000);
          return () => clearInterval(slider);

    },[index])

    const content = <>
    
    {welcomes.map((wel) => {
          const { id, images, welcome, title, main, tech , company} = wel;
          return (
            <main key={id}>
              <img src={images} alt={'imagePicture'} className="opacity-40 bg-black h-full sm:block hidden opacity-10 w-full" />
              <div className="relative lg:bottom-96 md:bottom-52 pt-1 pb-8 sm:p sm:-translate-y-80 -translate-y-32 sm:bg-none bg-gradient-to-r from-black to-blue-900 ">
              <p className="sm:my-3 mt-14 text-white z-10 text-3xl text-center sm:text-6xl  font-bold">{welcome}</p>
              <p className=" text-white my-3 text-center text-4xl z-10">{title}</p>
              <div className="flex flex-row flex-wrap justify-center gap-10 sm:mt-20 mt-10">
                <Link to={'/logistics'}>
                <div className="p-7 text-center border-2 text-white hover:bg-white hover:text-black hover:border-black transition-all dura3on-1000 border-white rounded-xl w-72 sm:w-96 hover:bg-white hover:text-black">
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{main}</p>
              </div>
              </Link>
              <div onClick={handleFlip} className={`flip cursor-pointer `}>
              <div className={`p-7 text-center -mt-5 sm:mt-0 text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 flip border-2 border-white rounded-xl w-72 sm:w-96 ${flip ? "block" : "hidden"}`}>
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out font-bold `}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out font-bold`}>{tech}</p>
              </div>
              <div className={`text-center flip text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 py-12 px-10  border-2 border-white rounded-xl w-72 sm:w-96 ${flip ? "hidden" : "block"}`}>
              <p className="text-center text-5xl sm:text-6xl font-bold  bg-logistic font-serif">In Progress</p>
              </div>
              </div>
              </div>
              </div>
            </main>
          );
        })}
    </>
return(
    <div className=' flex flex-col '> 
        {content}
       
    </div>
)
}

export default Ecoreme