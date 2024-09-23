import AccordionsButton from "./accordion/AccordionButton"
import Company from "./component/Company"
import Slider from "./component/Slider"
import Footers from "./layout/Footer"
import RangeText from "./rate/RangeText"
import Reviews from "./review/Reviews"
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
        <Company />
    </div>
    <div>
        <Solution />
    </div>
    <div>
        <AccordionsButton />
    </div>
    <div>
        <Reviews />
    </div>
    <Footers />
    </div>
)
}

export default Home