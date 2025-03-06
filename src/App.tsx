import { useRef } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Liquidex from "./components/liquidex";
import Sidebar from "./components/sidebar";
import Overlay from "./components/overlay";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="relative bg-gradient-1">
        <NavBar />
        <Hero divRef={divRef} />

        <Liquidex divRef={divRef} />
        {/* <Overlay />
        <Sidebar /> */}
      </div>
    </>
  );
}

export default App;
