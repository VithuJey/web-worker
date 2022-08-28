import Logo from "./assets/react.svg";
import "./App.css";
import WorkerBuilder from "./worker/worker-builder";
import normalWorker from "./worker/normal-worker";
import worker from "./worker/other-worker";
import {
  createWorkerFactory,
  useWorker as useShopifyWorker,
} from "@shopify/react-web-worker";
import { useWorker as useKoaleWorker } from "@koale/useworker";

// init shopify createWorkerFactory
const createWorker = createWorkerFactory(() => import("./worker/other-worker"));

// complex array constant
const numbers: Array<number> = [...Array(5000000)].map(
  (e) => ~~(Math.random() * 1000000)
);

// call normal-worker without using any libs
const runNormalWorker = () => {
  // initiate worker
  const worker = new WorkerBuilder(normalWorker);

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
  // shopify web worker hook
  const shopifyWorker = useShopifyWorker(createWorker);
  // call other-worker using shopify web worker
  const runShopifyWorker = async () => {
    try {
      const result = await shopifyWorker.default(numbers);
      console.log("shopify worker result ", { result });
    } catch (error) {
      console.log("error ", error);
    }
  };

  // koale web worker hook
  const [koaleWorker] = useKoaleWorker(worker);
  // call other-worker using shopify web worker
  const runKoaleWorker = async () => {
    try {
      const result = await koaleWorker(numbers);
      console.log("koale worker result ", { result });
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
        title="Shopify Web worker implementation"
        onClick={runShopifyWorker}
      >
        Run Shopify Worker
      </button>
      <button title="Koale Web worker implementation" onClick={runKoaleWorker}>
        Run Koale Worker
      </button>
    </div>
  );
}

export default App;
