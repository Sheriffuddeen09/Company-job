import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { homesdata } from "../Data";
//import Input from "./Input";

function Slider(){
    const [index, setIndex] = useState(0);
  /*
    const [hide, setHide] = useState(false)
  
    const handleHide = () =>{
        setHide(!hide)
    }
  */
   
    useEffect(() => {
      const lastIndex = homesdata.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, homesdata]);


    useEffect(() =>{

        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 10000);
          return () => clearInterval(slider);

    },[index])

    const content = <>
    
    {homesdata.map((home, homeIndex) => {
          const { id, images, body, title, click } = home;
          let position = "nextSlide";
          if (homeIndex === index) {
            position = "activeSlide";
          }
          if (
            homeIndex === index - 1 ||
            (index === 0 && homeIndex === homesdata.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={images} alt={'imagePicture'} className="opacity-40 w-full -translate-y-20" style={{height:"650px"}}/>
              <div className="relative bottom-96 translate-x-3 sm:translate-x-14">
              <p className=" text-white my-3 text-xl">{title}</p>
              <p className="sm:w-5/12 my-3 text-white text-3xl sm:text-5xl font-bold">{body}</p>
              <p className={`text-white text-center border-2 border-white mt-2 w-40  py-3 transition-all duration-500 ease-in-out hover:bg-white hover:text-black cursor-pointer font-bold`}>{click}</p>
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
       
    </div>
)
}

export default Slider

/*

<div className='wrapper'>
            <ul className='dynamic mt-3 translate-x-32 text-4xl hidden lg:block'>
            <ol className=" mx-auto"><main className=" mx-auto  ">{welcome}</main></ol>
            </ul>
    </div>

    */