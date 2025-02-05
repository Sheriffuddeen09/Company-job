import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { technologys } from "../Data";
import { Link } from "react-router-dom";
import Software from "./Software";

function Technology (){
    const [index, setIndex] = useState(0);

   
    useEffect(() => {
      const lastIndex = technologys.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, technologys]);


    useEffect(() =>{

        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 10000);
          return () => clearInterval(slider);

    },[index])

    const content = <>
    
    {technologys.map((techs, homeIndex) => {
          const { id, image, title, tech} = techs;
          let position = "nextSlide";
          if (homeIndex === index) {
            position = "activeSlide";
          }
          if (
            homeIndex === index - 1 ||
            (index === 0 && homeIndex === technologys.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
             <img src={image} alt={'imagePicture'} className="opacity-40 w-full -translate-y-20 hidden sm:block" style={{height:"650px"}}/>
             <img src={image} alt={'imagePicture'} className="opacity-40 w-full -translate-y-20 sm:hidden block" style={{height:"450px"}}/>
              <div className="relative bottom-96 translate-x-3 mx-auto sm:translate-x-14">
              <p className="text-3xl text-white mb-10 mt-10 text-center my-6">{title}</p>
              <p className="sm:w-8/12 my-3 text-white text-2xl mx-auto text-center sm:text-3xl font-bold">{tech}</p>
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
    <div className="mb-80">
        {content}
    </div>
        <div className="sm:mt-60 mt-96 sm:translate-y-10 -translate-y-52 sm:mb-48 mb-40">
       <Software />
       </div>
    </div>
)
}

export default Technology
