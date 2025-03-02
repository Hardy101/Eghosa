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
          <ul className="flex gap-4">
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
