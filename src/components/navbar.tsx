import { useSidebarStore } from "../store/useSidebarStore";

// export interface SidebarProps {
//   isSidebarOpen: boolean;
//   setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
// }

const NavBar: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore();

  return (
    <>
      <nav className="relative font-poppins z-20">
        <div className="px-4 md:px-16 py-4 flex justify-between">
          <a href="#" className="flex gap-2 my-auto">
            <span className="w-6 h-auto my-auto rounded-full overflow-hidden">
              <img
                src="https://miro.medium.com/v2/resize:fill:72:72/1*bB2uSNQXXCWZPU93kW2IBw.jpeg"
                alt="face"
                className="grayscale"
              />
            </span>

            <span className="my-auto text-sm">Eghosa.</span>
          </a>
          <ul className="flex gap-4 my-auto text-sm font-poppins-medium">
            <button
              className={`${isSidebarOpen} bs-2 border border-dark-1 rounded-lg px-2 py-1 bg-white`}
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
