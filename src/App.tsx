import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Liquidex from "./components/liquidex";
import Carousel from "./components/carousel";
import { useRef } from "react";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative h-screen">
      <Liquidex divRef={divRef} />

      <NavBar />
      <Hero />
      <Carousel />
    </div>
  );
}

export default App;
