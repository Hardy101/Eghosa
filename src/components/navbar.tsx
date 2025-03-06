import Logo from "../assets/img/logo.png";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="relative font-poppins z-20">
        <div className="px-4 md:px-16 py-4 flex justify-between">
          <a href="#" className="flex gap-1 my-auto">
            <span className="md:w-6 h-10 my-auto">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </span>

            <span className="my-auto text-md">Eghosa.</span>
          </a>
          <ul className="flex gap-4 my-auto text-xs font-poppins-medium">
            <li className="my-auto hidden md:block">
              <button>About</button>
            </li>
            <li className="my-auto hidden md:block">
              <button>Contact</button>
            </li>
            <li className="my-auto">
              <button className="hidden md:block px-2 py-1 rounded-md text-sm bs-2 border border-dark-blue">
                <i className="fa-solid fa-sun"></i>
              </button>
              <button className="block md:hidden px-2 py-1 rounded-md text-sm bs-2 border border-dark-blue">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
