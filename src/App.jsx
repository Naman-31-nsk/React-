import { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

function App() {
  const [activeProject, setActiveProject] = useState("p1");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>My Multiple Projects </h1>

      <button onClick={() => setActiveProject("p1")}>Project 1</button>
      <button onClick={() => setActiveProject("p2")}>Project 2</button>
      <button onClick={() => setActiveProject("p3")}>Project 3</button>

      <div style={{ marginTop: "20px" }}>
        {activeProject === "p1" && <Project1 />}
        {activeProject === "p2" && <Project2 />}
        {activeProject === "p3" && <Project3 />}
      </div>
    </div>
  );
}

export default App;
