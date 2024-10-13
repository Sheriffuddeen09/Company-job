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
            <div className="flex flex-row flex-wrap justify-around items-center">
        <div className="text-black  text-xl sm:text-3xl sm:w-5/12 mx-0 sm:mx-20 my-5 sm:my-20 w-60 ">
            <h1 className="mb-4">Lagos,NG</h1>
                <p className="font-bold text-xl">Professional Rider</p>
        <p className="text-sm sm:w-96 w-64 text-justify">If you are a professional rider with extensive knowledge of lagos roads (both Mainland and Island) we invite you to apply. </p>
        <p className="text-sm">Please send your CV to: <a href="mailto:logistics.recruitment@ecoreme.com" className="mt-1 text-blue-300 font-bold  abouthover text-sm">logistics.recruitment@ecoreme.com</a></p>
        </div>

         <Link to={'/'} className="mt-4 text-black  abouthover text-sm sm:text-xl hover:bg-black rounded-xl hover:text-white border -translate-x-11 sm:translate-x-0 sm:h-16 border-2 border-black p-3">Back to Homepage</Link>
   </div>
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