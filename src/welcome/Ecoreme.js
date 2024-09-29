import { useEffect, useState } from "react"
import { welcomeFetch } from "../apiFetch/axios"
import { Link } from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css'

function Ecoreme(){
    const [welcomes, setWelcomes] = useState([]);
    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(true)

    useEffect(() =>{
      AOS.init({duration:2000})
  }, [])

    const handleFlip = () => {
      setFlip(!flip)
    }

    useEffect(() =>{

        welcomeFetch().then(json =>{
            setWelcomes(json)
            return json
        })

    }, [])
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
              <img src={images} alt={'imagePicture'} className="opacity-40 bg-black h-full opacity-10 w-full" style={{height:"750px"}}/>
              <div className="relative bottom-96  sm:-translate-y-52 -translate-y-80 ">
              <p className="sm:my-3 text-white z-10 text-3xl text-center sm:text-6xl font-bold">{welcome}</p>
              <p className=" text-white my-3 text-center text-4xl z-10">{title}</p>
              <div className="flex flex-row flex-wrap justify-center gap-10 mt-20 ">
                <Link to={'/logic'}>
                <div className="p-7 text-center border-2 text-white hover:bg-white hover:text-black hover:border-black transition-all dura3on-1000 border-white rounded-xl w-80 sm:w-96 hover:bg-white hover:text-black">
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{main}</p>
              </div>
              </Link>
              <div onClick={handleFlip} className={`flip cursor-pointer `}>
              <div className={`p-7 text-center  text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 flip border-2 border-white rounded-xl w-80 sm:w-96 ${flip ? "block" : "hidden"}`}>
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out font-bold `}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out font-bold`}>{tech}</p>
              </div>
              <div className={`text-center flip text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 py-12 px-10  border-2 border-white rounded-xl w-80 sm:w-96 ${flip ? "hidden" : "block"}`}>
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