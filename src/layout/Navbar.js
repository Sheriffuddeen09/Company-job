import { useState } from 'react'
import Image from './image/logo.png'
import { Link, useLocation } from 'react-router-dom'
function Navbar() {

    const homepage = useLocation().pathname
    const [hide, setHide] = useState(false)

    const handleHide = () =>{
        setHide(!hide)
    }

    return (

        <header className=" fixed bg-header w-full z-10  shadow-2xl border-b-1 border-l-0 border-r-0 border-t-0   border-white border py-3 sm:px-4 ">
            <nav className='flex flex-row justify-between items-center mx-10'>
              <div className='inline-flex items-center gap-2'>
                <img src={Image} alt="logo" width={30} height={30}/>
                <p className='text-white'> Ecoreme</p>
            </div>
            <div className='hidden sm:block'> 
            <div className='gap-14 mx-10 inline-flex '> 
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer `}>Home
                <div className={`transition-all duration-500 ease-in-out hover:bg-[#626267] ${homepage === '/' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/about'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">About
                <div className={`${homepage === '/about' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/logic'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">Logistic
                <div className={`${homepage === '/logic' ? 'home' : 'none'}`}> </div>
                
                </Link>
                <Link to={'/tech'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">Technology
                <div className={`${homepage === '/tech' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">Career
                <div className={`${homepage === '/career' ? 'home' : 'none'}`}> </div>
                </Link>
            </div>
            </div>
            <div>
            <button onClick={handleHide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer text-white" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              
            </button>

            <div className={`block sm:hidden fixed top-0 left-0 w-full h-full bg-menu ${hide ? 'block' :'hidden'}`}> 
                <div className='gap-5 flex-col flex bg-white w-60 p-4 text-black h-full'>
                <a href='/' className="text-black font-bold  text-sm  rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">Home</a>
                <hr  className='bg-black w-full'/>
                <a href='/' className="text-black font-bold  text-sm ">About</a>
                <hr  className='bg-black'/>
                <a href='/' className="text-black font-bold  text-sm ">Logistic</a>
                <hr  className='bg-black'/>
                <a href='/' className="text-black font-bold  text-sm ">Technology</a>
                <hr  className='bg-black'/>
                <a href='/' className="text-black font-bold  text-sm ">Career</a>
                </div>
            </div>
            </div>
            </nav>
        </header>
    )

}

export default Navbar