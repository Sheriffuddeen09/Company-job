import { useEffect, useState } from "react"
import { homesFetch } from "../apiFetch/axios"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Input from "./Input";

function Slider(){
    const [homes, setHomes] = useState([]);
    const [index, setIndex] = useState(0);
    const [hide, setHide] = useState(false)
  
    const handleHide = () =>{
        setHide(!hide)
    }
    useEffect(() =>{

        homesFetch().then(json =>{
            setHomes(json)
            return json
        })

    }, [])
    useEffect(() => {
      const lastIndex = homes.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, homes]);


    useEffect(() =>{

        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 10000);
          return () => clearInterval(slider);

    },[index])

    const content = <>
    
    {homes.map((home, homeIndex) => {
          const { id, images, body, welcome, title, clicks } = home;
          let position = "nextSlide";
          if (homeIndex === index) {
            position = "activeSlide";
          }
          if (
            homeIndex === index - 1 ||
            (index === 0 && homeIndex === homes.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={images} alt={'imagePicture'} className="mx-auto rounded-xl opacity-20 w-full -translate-y-3" style={{height:"600px"}}/>
              <div className="relative bottom-96 -translate-y-48">
              <p data-aos="zoom-in" className="text-center text-white my-3 font-bold text-6xl">{title}</p>
              
           <div>
            <p className=" text-center text-4xl hidden lg:block text-white">{welcome}</p>
            
    </div>
                <p data-aos="fade-right" className="text-center font-bold text-2xl text-white lg:hidden block">{welcome}</p>
              <p data-aos="fade-left" className="w-7/12 mx-auto my-3 text-white text-xl hidden sm:block">{body}.<span className={`text-white bg-[#1a222f] mt-2 w-40 rounded-xl text-center py-2 transition-all duration-500 ease-in-out hover:bg-[#1a222f] cursor-pointer ${hide ? "hidden" : "block"}`} onClick={handleHide}>{clicks}</span></p>
              <p data-aos="zoom-in" className="w-7/12 mx-auto my-3 text-white block sm:hidden" style={{fontSize:"11px"}}>{body}.<span className={`text-white bg-[#1a222f] mt-2 w-40 rounded-xl text-center py-2 transition-all duration-500 ease-in-out hover:bg-[#1a222f] cursor-pointer ${hide ? "hidden" : "block"}`} onClick={handleHide}>{clicks}</span></p>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      
    </>
return(
    <div className='translate-y-20 flex flex-col'> 
        {content}
        <div className={`${hide ? "block" : "hidden"}`}>
        <Input handleHide={handleHide} />
        </div>
       
    </div>
)
}

export default Slider