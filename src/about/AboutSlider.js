import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { rider } from "../Data";

function AboutSlider(){
    const [index, setIndex] = useState(0);
  /*
    const [hide, setHide] = useState(false)
  
    const handleHide = () =>{
        setHide(!hide)
    }
  */
    
    useEffect(() => {
      const lastIndex = rider.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, rider]);


    useEffect(() =>{

        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 10000);
          return () => clearInterval(slider);

    },[index])

    const content = <>
    
    {rider.map((home, homeIndex) => {
          const { id, images,title } = home;
          let position = "nextSlide";
          if (homeIndex === index) {
            position = "activeSlide";
          }
          if (
            homeIndex === index - 1 ||
            (index === 0 && homeIndex === rider.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={images} alt={'imagePicture'} className="opacity-40 w-full -translate-y-20 hidden sm:block" style={{height:"650px"}}/>
              <img src={images} alt={'imagePicture'} className="opacity-40 w-full -translate-y-20 sm:hidden block" style={{height:"450px"}}/>
              <div className="relative bottom-96 translate-x-3 sm:translate-x-14">
              <p className=" text-white mt-16 text-4xl font-bold hidden sm:block">{title}</p>
              <p className=" text-white mt-24 text-4xl font-bold sm:hidden block">{title}</p>
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

export default AboutSlider
