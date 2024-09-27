import AccordionsButton from "./accordion/AccordionButton"
import Company from "./component/Company"
import Slider from "./component/Slider"
import Footers from "./layout/Footer"
import Reviews from "./review/Reviews"
import Solution from "./solution/Solution"
import LogTech from "./template/LogTech"
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