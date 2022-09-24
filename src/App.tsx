import "./App.css";
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
    const worker = new Worker("./worker/worker.ts");

    // post message to worker
    worker.postMessage("Hello from JS thread");

    // receive message from worker
    worker.onmessage = (message: { data: string }) => {
      console.log("worker message: ", message.data);
    };

    // receive error from worker
    worker.onerror = (error: any) => {
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
