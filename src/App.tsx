import { DndContext, useDraggable } from "@dnd-kit/core";
import "./App.css";

interface DraggableProps {
  rotation: number;
}

function Draggable({ rotation }: DraggableProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform: _transform,
  } = useDraggable({
    id: rotation.toString(),
  });

  const transform = _transform ?? { x: 0, y: 0 };

  const style = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(${rotation}deg)`,
    touchAction: "none",
  };

  return (
    <div
      className="draggable"
      style={style}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
    >
      {rotation}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DndContext>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <div style={{ marginBottom: "2rem" }} key={r}>
            <Draggable rotation={r} />
          </div>
        ))}
      </DndContext>
    </div>
  );
}

export default App;
