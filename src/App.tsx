import { useRef } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Liquidex from "./components/liquidex";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <NavBar />
      <Hero divRef={divRef} />

      <Liquidex divRef={divRef} />
    </>
  );
}

export default App;
