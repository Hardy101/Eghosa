import { useRef } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Liquidex from "./components/liquidex";
import Sidebar from "./components/sidebar";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="relative">
        <NavBar />
        <Hero divRef={divRef} />

        <Liquidex divRef={divRef} />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
