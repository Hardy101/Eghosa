import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DivRef {
  divRef: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<DivRef> = ({ divRef }) => {
  const sm_links = [
    { icon: "fa-brands fa-x-twitter" },
    { icon: "fa-solid fa-envelope" },
    { icon: "fa-brands fa-github" },
  ];

  const showProject = () => {
    gsap.to(divRef.current, {
      y: "0",
    });
  };
  return (
    <section className="min-h-screen font-proxima flex flex-col md:flex-row gap-24 px-8 md:px-16 py-10">
      <div className="text-center md:text-left md:w-3/5 grid gap-8 md:mt-10 mb-auto">
        <h1 className="text-5xl md:text-8xl font-bold my-auto">I'm Eghosa Ordia.</h1>
        <p className="md:text-xl my-auto">
          I am a full-stack web developer turning ideas into clean, sleek modern
          websites and web apps — and I’m available for work.
        </p>
        <p className="text-md flex justify-between md:justify-normal gap-8">
          {sm_links.map(({ icon }, index) => (
            <a
              key={index}
              href="#"
              className="py-2 px-3 rounded-md bs-2 border border-dark-blue my-auto"
            >
              <i className={icon}></i>
            </a>
          ))}
        </p>
      </div>
      <div className="md:w-2/5 text-md">
        <h2 className="text-grey-2 font-proxima">SELECTED PROJECTS</h2>
        <ul className="mt-4 flex flex-col divide-grey-3 divide-y-1">
          <li>
            <button
              onClick={showProject}
              className="w-full py-2 flex justify-between gap-2"
            >
              <span className="my-auto">LiquiDex</span>
              <i className="fa-solid fa-arrow-right my-auto text-sm"></i>
            </button>
          </li>
          <li>
            <button className="w-full py-2 flex justify-between gap-2">
              <span className="my-auto">ABRMS</span>
              <i className="fa-solid fa-arrow-right my-auto text-sm"></i>
            </button>
          </li>
          <li>
            <button className="w-full py-2 flex justify-between gap-2">
              <span className="my-auto">DexBotPro</span>
              <i className="fa-solid fa-arrow-right my-auto text-sm"></i>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
