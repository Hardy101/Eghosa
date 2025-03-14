import { icons } from "../constants/media";

const Skills = () => {
  return (
    <section>
      <div className="px-8 md:px-16 py-10 font-proxima">
        <h2 className="text-5xl w-2/5">
          <span className="font-bold">My Professional Background</span>
          <span className=""> Skills and Accomplishments</span>
        </h2>
        <ul className="grid gap-16 grid-cols-4 mt-16">
          <li>
            <img src={icons.django} alt="django logo"  className="w-48 border rounded-4xl px-3 py-8"/>
          </li>
          <li>
            <img src={icons.fastapi} alt="fastapi logo"  className="w-48 border rounded-4xl px-3 py-8"/>
          </li>
          <li>
            <img src={icons.tailwind} alt="tailwind logo" className="w-48 border rounded-4xl px-3 py-8" />
          </li>
          <li>
            <img src={icons.gsap} alt="tailwind logo" className="w-48 border rounded-4xl px-3 py-8" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
