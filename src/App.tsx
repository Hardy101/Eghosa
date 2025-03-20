import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ProjectWrapper from "./components/projects";
import Skills from "./components/skills";
import Sidebar from "./components/sidebar";
import Overlay from "./components/overlay";
import { useSidebarStore } from "./store/useSidebarStore";

function App() {
  const { isSidebarOpen } = useSidebarStore();
  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "h-screen overflow-y-hidden" : "overflow-auto"
        } relative bg-gradient-1 overflow-x-hidden`}
      >
        <NavBar />
        <Hero />
        <ProjectWrapper />

        <Overlay />

        <Sidebar />
        <Skills />
      </div>
    </>
  );
}

export default App;
