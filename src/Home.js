import Slider from "./component/Slider"
import Ecoreme from "./welcome/Ecoreme"

function Home (){

return (
    <div className="flex flex-col">
    <div className="mb-96">
    <Slider />
    </div>

    <div className="mt-80 translate-y-3 -mb-96">
        <Ecoreme />
    </div>
    </div>
)
}

export default Home