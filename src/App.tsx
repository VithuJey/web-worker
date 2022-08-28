import Logo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <img className="logo" alt="react-logo" src={Logo} />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
        target="_blank"
      >
        Web worker
      </a>
      <button>Run Worker</button>
    </div>
  );
}

export default App;
