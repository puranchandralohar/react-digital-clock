import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Time</h1>
      <h1>{clock}</h1>
    </div>
  );
}
