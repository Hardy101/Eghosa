import { useState } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ProjectWrapper from "./components/projects";
import Sidebar from "./components/sidebar";
import Overlay from "./components/overlay";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="relative bg-gradient-1 overflow-x-hidden">
        <NavBar setIsSidebarOpen={setIsSidebarOpen} />
        <Hero />

        <ProjectWrapper />
        {isSidebarOpen && (
          <>
            <Overlay /> <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
