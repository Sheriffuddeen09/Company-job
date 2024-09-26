import { useState } from 'react'
import Image from './image/space.png'
import { Link } from 'react-router-dom'
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

        <header className=" fixed bg-black w-full z-10  shadow-2xl sm:px-0 ">
            <nav className='flex flex-row justify-between items-center mx-7'>
              <div className='inline-flex items-center gap-2'>
                <img src={Image} alt="logo" className='w-44 h-24'/>
            </div>
            <div className='hidden sm:block'> 
            <div className='gap-2 -translate-x-7 mx-10 font-bold inline-flex '> 
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer home`}>FALCON 9
                </Link>

                <Link to={'/about'} className="text-white heavy text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer">FALCON HEAVY
                </Link>
                <Link to={'/logic'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer dragon">DRAGON
                
                </Link>
                <Link to={'/tech'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer start">STARTSHIP
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer human">HUMAN SPACEFLIGHT
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer ride">RIDESHARE
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer star">STARSHIELD
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer starlink">STARLINK
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer shop">SHOP
                </Link>
            </div>
            </div>
            <div>
             <div className='hidden sm:block'> 
            <button onClick={handlemenu} className=''>
            <div 
            class="absolute top-12 -mt-0.5 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-5 before:-translate-x-2.5 -translate-x-12  before:-translate-y-1 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-5 after:-translate-x-2.5 after:translate-y-1 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
            </button>
            </div>
            <div className='sm:hidden block'>
            <button onClick={handleHide}>
            <div 
            class="absolute top-11 -mt-0.5 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-5 before:-translate-x-2.5 -translate-x-12  before:-translate-y-1 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-5 after:-translate-x-2.5 after:translate-y-1 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
              
            </button>
            </div>
            <div onClick={handleHide} className={`block showMenu sm:hidden fixed top-0 left-0 w-full h-full bg-menu ${hide ? 'block' :'hidden'}`}> 
            
            <div className='gap-2 flex-col flex bg-black showdown w-72 fixed right-0 p-4 text-black h-full text-end'>
            <div className='flex-row justify-between flex items-center gap-2'>
            <img src={Image} alt="logo" width={50} height={70} className='w-32'/>
        <button className='rotate-45 translate-y-2 showrotate'>

            <div
            class="showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 before:-translate-x-4 before:translate-y-0 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-4 after:translate-y-0 after:rotate-75 before:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
          </button>
            </div>
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer `}>FALCON 9
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>

                <Link to={'/falcon'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">FALCON HEAVY
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/dragon'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">DRAGON
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/start'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">STARTSHIP
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/human'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">HUMAN SPACEFLIGHT
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/ride'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">RIDESHARE
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/shield'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">STARSHIELD
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/starlink'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">STARLINK
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/shop'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out cursor-pointer">SHOP
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
            </div>
            </div>
            </div>
            </nav>
            <div  onClick={handlemenu}  className={`showMenu transition-all duration-3000 ease-in-out fixed top-0 right-0 w-full h-full bg-menu ${menu ? "block" :"hidden"}`}> 

<div className='gap-2 showdown flex-col transition-all duration-2000 ease-in-out flex bg-black w-80 fixed right-0 p-4 text-black h-full text-end '>
<button className='rotate-45 relative top-4 left-36 mb-14 showrotate'>
<div
            class="showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 before:-translate-x-4 before:translate-y-7 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-4 after:translate-y-7 after:rotate-75 before:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
</button>

<Link to={'/'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3] -translate-x-5 hover:text-gray-600 cursor-pointer span`}>MISSION
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/launch'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3] -translate-x-5 hover:text-gray-600 cursor-pointer span">LAUNCHES
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3] -translate-x-5 hover:text-gray-600 cursor-pointer span">CAREERS
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/update'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3] -translate-x-5 hover:text-gray-600 cursor-pointer span">UPDATES
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
                <Link to={'/shop'} className="text-white text-sm text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3] -translate-x-5 hover:text-gray-600 cursor-pointer span">SHOP
                </Link>
                <div className={` bg-line w-60 translate-x-6 `}> </div>
               
</div>
</div>
        </header>
    )

}

export default Navbar

/*
 <div  onClick={handleHide}  className={`sm:block hidden fixed top-0 right-0 w-full h-full bg-menu ${hide ? 'block' :'hidden'}`}> 

                <div className='gap-5 flex-col flex bg-white w-96 fixed right-0 p-4 text-white h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" onClick={handleHide} stroke="currentColor" class="size-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                <a href='/' className="text-white font-bold flex flex-row justify-between text-sm  rounded-2xl transition-all duration-500 ease-in-out cursor-pointer p-2">Logistic <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</a>
                <hr  className='bg-black w-full'/>
                <a href='/' className="text-white font-bold  text-sm rounded-2xl transition-all duration-500 ease-in-out cursor-pointer p-2 flex flex-row justify-between">Technology <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</a>
                <hr  className='bg-black'/>
                </div>
                </div>
                */