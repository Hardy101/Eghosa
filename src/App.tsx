import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ProjectWrapper from "./components/projects";

function App() {
  return (
    <>
      <div className="relative bg-gradient-1 overflow-x-hidden">
        <NavBar />
        <Hero />

        <ProjectWrapper />
        {/* <Overlay />
        <Sidebar /> */}
      </div>
    </>
  );
}

export default App;
