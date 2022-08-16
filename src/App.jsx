import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Figure from "./components/Figure";

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = import.meta.env.VITE_APP_NASA_ENDPOINT;
  const NASA_API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;

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
