import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { icons } from "../constants/media";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const skills = [
    {
      txt: "React",
      icontype: "flaticon",
      src: "fa-brands fa-react my-auto text-blue-400",
    },
    { txt: "GSAP", icontype: "svg", src: icons.gsap },
    { txt: "Tailwind", icontype: "svg", src: icons.tailwind },
    { txt: "Fastapi", icontype: "svg", src: icons.fastapi },
    { txt: "Django", icontype: "svg", src: icons.django },
    { txt: "GitHub", icontype: "flaticon", src: "lni lni-github" },
    { txt: "Figma", icontype: "flaticon", src: "lni lni-figma" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        liRefs.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: { each: 0.15, from: "random" },
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-30 skills bg-white">
      <div className="px-8 md:px-16 py-16 font-proxima">
        <h2 className="text-5xl flex gap-4">
          <i className="fa-solid fa-asterisk text-red-500 my-auto text-3xl"></i>
          <span className="font-bold font-proxima">My Secret Sauce</span>
        </h2>
        <p className="text-grey-2 text-xl mt-3">Skills that power my work.</p>
        <ul
          ref={listRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto justify-around mt-8 text-xl font-bold"
        >
          {skills.map(({ txt, icontype, src }, idx) => (
            <li
              key={idx}
              ref={(el) => {
                liRefs.current[idx] = el;
              }}
              className="bs-2 border border-dark-3 p-4 rounded-md inline-flex items-center gap-2 my-auto"
            >
              {icontype == "flaticon" ? (
                <i className={src}></i>
              ) : (
                <img src={src} alt={`${txt} logo`} className="w-6" />
              )}
              <span>{txt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
