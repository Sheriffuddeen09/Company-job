import { useState } from "react"

function Contact (){

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSumbit = async (e) =>{

        e.preventDefault()
        console.log(message, name, email)
        setMessage('')
        setName('')
        setEmail('')
    }

    const content = (
        <div className="text-white font-bold text-xl sm:text-3xl sm:w-5/12 mx-4 sm:mx-20 my-5 sm:my-20 w-72">
        <p className="mb-3">Call or Whatsapp </p>
        <a href="tel:09062830059" className="text-blue-200 underline">09062830059</a>
         <p className="mt-6 mb-3">Email Address </p>
         <a href='mailto:logistics@ecoreme.com' className="text-blue-200 underline">logistics@ecoreme.com</a>
         <p className="mt-6 mb-3">Website </p>
         <a href='www.ecoreme.com' className="text-blue-200 underline">www.ecoreme.com</a>
   </div>
    )

    const form = (
        <div className="bg-white p-3 sm:p-6 text-black rounded-xl translate-x-3 mb-20">
            <form className="flex flex-col text-white text-xl">
                <label className="text-black">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}
                className="border mt-3 sm:w-96 w-64 rounded outline-green-200 border-blue-200 px-2 py-2"/>
                 <label className="mt-4 text-black">Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                className="border mt-3 sm:w-96 w-64 rounded outline-green-200 border-blue-200 px-2 py-2"/>
                 <label className="mt-4 text-black">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} 
                className="border mt-3 sm:w-96 h-32 w-64 rounded outline-green-200 border-blue-200 px-2 py-2"/>
                <button onClick={handleSumbit} className="sm:w-96 w-64 h-10 text-white rounded mt-5 bg-green-600">Send</button>
            </form>
        </div>
    )
    return (
        <section className="flex flex-row lg:mx-20 md:mx-8 sm:flex-nowrap items-center mt-8 sm:mt-20 flex-wrap">
            {content}
            {form}
        </section>
    )
}
export default Contact