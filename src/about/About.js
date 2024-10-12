import AboutSlider from './AboutSlider'
import Image from './images/ECOREME White PNG Logo.png'

function About (){


    const content = (
        <section className='flex flex-row sm:flex-nowrap flex-wrap justify-around items-center '>
             <div className='sm:translate-x-4 -translate-x-8'>
            <img src={Image} alt='logo' width={180} height={250}/>
            <h1 className='sm:text-7xl text-4xl mt-2 text-white font-bold'>Logistics</h1>
        </div>
        <div className="text-white font-bold text-sm sm:text-2xl md:w-5/12 lg:w-4/12 mx-4 sm:mx-20 my-5 sm:my-20 w-72">
            <h1 className="sm:text-4xl text-2xl mb-3"><span className="italic text-blue-300 font-bold">Ecoreme Logistics</span>, Connecting businesses with Client through Efficient Logistics Solutions</h1>
             <p className='sm:text-xl text font-light'> Ecoreme Logistics is committed to helping individuals, big businesses and MSMEs grow through fast pickup and delivery services at affordable rates.</p>
              <p className="mt-4 sm:text-xl text font-light">Whether it’s a single package or bulk orders, we've got you covered every time.</p>
              <p className="mt-2 sm:text-xl text font-light">Join our happy customers today!</p>
        </div>
        </section>
    )

    return (
        <div>
            <div className="mb-96">
            <AboutSlider />
            </div>
            <div className="sm:mt-60 mt-96 sm:translate-y-60 z-10 translate-y-28 sm:mb-80 mb-48">
                {content}
            </div>
        </div>
    )
}
export default About