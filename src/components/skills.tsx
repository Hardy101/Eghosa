import { icons } from "../constants/media";

const Skills = () => {
  return (
    <section className="relative z-30 skills bg-white">
      <div className="px-8 md:px-16 py-10 font-proxima">
        <h2 className="text-5xl w-2/5 flex gap-4">
          <span className="text-8xl text-red-500">*</span>
          <span className="font-bold font-proxima">The Secret Sauce</span>
        </h2>
        <ul className="flex justify-around mt-4 text-3xl font-bold">
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
