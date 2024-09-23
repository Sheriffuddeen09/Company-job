import { useEffect, useState } from "react"
import { reviewFetch } from "../apiFetch/axios"

const Review = () =>{

    const [reviews, setReviews] = useState([])
    useEffect(() =>{

        reviewFetch().then(json =>{

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
        <div className="my-5">
            {content}
        </div>
    )
}

export default Review