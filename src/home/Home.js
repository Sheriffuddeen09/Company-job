import Slider from "./Slider"
import Ecoreme from "./Ecoreme"

function Home (){

return (
    <div className="flex flex-col">
    <div className="mb-96">
    <Slider />
    </div>

    <div className="sm:mt-80 mt-96 sm:translate-y-3 translate-y-96 sm:-mb-96 -mb-16">
        <Ecoreme />
    </div>
    </div>
)
}

export default Home