import { useState } from 'react'
import Image from './image/logos.svg'
import { Link, useLocation } from 'react-router-dom'
function Navbar() {

    const homepage = useLocation().pathname

    const [hide, setHide] = useState(false)
    const [menu, setMenu] = useState(false)
    const handleHide = () =>{
        setHide(!hide)
    }
    const handlemenu = () => {
      setMenu(!menu)
  }

    return (

        <header className=" fixed bg-black w-full z-10  shadow-2xl border-b-1 border-l-0 border-r-0 border-t-0   border-white border -py-10 sm:px-0 ">
            <nav className='flex flex-row justify-between items-center mx-5'>
              <div className='inline-flex items-center gap-2'>
                <img src={Image} alt="logo" width={50} height={70} className='w-32'/>
            </div>
            <div className='hidden sm:block'> 
            <div className='gap-4 mx-10 inline-flex '> 
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer `}>FALCON 9
                <div className={`transition-all duration-500 ease-in-out hover:bg-[#626267] ${homepage === '/' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/about'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">FALCON HEAVY
                <div className={`${homepage === '/about' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/logic'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">DRAGON
                <div className={`${homepage === '/logic' ? 'home' : 'none'}`}> </div>
                
                </Link>
                <Link to={'/tech'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">STARTSHIP
                <div className={`${homepage === '/tech' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">HUMAN SPACEFLIGHT
                <div className={`${homepage === '/career' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">RIDESHARE
                <div className={`${homepage === '/career' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">STARSHIELD
                <div className={`${homepage === '/career' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">STARLINK
                <div className={`${homepage === '/career' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/career'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">SHOP
                <div className={`${homepage === '/career' ? 'home' : 'none'}`}> </div>
                </Link>
            </div>
            </div>
            <div>
             <div className='hidden sm:block'> 
            <button onClick={handlemenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer text-white" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            </div>
            <div className='sm:hidden block'>
            <button onClick={handleHide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer text-white" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              
            </button>
            </div>
            <div onClick={handleHide} className={`block sm:hidden fixed top-0 left-0 w-full h-full bg-menu ${hide ? 'block' :'hidden'}`}> 
            
            <div className='gap-2 flex-col flex bg-black w-72 fixed right-0 p-4 text-black h-full text-end'>
            <div className='flex-row justify-between flex items-center gap-2'>
            <img src={Image} alt="logo" width={50} height={70} className='w-32'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" onClick={handleHide} stroke="currentColor" class="size-6 cursor-pointer text-white mt-10 relative left-0 bottom-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer `}>FALCON 9
                <div className={`transition-all duration-500 ease-in-out hover:bg-[#626267] ${homepage === '/' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/falcon'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">FALCON HEAVY
                <div className={`${homepage === '/falcon' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/dragon'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">DRAGON
                <div className={`${homepage === '/dragon' ? 'home' : 'none'}`}> </div>
                
                </Link>
                <Link to={'/start'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">STARTSHIP
                <div className={`${homepage === '/start' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/human'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">HUMAN SPACEFLIGHT
                <div className={`${homepage === '/human' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/ride'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">RIDESHARE
                <div className={`${homepage === '/ride' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/shield'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">STARSHIELD
                <div className={`${homepage === '/shield' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/starlink'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">STARLINK
                <div className={`${homepage === '/starlink' ? 'home' : 'none'}`}> </div>
                </Link>
                <Link to={'/shop'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer">SHOP
                <div className={`${homepage === '/shop' ? 'home' : 'none'}`}> </div>
                </Link>
            </div>
            </div>
            </div>
            </nav>
            <div  onClick={handlemenu}  className={` fixed top-0 right-0 w-full h-full bg-menu ${menu ? "block" :"hidden"}`}> 

<div className='gap-2 flex-col flex bg-black w-64 fixed right-0 p-4 text-black h-full'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" onClick={handleHide} stroke="currentColor" class="size-6 cursor-pointer text-white mt-10 relative left-48 bottom-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

<a href='/' className="text-white font-bold flex flex-row justify-between text-sm  rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
Logistic 
</a>
<hr  className='bg-black w-full'/>
<a href='/' className="text-white font-bold  text-sm rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer p-2 flex flex-row justify-between"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
Technology
</a>
<hr  className='bg-black'/>
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

                <a href='/' className="text-white font-bold flex flex-row justify-between text-sm  rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer p-2">Logistic <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</a>
                <hr  className='bg-black w-full'/>
                <a href='/' className="text-white font-bold  text-sm rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#626267] cursor-pointer p-2 flex flex-row justify-between">Technology <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</a>
                <hr  className='bg-black'/>
                </div>
                </div>
                */