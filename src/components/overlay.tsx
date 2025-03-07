import { SidebarProps } from "./navbar";

const Overlay: React.FC<SidebarProps> = ({ setIsSidebarOpen }) => {
  return (
    <div
      onClick={() => {
        setIsSidebarOpen(false);
      }}
      className="bg-black opacity-50 fixed w-full inset-0 z-40"
    ></div>
  );
};

export default Overlay;
