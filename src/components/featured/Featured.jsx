import "./featured.css"
import Seoul from "../../assets/seoul.jpg"
import LosAngeles from "../../assets/losangeles.jpg"
import LasVegas from "../../assets/lasvegas.jpg"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={Seoul} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Seoul</h1>
                <h2>223 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={LasVegas} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Las Vegas</h1>
                <h2>533 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={LosAngeles} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Los Angeles</h1>
                <h2>853 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured