import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "primereact/button";

function handleThemeChange(e) {
  const linkStyle = document.getElementsByTagName('link')[1];
  !linkStyle.id ? linkStyle.id = 'style' : null;
  e.matches ? linkStyle.href.replace('light', 'dark') : 
  linkStyle.href.replace('dark', 'light');
  
}
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
prefersColorScheme.addEventListener("change", handleThemeChange);

function App() {
  const [count, setCount] = useState(0);
  handleThemeChange(prefersColorScheme);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
