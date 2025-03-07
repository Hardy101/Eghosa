import gsap from "gsap";

import { SidebarProps } from "./navbar";
import { useEffect } from "react";

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to("#sidebar", { x: 0, duration: 1, ease: "power3.out" });
    } else {
      gsap.to("#sidebar", { x: "100%", duration: 1, ease: "power3.in" });
    }
  }, [isSidebarOpen]);
  console.log(isSidebarOpen);

  return (
    <aside
      id="sidebar"
      className={`fixed p-4 md:p-8 w-full md:w-1/2 h-full top-0 right-0 bg-white text-black heading z-50`}
    >
      <div className=" flex justify-between mb-4">
        <span className="inline-block w-5 bg-gray-300 h-5 rounded-full my-auto"></span>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="my-auto border rounded-2xl font-proxima-bold text-sm px-2"
        >
          Close
        </button>
      </div>

      <div className="body text-2xl font-medium text-justify">
        I am a full-stack web developer turning ideas into clean, sleek modern
      </div>
    </aside>
  );
};

export default Sidebar;
