import Slider from "./Slider"
import Ecoreme from "./Ecoreme"

function Home (){

return (
    <div className="flex flex-col">
    <div className="mb-96">
    <Slider />
    </div>

    <div className="sm:mt-60 mt-96 sm:translate-y-6 -translate-y-52 sm:-mb-96 -mb-72">
        <Ecoreme />
    </div>
    </div>
)
}

export default Home