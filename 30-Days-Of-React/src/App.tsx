import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const obj = {
  count: 0,
};
const vm: any = {};
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Object.defineProperty(vm, "count", {
      get() {
        console.log("get");
        return obj.count;
      },
      set(newValue: any) {
        obj.count = newValue;
        console.log("set", newValue, obj);
      },
    });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            console.log("vm.count", vm.count);
          }}
        >
          count is {count}
        </button>
        <button
          onClick={() => {
            vm.count++;
          }}
        >
          加一
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
