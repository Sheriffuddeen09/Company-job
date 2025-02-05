import { Link } from "react-router-dom"

function Careers (){

    const content = (
        <section bg>
            <div className="text-center text-white px-4 py-10  sm:p-40">
                <h1 className="text-3xl p-4 sm:text-7xl">Come work with us</h1>
                <p className="text-sm sm:mt-6">We're looking for great people to join our growing team</p>
                <Link to={'/about'}><p className="border border-2 border-white p-3 bg-transparent w-32 abouthover mx-auto  mt-8">View About</p></Link>
            </div>
        </section>
    )

    const job = (
        <section className="bg-white pt-6 pb-20 px-2 sm:pb-20 sm:pt-6" >
            <p className="text-center text-4xl">Our Openings</p>
        <div className="text-black  text-xl sm:text-3xl sm:w-full mx-0 sm:mx-20 my-5 sm:mt-20 mx-3 ">
            <h1 className="mb-6">Lagos, NG </h1>
            <div className="flex sm:gap-52 gap-2  items-center flex-row  mb-3 ">
                <p className="font-bold text-2xl ">Professional Riders Urgently Needed</p>
                <p className="text-green-400 border sm:-translate-x-40 border-2 w-16 hover:bg-green-200 text-sm border-green-400 p- text-center rounded-xl">Open</p>
            </div>
         <div className="text-sm">
            <p className="text-xl mt-3 -mb-3">Requirements</p>
            <br />
            - Males.
            <br />
            - Residing in Lagos.
            <br />
            - Extensive knowledge of Lagos roads (both Mainland and Island).
            <br />
            - Previous experience as a dispatch rider is a plus.
        </div>
        <p className="font-bold text-sm mt-3">Salary: <span className='font-light text-sm'>Attractive</span></p>
       </div>   
        <hr className="my-5" />
       <div className="text-black  text-xl sm:text-3xl sm:w-full mx-0 sm:mx-20  mx-3">
            <div className="flex sm:gap-52 gap-2  items-center flex-row  mb-3 ">
                <p className="font-bold text-2xl "> Marketers</p>
                <p className="text-green-400 border sm:-translate-x-40 border-2 w-16 hover:bg-green-200 text-sm border-green-400 p- text-center rounded-xl">Open</p>
            </div>
            <p className="text-sm sm:w-96 w-64 text-justify">Are you a dynamic marketer who meets the       following requirements?. Join us as we expand our reach and connect with clients across the region. <br />
            We invite you to apply.
            </p>
         <div className="text-sm">
            <p className="text-xl mt-3 -mb-3">Requirements</p>
            <br />
            - Males.
            <br />
            - Good communication skills.
            <br />
            - Minimum of O-Level qualification.
            <br />
            - Residing in Lagos.
            <br />
            - Strong communication and networking skills.
            <br />
            - Previous experience in marketing is a plus.
        </div>
       </div>   

       <hr className="my-6" />

       <div className="text-black  text-xl sm:text-3xl sm:w-full mx-0 sm:mx-20 mb-6 mx-3 ">
            <div className="flex sm:gap-52 gap-2  items-center flex-row  mb-3 ">
                <p className="font-bold text-2xl ">Customer Service Representative</p>
                <p className="text-red-400 border sm:-translate-x-40 border-2 w-16 hover:bg-red-200 text-sm border-red-400 p- text-center rounded-xl">Closed</p>
            </div>
        <p className="text-sm sm:w-96 w-64 text-justify">Are you passionate about delivering excellent customer service? Join our dynamic team and play a vital role in enhancing our customers’ experience. <br />
        We invite you to apply.
         </p>
         <div className="text-sm">
            <p className="text-xl mt-3 -mb-3">Requirements</p>
            <br />
            - A female.
            <br />
            - Good communication skills.
            <br />
            - Minimum of O-Level qualification.
            <br />
            - Residing around Gate, Ipaja, Lagos.
            <br />
            - Strong customer service skills, including calmness and perseverance.
        </div>

       </div>   
       
       <div className="sm:mx-20 sm:mb-10 mb-5 mx-3 text-black">
        <p className="my-2">Call/WhatsApp: <a className="text-blue-400" href="tel:09062830059">09062830059 </a></p>
        <p className="my-2">You can also forward your CV to: <a className="text-blue-400" href="mailto:recruitment.logistics@ecoreme.com">recruitment.logistics@ecoreme.com</a></p>
        <p className="my-2">Note: Use the job title you are applying for as the subject of your email.</p>
        </div>
            
   <Link to={'/'} className="mt-4 text-black mx-auto abouthover text-sm sm:text-xl hover:bg-black rounded-xl hover:text-white border flex justify-items-center items-center text-center justify-center w-52 text-center sm:translate-x-0 sm:h-16 border-2 border-black p-3">Back to Homepage</Link>
   </section>
    )

    return (
        <section>
            {content}
            {job}
        </section>
    )
}
export default Careers