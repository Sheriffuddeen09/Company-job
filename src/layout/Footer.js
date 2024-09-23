import Face from './image/face.png'
import Twitter from './image/twwit.png'
import whats from './image/whats.jpeg'
import Port from './image/ports.png'


const Footers = () =>{

return (
    <div className="bg-black mt-8 p-4">
     <div className="flex sm:flex-row flex-wrap lg:justify-around lg:items-center mx-5 md:mx-10 lg:mx-0 ">
        <div className="">
        <h6 className="sm:text-4xl text-xl my-4 text-white font-bold " data-aos="flip-right">Get notified on any
            <br/>
            updates
        </h6>
        <p className="text-white text-sm mb-3 sm:text-xl sm:mb-0" data-aos="fade-right">
            Stay up to date on announcements, offer and  
            <br/>
            new product
        </p>
        </div>
        <div className="gap-3 flex flex-row gap-3 flex-wrap">
        <span>
            <input type="text" placeholder="Enter your email" className="sm:w-72 rounded-lg border w-60 border-green-300 p-2" data-aos="fade-right"/>
        </span>
        <button className="p-2 w-32 sm:w-48 bg-green-500 text-white rounded-lg" data-aos="fade-right">subscribe</button>
        </div>
    </div>
    <div className="sm:w-full bg-gray-200 h-0.5 my-6 w-56 mx-auto"></div>
        <div className="flex flex-row flex-wrap sm:mx-10 sm:mx-0 justify-around">
            <div data-aos="zoom-in" >
                <span><img src={Port} alt="" height={30} width={30}/></span>
                <div className='leading-10 mt-5 text-white'>
                <p className='foot' style={{fontSize:"13px"}}>eCommerce</p>
                <p className='foot' style={{fontSize:"13px"}}>High Value Goods</p>
                <p className='foot' style={{fontSize:"13px"}}>Global Brands</p>
                <p className='foot' style={{fontSize:"13px"}}>Nonprofits</p>
                </div>
            </div>
    
        <div data-aos="zoom-in" className='leading-10 text-white '>
            <h6 className='foot' style={{fontSize:"13px"}}>Products</h6>
            <p className='foot' style={{fontSize:"13px"}}>Technology</p>
            <p className='foot' style={{fontSize:"13px"}}>Transported</p>
            <p className='foot' style={{fontSize:"13px"}}>Logistics</p>
            <p className='foot' style={{fontSize:"13px"}}>Resources</p>
            <p className='foot' style={{fontSize:"13px"}}>Stored</p>
        </div>
      <div data-aos="zoom-in" className='leading-10 hidden sm:block text-white'>  <h6 className='foot' style={{fontSize:"13px"}}>Legal</h6> 
            <p className='foot' style={{fontSize:"13px"}}>Privacy-End users</p>
            <p className='foot' style={{fontSize:"13px"}}>Developers policy</p>
            <p className='foot' style={{fontSize:"13px"}}>Terms</p>
            <p className='foot' style={{fontSize:"13px"}}>Cookies</p>
            <p className='foot' style={{fontSize:"13px"}}>Security</p>
        </div>
        <div data-aos="zoom-in" className='leading-10 text-white hidden sm:block'>
            <h6 className='foot' style={{fontSize:"13px"}}>Help</h6>
            <p className='foot' style={{fontSize:"13px"}}>FAQS</p>
            <p className='foot' style={{fontSize:"13px"}}>Blog</p>
            <p className='foot' style={{fontSize:"13px"}}>Videos</p>
            <p className='foot' style={{fontSize:"13px"}}>Webinars</p>
            <p className='foot' style={{fontSize:"13px"}}>API Reference</p>
        </div>
     </div>
     <div className='sm:hidden sm:mx-10  flex-row flex justify-around'>
     <div data-aos="zoom-in" className='leading-10 sm:ml-0 ml-5 text-white'>  <h6 className='foot' style={{fontSize:"13px"}}>Legal</h6>
            <p className='foot' style={{fontSize:"13px"}}>Privacy-End users</p>
            <p className='foot' style={{fontSize:"13px"}}>Developers policy</p>
            <p className='foot' style={{fontSize:"13px"}}>Terms</p>
            <p className='foot' style={{fontSize:"13px"}}>Cookies</p>
            <p className='foot' style={{fontSize:"13px"}}>Security</p>
        </div>
        <div data-aos="zoom-in" className='leading-10 text-white'>
            <h6 className='foot' style={{fontSize:"13px"}}>Help & Resources</h6>
            <p className='foot' style={{fontSize:"13px"}}>FAQS</p>
            <p className='foot' style={{fontSize:"13px"}}>Blog</p>
            <p className='foot' style={{fontSize:"13px"}}>Videos and Webinars</p>
            <p className='foot' style={{fontSize:"13px"}}>Help Center</p>
            <p className='foot' style={{fontSize:"13px"}}>API Reference</p>
        </div>
     </div>
     
    <div className="mt-10 flex-row flex justify-around">
    <div className='inline-flex gap-1 items-center'>
            <p className=" text-white hidden sm:block">Design @ 2024 &copy;</p>
            <ul className=''>
            <p className='text-white'>Odukoya Sheriffuddeen Olawale</p>
            </ul>
    </div>
<div className='hidden sm:block '>
<div className='flex-row flex flex-wrap items-center gap-3' data-aos="fade-left">
    <img src={Face} alt="facebook" className='w-10 rounded-xl h-10 bg-white' width={30} height={30} />
    <img src={Twitter} alt="twitter" className='w-10 rounded-xl h-10' width={30} height={30} />
    <img src={whats} alt="whats" className='w-10 rounded-xl h-10' width={30} height={30} />
</div>
</div>
</div>
<div className='sm:hidden block '>
<div className='flex flex-row flex-wrap items-center gap-2' data-aos="fade-up">
    <img src={Face} alt="facebook" className='w-5 rounded-xl h-5 bg-white' width={20} height={20} />
    <img src={Twitter} alt="twitter" className='w-5 rounded-xl h-5' width={20} height={20} />
    <img src={whats} alt="whats" className='w-5 rounded-xl h-5' width={20} height={20} />
</div>
</div>
</div>


)
}
export default Footers