import "./App.css";
import { useEffect, useState } from "react";
import worker from "../public/worker/libWorker";
import usekoaleWorker from "./hooks/useKoaleWorker";
import useWebApiWorker from "./hooks/useWebApiWorker";

// complex array constant
const nums: Array<number> = [...Array(5000000)].map(
  (e) => ~~(Math.random() * 1000000)
);

// call function without worker
const runFunction = () => worker([...nums]);

function App() {
  // time state
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // hook to update time state after each second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // web api woker
  const [runWebApiWorker] = useWebApiWorker([...nums]);
  // koale worker
  const [runKoaleWorker] = usekoaleWorker([...nums]);

  return (
    <div className="container">
      <h1 style={{ color: `#${randomColor}` }}>{time}</h1>
      <div className="wrapper">
        <button title="Run function without web worker" onClick={runFunction}>
          Run Function
        </button>
        <button
          title="Run function using Web API worker implementation"
          onClick={runWebApiWorker}
        >
          Run Web API Worker
        </button>
        <button
          title="Run function using @koale/useworker web worker implementation"
          onClick={runKoaleWorker}
        >
          Run Koale Worker
        </button>
      </div>
    </div>
  );
}

export default App;
