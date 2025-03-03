import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Liquidex from "./components/liquidex";

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <NavBar />
      <Hero />
      <Liquidex />
    </div>
  );
}

export default App;
