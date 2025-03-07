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
      className={`fixed p-4 md:p-8 w-full md:w-1/2 h-full top-0 right-0 bg-white text-black heading z-50 overflow-y-auto`}
    >
      <div className=" flex justify-between mb-4">
        <span className="inline-block w-5 bg-gray-300 h-5 rounded-full my-auto"></span>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="my-auto border rounded-2xl font-proxima-bold text-sm py-1 px-4"
        >
          Close
        </button>
      </div>

      <div className="body text-xl grid gap-8 font-poppins">
        <span className="block font-poppins-medium text-3xl">
          Hello there 👋
        </span>
        <p>
          My name is <span className="font-poppins-medium">Eghosa Ordia </span>
          and I am a full-stack web developer with a passion for creating
          <span className="font-poppins-medium"> meaningful </span>
          and responsive web applications. I have a strong foundation in both
          front-end and back-end technologies, though i am more proficient in
          frontend. I am always looking for opportunities to learn and grow as a
          developer.
        </p>
        <p>
          <h3 className="font-poppins-bold mb-2">
            Creating Impactful Projects
          </h3>
          <span className="text-grey-2 text-base">
            I am passionate about creating web applications that make a
            difference. Case in point of my projects. I believe that technology
            can be used to solve some of the world's most pressing issues and I
            am always looking for opportunities to work on projects that have a
            positive impact on society.
          </span>
        </p>
        <p>
          <h3 className="font-poppins-bold mb-2">
            On the hunt for exciting opportunities
          </h3>
          <span className="text-grey-2 text-base">
            I'm on the lookout for exciting opportunities to work on projects
            that challenge me and allow me to grow as a developer.
          </span>
          <span className="mt-4 block text-grey-2 text-base">
            If you have a project that you think I would be a good fit for, feel
            free to reach out to me. I am always open to new opportunities and I
            would love to hear from you.
          </span>
        </p>
        <p className="text-base flex flex-wrap gap-4">
          <a href="https://x.com/ordia_codes" target="_blank" rel="noreferrer">
            𝕏
          </a>
          <a
            href="https://www.linkedin.com/in/eghosa-ordia-13a888240/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:eghordia130@gmail.com">eghordia130@gmail.com</a>
          <a href="">Resume</a>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
