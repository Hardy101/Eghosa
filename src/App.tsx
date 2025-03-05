import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Liquidex from "./components/liquidex";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="relative h-screen">
      <Liquidex />

      <NavBar />
      <Hero />
      <Carousel />
    </div>
  );
}

export default App;
