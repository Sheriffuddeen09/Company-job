import { useState } from 'react'
import Image from './image/logo.jpg'
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

        <header className=" fixed bg-black w-full z-10  shadow-2xl p-3 sm:p-3 ">
            <nav className='flex flex-row justify-between items-center mx-2 sm:mx-7'>
              <div className='inline-flex items-center gap-2'>
                <img src={Image} alt="logo" className='sm:w-36 w-24 h-12 rounded-xl sm:h-16 '/>
            </div>
            <div className='hidden sm:block'> 
            <div className='gap-12 -translate-x-7 mx-0 font-bold inline-flex '> 
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer home`}>ABOUT
                </Link>

                <Link to={'/about'} className="text-white heavy text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer">CONTACT
                </Link>
                <Link to={'/logic'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer dragon">ECOREME LOGISTICS
                
                </Link>
                <Link to={'/tech'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer start">ECOREME TECHNOLOGIES
                </Link>
            </div>
            </div>
            <div>
             <div className='hidden sm:block'> 
            <button onClick={handlemenu} className=''>
            <div onClick={handlemenu}
            class="absolute top-12 -mt-0.5 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-5 before:-translate-x-2.5 -translate-x-8  before:-translate-y-1 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-5 after:-translate-x-2.5 after:translate-y-1 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
            </button>
            </div>
            <div className='sm:hidden block'>
            <button onClick={handleHide}>
            <div onClick={handleHide}
            class="absolute top-13 -mt-0.5 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-5 before:-translate-x-2.5 -translate-x-12  before:-translate-y-1 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-5 after:-translate-x-2.5 after:translate-y-1 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
              
            </button>
            </div>
            <div onClick={handleHide} className={`block showMenu sm:hidden fixed top-0 left-0 w-full h-full bg-menu ${hide ? 'blockdd' :'hide'}`}> 
            
            <section className='gap-2 flex-col flex bg-black w-72 fixed right-0 p-4 text-black h-full text-end'>
            <div className='flex-row justify-between flex items-center gap-2 -mb-8'>
            <img src={Image} alt="logo" width={50} height={70} className='w-24 h-12 rounded-xl'/>
        <button className='rotate-45 translate-y-2' onClick={handleHide}>

            <div
            class="cursor-pointer showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 before:-translate-x-4 before:translate-y-2 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-4 after:translate-y-2 after:rotate-75 before:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[''] -translate-x-2 ">
          </div>
          </button>
            </div>
            <li className='-mb-5'>
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ABOUT</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <Link to={'/heavy'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>Contact</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>             
                <li className='-mb-5'>
                <Link to={'/dragon'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME LOGISTICS</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <Link to={'/start'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME TECHNOLOGIES</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
            </section>
            </div>
            </div>
            </nav>
            <div  onClick={handlemenu}  className={` transition-all duration-3000 ease-in-out fixed top-0 right-0 w-full h-full bg-menu ${menu ? "blocked" :"hide"}`}> 

                <section className='gap-2 flex-col transition-all duration-2000 ease-in-out flex bg-black w-80 fixed right-0 p-4 text-black h-full text-end '>
                <button className='relative top-4 left-32 mb-14' onClick={handlemenu} >
                <div
                            class="showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 cursor-pointer before:-translate-x-5 before:translate-y-7 before:rounded before:rotate-45  before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-5 after:translate-y-7 after:-rotate-45 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[''] rotate-[720deg] transition-all duration-500">
                          </div>
                </button>
                <li className='-mb-5'>
                <Link to={'/'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ABOUT</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <Link to={'/heavy'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>Contact</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>             
                <li className='-mb-5'>
                <Link to={'/dragon'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME LOGISTICS</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <Link to={'/start'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME TECHNOLOGIES</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
</section>
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