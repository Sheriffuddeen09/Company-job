import Slider from "./component/Slider"
import RangeText from "./welcome/RangeText"

function Home (){

return (
    <div className="flex flex-col">
    <div className="mb-96">
    <Slider />
    </div>

    <div className="mt-80 translate-y-3 -mb-96">
        <RangeText />
    </div>
    </div>
)
}

export default Home