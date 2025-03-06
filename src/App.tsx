import { useRef } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ProjectWrapper from "./components/projects";
import Sidebar from "./components/sidebar";
import Overlay from "./components/overlay";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="relative bg-gradient-1">
        <NavBar />
        <Hero divRef={divRef} />

        <ProjectWrapper />
        {/* <Overlay />
        <Sidebar /> */}
      </div>
    </>
  );
}

export default App;
