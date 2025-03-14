import { useState } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ProjectWrapper from "./components/projects";
import Skills from "./components/skills";
import Sidebar from "./components/sidebar";
import Overlay from "./components/overlay";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "h-screen overflow-y-hidden" : "overflow-auto"
        } relative bg-gradient-1 overflow-x-hidden`}
      >
        <NavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Hero />
        <ProjectWrapper />

        <Overlay
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Skills />
      </div>
    </>
  );
}

export default App;
