import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import fastapi from "../assets/icons/FastAPI.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const ProjectWrapper = () => {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".project",
      start: "top top",
      // end: "+=300px",
      pinSpacing: false,
      pin: true,
      markers: true,
    });

    // gsap.to("#abrms", {
    //   yPercent: -100,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "#projects",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });
    return () => trigger.kill();
  }, []);

  return (
    <>
      <section id="projects" className="projects text-white font-poppins z-20">
        <div
          id="liquidex"
          className="project relative bg-dark-1 px-8 py-16 z-10"
        >
          <p className="text-sm">
            <span className="text-white">01</span>
            <span className="text-grey-2">/04</span>
          </p>
          <div className="heading flex flex-col gap-y-16 md:flex-row justify-between mt-6">
            <div className="info md:w-1/2 grid gap-4">
              <h2 className="text-3xl text-white font-helvetica">
                LiquiDex - Cryptocurrency Management & Trading System
              </h2>
              <p>
                <a
                  href="https://liquidex-beta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-grey-2 hover:text-white"
                >
                  liquidex-beta.vercel.app
                </a>
              </p>
              <div className="text-sm">
                <ul className="flex gap-8">
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Role</span>
                    <span>Developer</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Date</span>
                    <span>2025</span>
                  </li>
                </ul>
              </div>
              <div className="project-desc grid gap-4 font-helvetica">
                <p className="project-about">
                  LiquiDex is a cryptocurrency management and trading system
                  that gives users simple trading signals and manage their
                  portfolio.
                </p>
                <p className="project-stack flex gap-4">
                  <span className="inline-flex items-center gap-2 text-grey-2 text-xs font-poppins-bold">
                    <i className="fa-brands fa-react my-auto text-sm bg-black border border-grey-[#2d2d2d] rounded-md p-1"></i>
                    React.js
                  </span>
                  <span className="inline-flex items-center gap-2 text-grey-2 text-xs font-poppins-bold">
                    <img
                      src={fastapi}
                      alt="fastapi logo"
                      className=" bg-black border border-grey-[#2d2d2d] w-auto h-6 rounded-md p-1"
                    />
                    FastAPI
                  </span>
                </p>
              </div>
            </div>
            <div className="tags text-[#727D73] mb-auto">
              <ul className="flex flex-col gap-3">
                <li className="project-li">
                  <span>Artificial Intelligence</span>
                </li>
                <li className="project-li">
                  <span>Web Development</span>
                </li>
                <li className="project-li">
                  <span>Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="abrms"
          className="project relative bg-grey-3 px-8 py-16 z-10"
        >
          <p className="text-sm">
            <span className="text-white">01</span>
            <span className="text-grey-2">/04</span>
          </p>
          <div className="heading flex flex-col gap-y-16 md:flex-row justify-between mt-6">
            <div className="info md:w-1/2 grid gap-4">
              <h2 className="text-3xl text-white font-helvetica">
                LiquiDex - Cryptocurrency Management & Trading System
              </h2>
              <p>
                <a
                  href="https://liquidex-beta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-grey-2 hover:text-white"
                >
                  liquidex-beta.vercel.app
                </a>
              </p>
              <div className="text-sm">
                <ul className="flex gap-8">
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Role</span>
                    <span>Developer</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Date</span>
                    <span>2025</span>
                  </li>
                </ul>
              </div>
              <div className="project-desc grid gap-4 font-helvetica">
                <p className="project-about">
                  LiquiDex is a cryptocurrency management and trading system
                  that gives users simple trading signals and manage their
                  portfolio.
                </p>
                <p className="project-stack flex gap-4">
                  <span className="inline-flex items-center gap-2 text-grey-2 text-xs font-poppins-bold">
                    <i className="fa-brands fa-react my-auto text-sm bg-black border border-grey-[#2d2d2d] rounded-md p-1"></i>
                    React.js
                  </span>
                  <span className="inline-flex items-center gap-2 text-grey-2 text-xs font-poppins-bold">
                    <img
                      src={fastapi}
                      alt="fastapi logo"
                      className=" bg-black border border-grey-[#2d2d2d] w-auto h-6 rounded-md p-1"
                    />
                    FastAPI
                  </span>
                </p>
              </div>
            </div>
            <div className="tags text-[#727D73] mb-auto">
              <ul className="flex flex-col gap-3">
                <li className="project-li">
                  <span>Artificial Intelligence</span>
                </li>
                <li className="project-li">
                  <span>Web Development</span>
                </li>
                <li className="project-li">
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
