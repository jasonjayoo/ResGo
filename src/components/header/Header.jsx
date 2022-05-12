// import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
// import { faHotel } from "@fortawesome/free-solid-svg-icons";
// import { faPlane } from "@fortawesome/free-solid-svg-icons";
// import { faCar } from "@fortawesome/free-solid-svg-icons";
// import { faBed } from "@fortawesome/free-solid-svg-icons";
// import { faTaxi } from "@fortawesome/free-solid-svg-icons";
// import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./header.css";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode": "headerContainer"} >
        <div className="headerList">
          <div className="headerListItem active">
            <div id="icons">🏩</div>
            {/* <FontAwesomeIcon icon={faHotel} /> */}
            <span>Reservations</span>
          </div>

          <div className="headerListItem active">
            <div id="icons1">🛫</div>
            {/* <FontAwesomeIcon icon={faPlane} /> */}
            <span>Flights</span>
          </div>

          <div className="headerListItem active">
            <div id="icons">🚘</div>
            {/* <FontAwesomeIcon icon={faCar} /> */}
            <span>Vehicle Rentals</span>
          </div>

          <div className="headerListItem active">
            <div id="icons">🛌🏼</div>
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span>Stays</span>
          </div>

          <div className="headerListItem active">
            <div id="icons">🚕</div>
            {/* <FontAwesomeIcon icon={faTaxi} /> */}
            <span>Airport Taxis</span>
          </div>
        </div>
       { type !== "list" && 
         <><h1 className="headerTitle">Travels, a lasting investment</h1>
        <p className="headerDesc">
          Escape to adventure! The memories you make will last a lifetime
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
          <div className="headerIcon1">🛌</div>
            {/* <FontAwesomeIcon icon={faBed} className="headerIcon" /> */}
            <input
              type="text"
              placeholder="Enter City Name"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <div className="headerIcon2">📅</div>
            {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItem">
          <div className="headerIcon3">🧍</div>
            {/* <FontAwesomeIcon icon={faPerson} className="headerIcon" /> */}
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room `}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                  disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
