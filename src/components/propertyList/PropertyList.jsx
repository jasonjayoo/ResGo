import "./propertyList.css";
import Yurts from "../../assets/yurts.jpg";
import Villas from "../../assets/villa.jpg";
import LogCabin from "../../assets/logcabin.jpg";
import Home from "../../assets/home.jpg";
import Hotel from "../../assets/hotel.jpg";

const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={Yurts} alt="Yurts" className="pListImg" />
        <div className="pListTitles">
          <h1>Yurts</h1>
          <h2>53 yurts</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={Villas} alt="Villas" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>52 villas</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={LogCabin} alt="Log Cabins" className="pListImg" />
        <div className="pListTitles">
          <h1>Log Cabins</h1>
          <h2>29 log cabins</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={Home} alt="Homes" className="pListImg" />
        <div className="pListTitles">
          <h1>Homes</h1>
          <h2>823 homes</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={Hotel} alt="Hotels" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>9622 hotels</h2>
        </div>
      </div>


    </div>
  );
};

export default propertyList;
