import "./featuredProperties.css";

import Cosmo from "../../assets/cosmo.jpg";
import YurtRental from "../../assets/yurtrental.jpg";
import BeachResort from "../../assets/beachresort.jpg";
import ThaiResort from "../../assets/thairesort.jpg";


const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={Cosmo} alt="" className="fpImg" />
        <span className="fpName">The Cosmopolitan</span>
        <span className="fpCity">Las Vegas, Nevada</span>
        <span className="fpPrice">Starting from $183</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Top Favorite</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={YurtRental} alt="" className="fpImg" />
        <span className="fpName">Alaskan Wilderness</span>
        <span className="fpCity">Seward, Alaska</span>
        <span className="fpPrice">Starting from $125</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Outdoor Favorite</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={BeachResort} alt="" className="fpImg" />
        <span className="fpName">The Eleuthera</span>
        <span className="fpCity">Gregory Town, Bahamas</span>
        <span className="fpPrice">Starting from $883</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Beach Front Favorite</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={ThaiResort} alt="" className="fpImg" />
        <span className="fpName">Shangri-La</span>
        <span className="fpCity">Pattaya, Thailand</span>
        <span className="fpPrice">Starting from $82</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Far East Favorite</span>
        </div>
      </div>

    </div>
    
  );
};

export default FeaturedProperties;
