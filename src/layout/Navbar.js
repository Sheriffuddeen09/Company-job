import { useState } from 'react'
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

        <header className=" bg-black w-full z-10  shadow-2xl p-3 sm:p-6 ">
            <nav className='flex flex-row justify-between items-center mx-2 sm:mx-7'>
              <div className='inline-flex items-center gap-2'>
              <p className="font-serif text-white font-bold text-3xl"> ECOREME</p>
            </div>
            <div className='hidden sm:block'> 
            <div className='gap-12 -translate-x-7 mx-0 font-bold inline-flex '> 
                <Link to={'/career'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer home`}>CAREERS
                </Link>
                <Link to={'/about'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer home`}>ABOUT
                </Link>

                <Link to={'/contact'} className="text-white contact text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer">CONTACT
                </Link>
                <Link to={'/logistic'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer logic">ECOREME LOGISTICS
                
                </Link>
                <p to={'/tech'} className="text-white text-sm text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer tech">ECOREME TECHNOLOGIES
                </p>
            </div>
            </div>
            <div>
             <div className='hidden sm:block'> 
            <button onClick={handlemenu} className=''>
            <div onClick={handlemenu}
            class="absolute top-12 -mt-2 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-5 before:-translate-x-2.5 -translate-x-8  before:-translate-y-1 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-5 after:-translate-x-2.5 after:translate-y-1 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
            </button>
            </div>
            <div className='sm:hidden block'>
            <button onClick={handleHide}>
            <div onClick={handleHide}
            class="absolute top-8 -mt-0.5 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-5 before:-translate-x-2.5 -translate-x-12  before:-translate-y-1 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-5 after:-translate-x-2.5 after:translate-y-1 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
              
            </button>
            </div>
            <div onClick={handleHide} className={`block z-10 showMenu sm:hidden fixed top-0 left-0 w-full h-full bg-menu ${hide ? 'blockdd' :'hide'}`}> 
            
            <section className='gap-2 flex-col flex bg-black w-72 fixed right-0 p-4 text-black h-full text-end'>
            <div className='flex-row justify-between flex items-center gap-2'>
            <p className="font-serif text-white"> ECOREME</p>
        <button className='rotate-45 translate-y-2' onClick={handleHide}>

            <div
            class="cursor-pointer showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 before:-translate-x-4 before:translate-y-2 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-4 after:translate-y-2 after:rotate-75 before:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[''] translate-x-2 ">
          </div>
          </button>
            </div>
            <li className='-mb-5'>
            <Link to={'/career'} className={`text-white text-sm  rounded-xl p-2 transition-all duration-500 ease-in-out cursor-pointer home`}>CAREERS
            </Link>
            </li>

            <li className='-mb-5'>

                <Link to={'/about'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ABOUT</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <Link to={'/contact'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>CONTACT</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>             
                <li className='-mb-5'>
                <Link to={'/logistic'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME LOGISTICS</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <p to={'/tech'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME TECHNOLOGIES</p>
                </p>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
            </section>
            </div>
            </div>
            </nav>
            <div  onClick={handlemenu}  className={`z-10 transition-all duration-3000 ease-in-out fixed top-0 right-0 w-full h-full bg-menu ${menu ? "blocked" :"hide"}`}> 

                <section className='gap-2 flex-col transition-all duration-2000 ease-in-out flex bg-black w-80 fixed right-0 p-4 text-black h-full text-end '>
                <button className='relative top-4 left-32 mb-14' onClick={handlemenu} >
                <div
                            class="showrotate transition-all duration-500 before:absolute before:h-0.5 before:w-4 cursor-pointer before:-translate-x-5 before:translate-y-7 before:rounded before:rotate-45  before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-4 after:-translate-x-5 after:translate-y-7 after:-rotate-45 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[''] rotate-[720deg] transition-all duration-500">
                          </div>
                </button>

            <li className='-mb-5'>
            <Link to={'/career'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>CAREERS</p>
            </Link>
            </li>
                <li className='-mb-5'>
                <Link to={'/about'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ABOUT</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <Link to={'/contact'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>CONTACT</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>             
                <li className='-mb-5'>
                <Link to={'/logistic'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME LOGISTICS</p>
                </Link>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
                <li className='-mb-5'>
                <p to={'/tech'} className={`text-white text-sm  rounded-xl p-1 transition-all duration-500 ease-in-out hover:bg-[#000000b3]  hover:text-gray-600 cursor-pointer`}><p className='-translate-x-2 -mb-3'>ECOREME TECHNOLOGIES</p>
                </p>
                <li className={` bg-line w-60 mx-auto `}> </li>
                </li>
</section>
</div>
        </header>
    )

}

export default Navbar