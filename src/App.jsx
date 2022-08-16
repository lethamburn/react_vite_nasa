import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Figure from "./components/Figure";

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "5JS20gQ4aHePLkpWjSmtjLn62zWN6AYu0kR2jFvI";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
        <h3>Please choose a previous date</h3>
      ) : (
        <Figure data={apod} />
      )}
    </div>
  );
};

export default App;
