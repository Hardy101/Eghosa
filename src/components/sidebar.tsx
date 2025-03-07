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

      <div className="body text-2xl ">
        <span className="block">Hello there 👋</span>
        <p className="mt-2">
          My name is <span className="font-poppins-medium">Eghosa Ordia</span>{" "}
          and I am a full-stack web developer with a passion for creating{" "}
          <span className="font-poppins-medium">meaningful </span>
          and responsive web applications. I have a strong foundation in both
          front-end and back-end technologies, though i am more proficient in
          frontend. I am always looking for opportunities to learn and grow as a
          developer.
        </p>
        <p className="mt-8">
          <h3 className="font-bold mb-2">Creating Impactful Projects</h3>
          <span className="text-grey-2 text-xl">
            I am passionate about creating web applications that make a
            difference. Case in point of my projects. I believe that technology
            can be used to solve some of the world's most pressing issues and I
            am always looking for opportunities to work on projects that have a
            positive impact on society.
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
