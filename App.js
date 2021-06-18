import "./App.css";
import React, { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [locdata, setLocdata] = useState([]);

  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(false);
  const fetchData = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));
  };
  const getTemp = async () => {
    setError(false);
    const data = await fetchData("https://api.github.com/users/" + searchInput);
    console.log(data);
    if (data.message) {
      alert("INVALID USER");
      setError(true);
    } else {
      setLocdata(data.location);
      console.log(data.location);
      if (data.location === null) {
        alert("UPDATE LOCATION IN GITHUB!");
        setError(true);
      } else {
        const tempdata = await fetchData(
          `http://api.openweathermap.org/data/2.5/weather?q=${data.location}&appid=4e8fe55b900263c5f83603ed631e15ad`
        );
        if (tempdata.message) {
          alert("INVALID CITY");
          setError(true);
        } else {
          setTemperature(tempdata.main.temp);
          console.log(tempdata.main.temp);
        }
      }
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={getTemp}>GetTemp</button>
      {error === true ? (
        <h1>ERROR</h1>
      ) : (
        <ul>
          <li>{locdata}</li>
          <li>{temperature}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
