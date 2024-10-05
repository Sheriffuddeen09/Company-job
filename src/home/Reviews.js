import { useEffect, useState } from "react"
import { reviewsFetch } from "../apiFetch/axios"
import Review from "./Review"

const Reviews = () =>{

    const [reviews, setReviews] = useState([])
    const [view, setview] = useState(false)

    const handleView = () =>{

        setview(!view)
    }
    useEffect(() =>{

        reviewsFetch().then(json =>{

            setReviews(json)
            return json
        })
    },[])

const content = (
    <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center text-white ">
        {
            reviews.map((review) =>(
                <div>
                    <img src={review.star} alt="imagepicture" className="w-32 h-16 -translate-x-7" />
                    <h1 className="w-60">{review.body}</h1>
                    <div className="inline-flex gap-5 items-center my-4">
                        <img src={review.image} alt="imagepicture" className="w-10 h-10 rounded-full"/>
                        <span>
                            <p>{review.user}</p>
                            <p className="text-gray-400" style={{fontSize:"10px"}}>{review.user}</p>
                        </span>
                        <img src={review.icon} alt="imagepicture" className="w-6 h-6 rounded-full"/>
                    </div>
                </div>
            ))
        }
    </div>
)
    return (
        <div>
            <div className="sm:px-20 px-3 mb-8">
            <p className="text-white bg-blue-400 rounded-xl w-24 text-center mb-4">REVIEWS</p>
            <h1 className="text-start text-white text-2xl sm:text-5xl mb-4">Thousands of Ecoreme reviews</h1>
            <p className="text-white w-60 sm:w-5/12 mb-4">Explore reader feedback praising our ebook for its clarity, practicality, and transformative impact on their design skills.</p>
            </div>
            {content}
            <div className={`${view ? "block" : "hidden"}`}>
            <Review />
            </div>
            <p onClick={handleView} className={`cursor-pointer border-2 mx-auto border-white rounded-2xl p-2 w-40 text-white text-center ${view ? "hidden" : "block"}`}>Load more reviews</p>
        </div>
    )
}

export default Reviews