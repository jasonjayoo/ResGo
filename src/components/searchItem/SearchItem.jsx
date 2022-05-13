import "./searchItem.css"
import Yurts from "../../assets/yurts.jpg";
import Villas from "../../assets/villa.jpg";
import LogCabin from "../../assets/logcabin.jpg";
import Home from "../../assets/home.jpg";
import Hotel from "../../assets/hotel.jpg";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src={Yurts} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Alaskan Wilderness Yurts</h1>
            <span className="siDistance">15miles from Airport</span>
            <span className="siTaxiOp">Complementary ATV Ride Provided</span>
            <span className="siSubtitle">Yurt in the Alaskan Wilderness</span>
            <span className="siFeatures">800sqft Yurt with Built in Stove</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">Cancel with 5 days of trip for free</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Very Popular</span>
                <button>9.2</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$182</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem