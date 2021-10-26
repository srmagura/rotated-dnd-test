import React from "react";
import "./App.css";

interface DraggableProps {
  rotation: number;
}

function Draggable({ rotation }: DraggableProps) {
  return <div className="draggable">{rotation}</div>;
}

function App() {
  return (
    <div className="App">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <div style={{ marginBottom: "2rem" }} key={r}>
          <Draggable rotation={r} />
        </div>
      ))}
    </div>
  );
}

export default App;
