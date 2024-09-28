import { useEffect, useState } from "react"
import { welcomeFetch } from "../apiFetch/axios"
import { Link } from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css'

function Ecoreme(){
    const [welcomes, setWelcomes] = useState([]);
    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(false)

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
              <div onClick={handleFlip} className={`cursor-pointer ${flip ? "hidden" : "block"}`}>
              <div onClick={handleFlip} className="p-7 text-center  text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300  border-2 border-white rounded-xl w-80 sm:w-96">
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out font-bold`}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out font-bold`}>{tech}</p>
              </div>
              </div>
              </div>
              </div>

              <section className={`fixed top-0 left-0 w-full h-full bg-flip  flip  ${flip ? "block" : "hidden"}`}>
             
              <div className="bg-white text-black mx-auto my-60 rounded-xl w-80 sm:w-96 sm:h-96 w-60 z-10 flex flex-col items-center justify-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={handleFlip} class="size-7 cursor-pointer text-black relative top-2 sm:left-40 left-32 font-bold ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

                 <p className="text-center p-20 text-5xl sm:text-7xl font-bold  bg-logistic font-serif">In Progress</p>
              </div>
              </section>
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