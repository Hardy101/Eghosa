const Hero: React.FC = () => {
  return (
    <section className="font-futura flex gap-16 px-16 py-10">
      <div className="w-4/5 grid gap-12">
        <h1 className="text-9xl font-futura-bold">
          I'm <span className="text-[#450920]">Eghosa Ordia</span>
        </h1>
        <p className="text-xl">
          I am a web developer turning ideas into clean, sleek modern websites
          and mobile apps — and I’m available for work.
        </p>
        <p className="text-2xl flex gap-8">
          <a href="#">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div className="w-2/5 text-lg">
        <h2 className="text-[#450920] font-futura-bold">SELECTED PROJECTS</h2>
        <ul className="mt-6 flex flex-col divide-grey-1 divide-y-1">
          <li>
            <button className="py-2">LiquiDex</button>
          </li>
          <li>
            <button className="py-2">ABRMS</button>
          </li>
          <li>
            <button className="py-2">DexBotPro</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero