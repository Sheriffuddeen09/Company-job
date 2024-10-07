import { review } from "../Data"

const Review = () =>{


const content = (
    <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center text-white ">
        {
            review.map((view) =>(
                <div>
                    <img src={view.star} alt="imagepicture" className="w-32 h-16 -translate-x-7" />
                    <h1 className="w-60">{view.body}</h1>
                    <div className="inline-flex gap-5 items-center my-4">
                        <img src={view.image} alt="imagepicture" className="w-10 h-10 rounded-full"/>
                        <span>
                            <p>{view.user}</p>
                            <p className="text-gray-400" style={{fontSize:"10px"}}>{view.user}</p>
                        </span>
                        <img src={view.icon} alt="imagepicture" className="w-6 h-6 rounded-full"/>
                    </div>
                </div>
            ))
        }
    </div>
)
    return (
        <div className="mt-5 mb-20">
            {content}
        </div>
    )
}

export default Review