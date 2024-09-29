import Solution from "./solution/Solution"
import RangeText from "./rate/RangeText"
import Company from "./component/Company"
import LogTech from "./template/LogTech"
import Reviews from "./review/Reviews"
function Logistics (){

return (
    <div className="flex flex-col">
        <RangeText />
        <Company />
        <LogTech />
    <div className="">
    <Solution />
    </div>
    <div className="mt-5">
    <Reviews />
    </div>
    <div className="mt-4">
    </div>
    </div>
)
}

export default Logistics