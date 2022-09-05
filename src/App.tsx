import "./App.css";
import { useEffect, useState } from "react";
import worker from "./worker/worker-two";
import useShopifyWorker from "./hooks/useShopifyWorker";
import useKoalaWorker from "./hooks/useKoalaWorker";
import useNormalWorker from "./hooks/useNormalWorker";

// complex array constant
const nums: Array<number> = [...Array(5000000)].map(
  (e) => ~~(Math.random() * 1000000)
);

// call function without worker
const runFunction = () => worker([...nums]);

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

  // normal woker
  const [runNormalWorker] = useNormalWorker([...nums]);
  // shopify worker
  const [runShopifyWorker] = useShopifyWorker([...nums]);
  // koala worker
  const [runKoaleWorker] = useKoalaWorker([...nums]);

  return (
    <div className="container">
      <h1>{time}</h1>
      <div className="wrapper">
        <button title="Run function without web worker" onClick={runFunction}>
          Run Function
        </button>
        <button
          title="Normal web worker implementation"
          onClick={runNormalWorker}
        >
          Run Normal Worker
        </button>
        <button
          title="@shopify/react-web-worker web worker implementation"
          onClick={runShopifyWorker}
        >
          Run Shopify Worker
        </button>
        <button
          title="@koale/useworker web worker implementation"
          onClick={runKoaleWorker}
        >
          Run Koale Worker
        </button>
      </div>
    </div>
  );
}

export default App;
