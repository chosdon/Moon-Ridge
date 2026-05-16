import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar() {
  const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);
  // const [infants, setInfants] = useState(0);
  const [days, setDays] = useState(1);
  const [fromDate, setFromDate] = useState("");

  return (
    <div className="search-bar">
      {/* From */}
      <div className="search-item">
        <label>Check-in Date</label>
        <input
          type="date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />
      </div>

      {/* Guests */}
      <div className="search-item">
        <label>Number of Guests</label>
        <div className="guests-select">
          <div>
            <input type="number" min="1" value={adults} onChange={e => setAdults(Number(e.target.value))} placeholder="Adults" />
          </div>
        </div>
      </div>

      {/* Days */}
      <div className="search-item">
        <label>Length of Stay</label>
        <select value={days} onChange={e => setDays(Number(e.target.value))}>
          {[...Array(30).keys()].map(d => (
            <option key={d+1} value={d+1}>{d+1} {d+1 === 1 ? "day" : "days"}</option>
          ))}
        </select>
      </div>

      <button className="search-btn">
        Search
      </button>
    </div>
  );
}

export default SearchBar;