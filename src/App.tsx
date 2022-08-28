import Logo from "./assets/react.svg";
import "./App.css";
import WorkerBuilder from "./worker/worker-builder";
import NormalWorker from "./worker/normal-worker";
import { worker as OtherWorker } from "./worker/other-worker";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

const createWorker = createWorkerFactory(() => import("./worker/other-worker"));

const numbers: Array<number> = [...Array(5000000)].map(
  (e) => ~~(Math.random() * 1000000)
);

const runNormalWorker = () => {
  // initiate worker
  const worker = new WorkerBuilder(NormalWorker);

  // post message to worker
  worker.postMessage(numbers);

  // receive message from worker
  worker.onmessage = (message) => {
    console.log("worker message: ", message.data);
  };

  // receive error from worker
  worker.onerror = (error) => {
    console.log("worker error: ", error.message);
  };
};

function App() {
  const worker = useWorker(createWorker);

  const runShopifyWorker = async () => {
    try {
      const result = await worker.worker(numbers);
      console.log({ result });
    } catch (error) {
      console.log("error ", error);
    }
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
      <button
        title="Normal Web worker implementation"
        onClick={runNormalWorker}
      >
        Run Normal Worker
      </button>
      <button
        title="Normal Web worker implementation"
        onClick={runShopifyWorker}
      >
        Run Shopify Worker
      </button>
    </div>
  );
}

export default App;
