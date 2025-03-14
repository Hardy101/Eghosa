import { icons } from "../constants/media";

const Skills = () => {
  return (
    <section>
      <div className="px-8 md:px-16 py-10 font-proxima">
        <h2 className="text-5xl w-2/5">
          <span className="font-bold">My Professional Background</span>
          <span className=""> Skills and Accomplishments</span>
        </h2>
        <ul className="grid grid-cols-4">
          <li>
            <img src={icons.django} alt="django logo" />
          </li>
          <li>
            <img src={icons.fastapi} alt="fastapi logo" />
          </li>
          <li>
            <img src={icons.tailwind} alt="tailwind logo" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
