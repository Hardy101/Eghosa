import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { icons } from "../constants/media";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const projects = [
  {
    id: "liquidex",
    title: "LiquiDex - Cryptocurrency Management & Trading System",
    link: "https://liquidex-beta.vercel.app/",
    link_text: "liquidex-beta.vercel.app/",
    role: "Developer",
    date: "2025",
    about:
      "LiquiDex is a cryptocurrency management and trading system that gives users simple trading signals and manage their portfolio.",
    stack: [
      { text: "FastAPI", icon: icons.fastapi },
      { text: "Tailwind CSS", icon: icons.tailwind },
    ],
    tags: ["Artificial Intelligence", "Web Development", "Automation"],
  },
  {
    id: "abrms",
    title:
      "ABRMS - Real Estate Management System for Agents & Landlords in Nigeria",
    link: "https://hardy101.github.io/ABRMS/",
    link_text: "hardy101.vercel.app/",
    role: "Developer",
    date: "2025",
    about:
      "ABRMS is a real estate management system for agents and landlords in Nigeria. It helps agents and landlords manage and automate their real estate business.",
    stack: [
      { text: "Django", icon: icons.django },
      { text: "Tailwind CSS", icon: icons.tailwind },
    ],
    tags: ["Design", "Web Design", "Real Estate"],
  },
  {
    id: "bullsh-t",
    title: "Bullshit - Anonymous Website",
    link: "https://bullsh-t.vercel.app/",
    link_text: "bullsh-t.vercel.app/",
    role: "Front-end Developer",
    date: "2025",
    about:
      "Bullsh-t is a website for people to send anonymous messages to their friends, family and acquiantances.",
    stack: [
      { text: "FastAPI", icon: icons.fastapi },
      { text: "Tailwind CSS", icon: icons.tailwind },
      { text: "GSAP", icon: icons.gsap },
    ],
    tags: ["Design", "Web Design", "Anonymous", "Animation"],
  },
];

const ProjectWrapper = () => {
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    gsap.utils.toArray<HTMLElement>(".project").forEach((project) => {
      const trigger = ScrollTrigger.create({
        trigger: project,
        start: "top top",
        end: "bottom",
        pin: true,
        pinSpacing: false,
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="projects" className="projects text-white font-poppins z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            id={project.id}
            className={`project relative ${
              index % 2 === 0 ? "bg-dark-1" : "bg-dark-2"
            } px-8 py-16 z-10`}
          >
            <p className="text-sm">
              <span className="text-white">0{index + 1}</span>
              <span className="text-grey-2">/04</span>
            </p>
            <div className="heading flex flex-col gap-y-16 md:flex-row justify-between mt-6">
              <div className="info md:w-1/2 grid gap-4">
                <h2 className="text-3xl text-white font-helvetica">
                  {project.title}
                </h2>
                <p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline text-grey-2 hover:text-white"
                  >
                    {project.link_text}
                  </a>
                </p>
                <div className="text-sm">
                  <ul className="flex gap-8">
                    <li className="flex flex-col gap-1">
                      <span className="text-grey-2">Role</span>
                      <span>{project.role}</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-grey-2">Date</span>
                      <span>{project.date}</span>
                    </li>
                  </ul>
                </div>
                <div className="project-desc grid gap-4 font-helvetica">
                  <p className="project-about">{project.about}</p>
                  <p className="project-stack flex gap-4">
                    <span className="inline-flex items-center gap-2 text-grey-2 text-xs font-poppins-bold">
                      <i className="fa-brands fa-react my-auto text-sm border border-[#2d2d2d] rounded-md p-1"></i>
                      React.js
                    </span>
                    {project.stack.map(({ text, icon }, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 text-grey-2 text-xs font-poppins-bold"
                      >
                        <img
                          src={icon}
                          alt={icon}
                          className=" bg-black w-auto h-6 rounded-md p-1 border border-[#2d2d2d]"
                        />
                        {text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="tags text-[#727D73] mb-auto">
                <ul className="flex flex-col gap-3">
                  {project.tags.map((tag, index) => (
                    <li key={index} className="project-li">
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectWrapper;
