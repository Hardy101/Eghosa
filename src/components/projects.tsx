import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectWrapper = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#liquidex", { yPercent: 100 }).from("#abrms", { yPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#projects",
      start: "top 20%",
      end: "bottom 80%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  }, []);
  return (
    <>
      <section
        id="projects"
        className="projects relative text-white font-poppins z-20"
      >
        <div id="liquidex" className="bg-dark-1 px-8 py-16">
          <p className="text-sm">
            <span className="text-white">01</span>
            <span className="text-grey-2">/04</span>
          </p>
          <div className="heading flex flex-col gap-y-16 md:flex-row justify-between mt-6">
            <div className="info md:w-1/2 grid gap-4">
              <h2 className="text-3xl text-white font-helvetica">
                LiquiDex - Cryptocurrency Management & Trading System
              </h2>
              <div className="mt-8">
                <ul className="flex gap-8">
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Project</span>
                    <span className="text-sm">LiquiDex</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Role</span>
                    <span className="text-sm">Developer</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Date</span>
                    <span className="text-sm">2025</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tags text-[#727D73] mb-auto">
              <ul className="flex flex-row flex-wrap md:flex-col gap-3">
                <li className="project-li my-auto">
                  <span>Artificial Intelligence</span>
                </li>
                <li className="project-li my-auto">
                  <span>Web Development</span>
                </li>
                <li className="project-li my-auto">
                  <span>Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="abrms" className="bg-dark-1 px-8 py-16">
          <p className="text-sm">
            <span className="text-white">02</span>
            <span className="text-grey-2">/04</span>
          </p>
          <div className="heading flex flex-col gap-y-16 md:flex-row justify-between mt-6">
            <div className="info md:w-1/2 grid gap-4">
              <h2 className="text-3xl text-white font-helvetica">
                ABRMS - Real Estate Management System
              </h2>
              <div className="mt-8">
                <ul className="flex gap-8">
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Project</span>
                    <span className="text-sm">Real Estate</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Role</span>
                    <span className="text-sm">Backend developer</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Date</span>
                    <span className="text-sm">2024</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tags text-[#727D73] mb-auto">
              <ul className="flex flex-row flex-wrap md:flex-col gap-3 text-xs">
                <li className="project-li my-auto">
                  <span>Artificial Intelligence</span>
                </li>
                <li className="project-li my-auto">
                  <span>Web Development</span>
                </li>
                <li className="project-li my-auto">
                  <span>Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectWrapper;
