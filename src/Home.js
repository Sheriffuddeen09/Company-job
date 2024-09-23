import Slider from "./component/Slider"
import Footers from "./layout/Footer"
import RangeText from "./rate/RangeText"
import Solution from "./solution/Solution"
import LogTech from "./template/LogTech"

function Home (){

return (
    <div className="flex flex-col">
    <div className="">
    <Slider />
    </div>
    <div className="mt-96 translate-y-80">
    <RangeText />
    </div>
    <div className="mt-80">
        <LogTech />
    </div>
    <div>
        <Solution />
    </div>
    <Footers />
    </div>
)
}

export default Home