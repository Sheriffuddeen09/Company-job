import AboutSlider from './AboutSlider'
import Image from './images/ECOREME White PNG Logo.png'

function About (){


    const content = (
        <section className='flex flex-row flex-wrap justify-around items-center '>
             <div className='-translate-x-8'>
            <h1 className='sm:text-7xl text-4xl mb-4 text-green-300 font-bold'>Connect With </h1>
            <img src={Image} alt='logo' width={180} height={250}/>
            <h1 className='sm:text-7xl text-4xl mt-2 text-white font-bold'>Logistics</h1>
        </div>
        <div className="text-white font-bold text-sm sm:text-2xl sm:w-4/12 mx-4 sm:mx-20 my-5 sm:my-20 w-72">
            <h1 className="sm:text-4xl text-2xl mb-3"><span className="italic text-blue-300 font-bold">Ecoreme Logistics</span>, Connecting businesses to the Client with Seamless Logistics</h1>
             <p>  Ecoreme Logistics offers seamless service for all your shipping needs! Whether it's a single package or bulk orders, we ensure timely and efficient service at competitive rates.</p>
              <p className="mt-4"> Trust us to handle your deliveries with care, every time</p>
        </div>
        </section>
    )

    return (
        <div>
            <div className="mb-96">
            <AboutSlider />
            </div>
            <div className="sm:mt-60 mt-96 sm:translate-y-60 z-10 translate-y-28 sm:mb-80 mb-36">
                {content}
            </div>
        </div>
    )
}
export default About