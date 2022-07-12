import React, { useRef, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas/Canvas";

function App() {
  const [render, setRender] = useState(0);

  return (
    <div className="App">
      <Canvas key={render} />
      <button
        onClick={() => {
          console.log("button");
          setRender((prev) => prev + 1);
        }}
      >
        Render
      </button>
      <p>{render}</p>
    </div>
  );
}

export default App;
