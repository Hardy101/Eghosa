import Logo from "../constants/media";
import { Dispatch } from "react";

export interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<SidebarProps> = ({ setIsSidebarOpen }) => {
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
          <ul className="flex gap-4 my-auto text-sm font-poppins-medium">
            <button
              className="bs-2 border border-dark-1 rounded-lg px-2 py-1 bg-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              Menu
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
