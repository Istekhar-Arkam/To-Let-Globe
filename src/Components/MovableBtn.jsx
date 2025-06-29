import { useState, useRef } from "react";
function MovableBtn() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };
  return (
    <div
      className="relative w-screen h-screen overflow-hidden border-2 border-red-500"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        onMouseDown={handleMouseDown}
        className="absolute px-2 gap-18 ml-auto p-4 text-white rounded shadow-lg cursor-pointer bg-teal-500 flex items-center justify-between"
        style={{ left: position.x, top: position.y }}
      >
        <h3 className="text-xl text-black">Compare</h3>
        <div className="bg-teal-600 h-8 w-8 flex items-center justify-center">
          <span className="text-lg font-bold text-black">1</span>
        </div>
      </button>
         
    </div>
  );
}

export default MovableBtn;
