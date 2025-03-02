import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="font-futura flex gap-16 p-16">
        <div className="w-4/5 grid gap-12">
          <h1 className="text-9xl font-futura-bold">I'm Eghosa Ordia</h1>
          <p className="text-xl">
            I develop website and apps. Available for work
          </p>
        </div>
        <div className="w-2/5 text-lg">
          <h2 className="text-[#8D99AE] font-futura-bold text-sm">SELECTED PROJECTS</h2>
          <ul className="mt-6 flex flex-col divide-grey-1 divide-y-1">
            <li>
              <button className="py-2">LiquiDex</button>
            </li>
            <li>
              <button>LiquiDex</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
