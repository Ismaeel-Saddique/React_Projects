import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");

  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl p-2 ">
          <button onClick={()=> setColor("#800000")} className="outline-none p-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "#800000"}}>Red</button>
          <button onClick={()=> setColor("purple")} className="outline-none p-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={()=> setColor("#1E1E1E")} className="outline-none p-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "#1E1E1E"}}>Dark</button>
          <button onClick={()=> setColor("green")} className="outline-none p-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
