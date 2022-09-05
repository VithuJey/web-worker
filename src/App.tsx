import Logo from "./assets/react.svg";
import "./App.css";
import WorkerBuilder from "./worker/worker-builder";
import Worker from "./worker/worker";
import { useEffect, useState } from "react";

function App() {
  // time state
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // hook to update time state after each second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const runWorker = () => {
    // initiate worker
    const worker = new WorkerBuilder(Worker);

    // post message to worker
    worker.postMessage("Hello from JS thread");

    // receive message from worker
    worker.onmessage = (message) => {
      console.log("worker message: ", message.data);
    };

    // receive error from worker
    worker.onerror = (error) => {
      console.log("worker error: ", error);
    };
  };

  return (
    <div className="app">
      <h1>{time}</h1>
      <button onClick={runWorker}>Run Worker</button>
    </div>
  );
}

export default App;
