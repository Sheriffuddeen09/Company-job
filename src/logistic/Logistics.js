import Solution from "./Solution"
import RangeText from "./RangeText"
import Company from "./Company"
import LogTech from "./LogTech"
import Reviews from "./Reviews"
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