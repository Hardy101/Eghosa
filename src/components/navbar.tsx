import Logo from "../assets/img/logo.png";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="font-futura">
        <div className="px-16 py-8 flex justify-between">
          <a href="#" className="flex gap-1">
            <span className="w-6 h-10 my-auto">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </span>

            <span className="my-auto">Eghosa.</span>
          </a>
          <ul className="flex gap-4 my-auto">
            <li className="my-auto">
              <button>About</button>
            </li>
            <li className="my-auto">
              <button>Contact</button>
            </li>
            <li className="my-auto ml-8">
              <button className="px-2 py-1 rounded-md bs-1">
                <i className="fa-solid fa-sun"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
