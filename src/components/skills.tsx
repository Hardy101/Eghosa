import { icons } from "../constants/media";

const Skills = () => {
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
  ];
  return (
    <section className="relative z-30 skills bg-white">
      <div className="px-8 md:px-16 py-16 font-proxima">
        <h2 className="text-5xl flex gap-4">
          <i className="fa-solid fa-asterisk text-red-500 my-auto text-3xl"></i>
          <span className="font-bold font-proxima">The Secret Sauce</span>
        </h2>
        <p className="text-grey-2 text-xl mt-3">Skills that power my work.</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto justify-around mt-8 text-xl font-bold">
          {skills.map(({ txt, icontype, src }, idx) => (
            <li
              key={idx}
              className="bs-3 p-4 rounded-md inline-flex items-center gap-2 my-auto"
            >
              {icontype == "flaticon" ? (
                <i className={src}></i>
              ) : (
                <img src={src} alt={`${txt} logo`} className="w-6" />
              )}
              <span>{txt}</span>
            </li>
          ))}
          {/* <li>Django</li>
          <li>FastAPI</li>
          <li>Tailwindcss</li>
          <li>Gsap</li> */}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
