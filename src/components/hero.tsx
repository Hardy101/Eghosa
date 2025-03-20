import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef, useEffect } from "react";

import Carousel from "./carousel";

gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (id: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#${id}` },
    ease: "power2.inOut",
  });
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sm_links = [
    {
      icon: "fa-brands fa-x-twitter",
      path: "https://x.com/ordia_codes",
    },
    { icon: "fa-solid fa-envelope", path: "mailto:eghordia130@gmail.com" },
    { icon: "fa-brands fa-github", path: "https://www.github.com/Hardy101" },
  ];
  const projects = [
    { id: "liquidex", text: "Liquidex" },
    { id: "abrms", txt: "ABRMS" },
    { id: "bullsh-t", txt: "bullsh-t" },
  ];

  useEffect(() => {
    if (containerRef.current) {
      const elements = Array.from(containerRef.current.children);

      gsap.fromTo(
        elements,
        { opacity: 0, y: 100, rotate: 8 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.6)",
          stagger: {
            each: 0.3,
            from: "start",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen font-proxima flex flex-col md:flex-row gap-24 px-8 md:px-16 py-10">
      <div
        ref={containerRef}
        className="text-center md:text-left md:w-3/5 flex flex-col gap-8 mt-16 md:mt-0"
      >
        <h1 className="text-5xl md:text-8xl font-bold">I'm Eghosa Ordia.</h1>
        <p className="md:text-xl">
          I am a full-stack web developer turning ideas into clean, sleek modern
          websites and web apps — and I’m available for work.
        </p>
        <ul className="text-md flex justify-around md:justify-normal gap-8">
          {sm_links.map(({ icon, path }, index) => (
            <li
              className="py-2 px-3 rounded-md bs-2 border border-dark-blue my-auto 
            transition-all duration-300 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:bg-white hover:text-dark-3"
            >
              <a key={index} href={path} target="_blank" rel="noreferrer">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-2/5 text-md">
        <h2 className="text-grey-2 ">SELECTED PROJECTS</h2>
        <ul className="mt-4 flex flex-col divide-grey-3 divide-y-1 font-poppins-medium">
          <li className="relative group">
            <span className="absolute bottom-0 left-0 h-px bg-grey-2 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
            <button
              onClick={() => scrollToSection("liquidex")}
              className="w-full py-2 flex justify-between gap-2"
            >
              <span className="my-auto">LiquiDex</span>
              <i className="fa-solid fa-arrow-right my-auto text-sm -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></i>
            </button>
          </li>
          <li className="relative group">
            <span className="absolute bottom-0 left-0 h-px bg-grey-2 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
            <button
              onClick={() => scrollToSection("abrms")}
              className="w-full py-2 flex justify-between gap-2"
            >
              <span className="my-auto">ABRMS</span>
              <i className="fa-solid fa-arrow-right my-auto text-sm -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></i>
            </button>
          </li>
          <li className="relative group border-b border-grey-3">
            <span className="absolute bottom-0 left-0 h-px bg-grey-2 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
            <button
              onClick={() => scrollToSection("bullsh-t")}
              className="w-full py-2 flex justify-between gap-2"
            >
              <span className="my-auto">Bullsh-t</span>
              <i className="fa-solid fa-arrow-right my-auto text-sm -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></i>
            </button>
          </li>
        </ul>
      </div>
      <Carousel />
    </section>
  );
};

export default Hero;
