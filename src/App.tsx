import Logo from "./assets/react.svg";
import "./App.css";
import WorkerBuilder from "./worker/worker-builder";
import Worker from "./worker/worker";

function App() {
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
      <img className="logo" alt="react-logo" src={Logo} />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
        target="_blank"
      >
        Web worker
      </a>
      <button onClick={runWorker}>Run Worker</button>
    </div>
  );
}

export default App;
