const Hero: React.FC = () => {
  const sm_links = [
    { icon: "fa-brands fa-x-twitter" },
    { icon: "fa-solid fa-envelope" },
    { icon: "fa-brands fa-github" },
  ];
  return (
    <section className="font-proxima flex flex-col md:flex-row gap-16 px-8 md:px-16 py-10">
      <div className="text-center md:text-left md:w-4/5 grid gap-8">
        <h1 className="text-5xl md:text-8xl font-bold">
          I'm Eghosa Ordia.
        </h1>
        <p className="md:text-xl">
          I am a web developer turning ideas into clean, sleek modern websites
          and mobile apps — and I’m available for work.
        </p>
        <p className="text-md flex justify-between md:justify-normal gap-8">
          {sm_links.map(({ icon }, index) => (
            <a
              key={index}
              href="#"
              className="py-2 px-3 rounded-md bs-2 border border-dark-blue"
            >
              <i className={icon}></i>
            </a>
          ))}
        </p>
      </div>
      <div className="md:w-2/5 text-md">
        <h2 className="text-grey-2 font-proxima">
          SELECTED PROJECTS
        </h2>
        <ul className="mt-4 flex flex-col divide-grey-1 divide-y-1">
          <li>
            <button className="w-full py-2 flex justify-between gap-2">
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
