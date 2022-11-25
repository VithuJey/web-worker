import "./App.css";
import { useEffect, useState } from "react";
import worker from "../public/worker/libWorker";
import usekoaleWorker from "./hooks/useKoaleWorker";
import useWebApiWorker from "./hooks/useWebApiWorker";
import Toast from "./components/Toast";

// complex array constant
const nums: Array<number> = [...Array(5000000)].map(
  (e) => ~~(Math.random() * 1000000)
);

// call function without worker
const runFunction = () => worker([...nums]);

function App() {
  // show toast
  const [showToast, setShowToast] = useState<boolean>(false);
  // toast message
  const [toastMessage, setToastMessage] = useState<string>("");
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

  const handleWithoutWebWroker = () => {
    setShowToast(true);
    setToastMessage("User Interface freezed due to heavy computational task!");
    // timeout to show toast before running the function
    const timeId1 = setTimeout(() => {
      runFunction();
      clearTimeout(timeId1);
    }, 5);
    // timeout to remove toast after running the function. assume 3000ms as approx time to run the function.
    const timeId2 = setTimeout(() => {
      setShowToast(false);
      clearTimeout(timeId2);
    }, 3000);
  };

  const handleWebApiWorker = () => {
    setShowToast(true);
    setToastMessage("User Interface without freeze due to web worker!");
    runWebApiWorker();
    // timeout to remove toast after running the function. assume 3000ms as approx time to run the function.
    const timeId1 = setTimeout(() => {
      setShowToast(false);
      clearTimeout(timeId1);
    }, 3000);
  };

  const handleKoaleApiWorker = () => {
    setShowToast(true);
    setToastMessage("User Interface without freeze due to web worker!");
    runKoaleWorker();
    // timeout to remove toast after running the function. assume 3000ms as approx time to run the function.
    const timeId2 = setTimeout(() => {
      setShowToast(false);
      clearTimeout(timeId2);
    }, 3000);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: ["111111", "ffffff"].includes(randomColor)
          ? "#000"
          : `#${randomColor}`,
      }}
    >
      {showToast && <Toast message={toastMessage} />}
      <h1 style={{ color: "#fff" }}>{time}</h1>
      <div className="wrapper">
        <button
          title="Run function without web worker"
          onClick={handleWithoutWebWroker}
        >
          Run Without Worker
        </button>
        <button
          title="Run function using Web API worker implementation"
          onClick={handleWebApiWorker}
        >
          Run Web API Worker
        </button>
        <button
          title="Run function using @koale/useworker web worker implementation"
          onClick={handleKoaleApiWorker}
        >
          Run Koale Worker
        </button>
      </div>
    </div>
  );
}

export default App;
