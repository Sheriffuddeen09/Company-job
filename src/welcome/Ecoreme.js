import { useEffect, useState } from "react"
import { welcomeFetch } from "../apiFetch/axios"
import { Link } from "react-router-dom";


function Ecoreme(){
    const [welcomes, setWelcomes] = useState([]);
    const [index, setIndex] = useState(0);

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
    
    {welcomes.map((wel, homeIndex) => {
          const { id, images, welcome, title, main, tech , company} = wel;
          return (
            <main key={id}>
              <img src={images} alt={'imagePicture'} className="opacity-40 bg-black h-full opacity-10 w-full" style={{height:"700px"}}/>
              <div className="relative bottom-96 -translate-y-40 ">
              <p className="my-3 text-white z-10 text-3xl text-center sm:text-6xl font-bold">{welcome}</p>
              <p className=" text-white my-3 text-center text-4xl z-10">{title}</p>
              <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
                <Link to={'/logic'}>
                <div className="p-7 text-center border-2 text-white hover:bg-white hover:text-black hover:border-black transition-all dura3on-1000 border-white rounded-xl w-96 hover:bg-white hover:text-black">
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{main}</p>
              </div>
              </Link>
              <Link to={'/tech'}>
              <div className="p-7 text-center  text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300  border-2 border-white rounded-xl w-96">
              <p className={` text-center text-6xl mt-2 w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{company}</p>
              <p className={` text-center text-4xl w-40  py-3 transition-all duration-500 ease-in-out cursor-pointer font-bold`}>{tech}</p>
              </div>
              </Link>
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