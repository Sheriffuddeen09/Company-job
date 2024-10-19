import { useState } from 'react'
import { Link } from 'react-router-dom'
import logos from './images/ECOREME White PNG Logo.png'
function Navbar() {

    //const homepage = useLocation().pathname

    const [hide, setHide] = useState(false)
    const [menu, setMenu] = useState(false)
    const handleHide = () =>{
        setHide(!hide)
    }
    const handlemenu = () => {
      setMenu(!menu)
  }

    return (

        <header className=" bg-black w-full z-10  shadow-2xl px-3 py-4 sm:p-6 ">
            <nav className='flex flex-row justify-between items-center lg:mx-7'>
              <div className='inline-flex items-center gap-2'>
                <Link to={'/'}>
              <img src={logos} alt='logo' width={140} height={80}/>
              </Link>
            </div>
            <div className='hidden md:hidden lg:block'> 
            <div className='lg:gap-12 gap-2 font-bold inline-flex '> 
                
                <Link to={'/about'} className={`text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer about`}>ABOUT
                </Link>

                <Link to={'/contact'} className="text-white contact text-sm text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">CONTACT
                </Link>
                <Link to={'/career'} className={`text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer career`}>CAREERS
                </Link>
                <Link to={'/logic'} className="text-white text-sm text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer logistic">ECOREME LOGISTICS
                
                </Link>
                <p className="text-white text-sm text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer tech">ECOREME TECHNOLOGIES
                </p>
            </div>
            </div>
            <div className='hidden md:block lg:hidden'> 
            <div className='lg:gap-12 gap-2 font-bold inline-flex ' style={{fontSize:"12px"}}> 
                
                <Link to={'/about'} className={`text-white  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer about`}>ABOUT
                </Link>

                <Link to={'/contact'} className="text-white contact text-white  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">CONTACT
                </Link>
                <Link to={'/career'} className={`text-white  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer career`}>CAREERS
                </Link>
                <Link to={'/logic'} className="text-white text-white  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer logistic">ECOREME LOGISTICS
                
                </Link>
                <p className="text-white text-white  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer tech">ECOREME TECHNOLOGIES
                </p>
            </div>
            </div>
            <div>
             <div className='hidden sm:block'> 
            <button onClick={handlemenu} className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="size-8 -translate-x- text-white translate-y-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
            </div>
            <div onClick={handleHide} className='sm:hidden block'>
            <button onClick={handleHide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="size-8  text-white translate-y-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
            </div>
            <div onClick={handleHide} className={`block z-10 showMenu sm:hidden fixed top-0 left-0 w-full h-full bg-menu ${hide ? 'block' :'hide'}`}> 
            
            <section className='gap-2 flex-col flex bg-black w-72 fixed right-0 p-4 text-black h-full text-end'>
            <div className='flex-row justify-between flex mt-2 items-center gap-2'>
            <Link to={'/'}>
            <img src={logos} alt='logo' width={140} height={80}/>
            </Link>
        <button className='rotate-45 translate-y-2' onClick={handleHide}>

            <div
            class="cursor-pointer showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 before:-translate-x-4 before:translate-y-2 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-4 after:translate-y-2 after:rotate-75 before:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[''] -translate-y-1 -translate-x-2 ">
            </div>
            </button>
            </div>
            <li className='-mb-5'>
            <Link to={'/about'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ABOUT</p>
            </Link>
            <li className={` bg-line w-60 mx-auto `}> </li>
            </li>
            <li className='-mb-5'>
            <Link to={'/contact'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>CONTACT</p>
            </Link>
            <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto `}> </li>

            </li>
            <li className='-mb-5'>
            <Link to={'/career'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>CAREERS</p>
            </Link>
            <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto `}> </li>

            </li>
            <li className='-mb-'>
            <Link to={'/logic'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME LOGISTICS</p>
            </Link>
            <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto `}> </li>

            </li>
            <li className='-mb-'>
            <p className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME TECHNOLOGIES</p>
            </p>
            <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto mt-5`}> </li>

            </li>
            </section>
            </div>
            </div>
            </nav>
            <div  onClick={handlemenu}  className={`z-10 transition-all duration-3000 ease-in-out fixed top-0 right-0 w-full h-full bg-menu ${menu ? "blocked" :"hide"}`}> 

            <section className=' text-white gap-2 flex-col transition-all duration-2000 ease-in-out flex bg-black w-80 fixed right-0 p-4 text-black h-full text-end '>
            <div className='flex-row justify-between flex items-center mt-4 gap-2'>
            <Link to={'/'}>
            <img src={logos} alt='logo' width={140} height={80}/>
            </Link>
            <button className='rotate-45 translate-y-2' onClick={handleHide}>

            <div
            class="cursor-pointer showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 before:-translate-x-4 before:translate-y-2 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-4 after:translate-y-2 after:rotate-75 before:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[''] -translate-y-1 -translate-x-2 ">
          </div>
          </button>
          </div>

              
               
        <li className='-mb-5'>
        <Link to={'/about'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-6 -mb-3'>ABOUT</p>
        </Link>
        <li className={` bg-line w-60 mx-auto `}> </li>
        </li>
        <li className='-mb-5'>
        <Link to={'/contact'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-6 -mb-3'>CONTACT</p>
        </Link>
        <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto `}> </li>

        </li>
        <li className='-mb-5'>
        <Link to={'/career'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-6 -mb-3'>CAREERS</p>
        </Link>
        <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto `}> </li>

        </li>
        <li className='mb-0'>
        <Link to={'/logic'} className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-6 -mb-3'>ECOREME LOGISTICS</p>
        </Link>
        <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto `}> </li>

        </li>
        <li className='-mb-5'>
        <p className={` text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-6 -mb-3'>ECOREME TECHNOLOGIES</p>
        </p>
        <li className={` bg-[#313030] h-0.5 w-60 w-60 mx-auto mt-5 `}> </li>

        </li>
        </section>
        </div>
        </header>
    )

}

export default Navbar