import { icons } from "../constants/media";

const Skills = () => {
  const skills = [
    { src: icons.django, alt: "django logo" },
    { src: icons.fastapi, alt: "fastapi logo" },
    { src: icons.tailwind, alt: "tailwind logo" },
    { src: icons.gsap, alt: "gsap logo" },
  ];
  return (
    <section className="relative z-30 skills bg-white">
      <div className="px-8 md:px-16 py-10 font-proxima">
        <h2 className="text-5xl w-2/5 flex gap-4">
          <span className="text-8xl text-red-500">*</span>
          <span className="font-bold font-proxima">The Secret Sauce</span>
        </h2>
        <ul className="flex justify-around mt-4 text-3xl font-bold">
          <li>Django</li>
          <li>FastAPI</li>
          <li>Tailwindcss</li>
          <li>Gsap</li>
          {/* {skills.map(({ src, alt }, idx) => (
            <li key={idx} className="w-48 h-52 border rounded-[5rem]">
              <img src={src} alt={alt} className="w-4/5 h-4/5 m-auto" />
            </li>
          ))} */}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
