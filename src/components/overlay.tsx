import { useEffect } from "react";

import { SidebarProps } from "./navbar";
import gsap from "gsap";

const Overlay: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to("#overlay", { opacity: 0.5, duration: 0.8, ease: "power3.out", scale: '100%' });
    } else {
      gsap.to("#overlay", { opacity: 0, duration: 0.8, ease: "power3.in" });
    }
  }, [isSidebarOpen]);
  return (
    <div
      style={{ pointerEvents: isSidebarOpen ? "auto" : "none" }}
      onClick={() => {
        setIsSidebarOpen(false);
      }}
      id="overlay"
      className="bg-black fixed w-full inset-0 z-40 scale-0"
    ></div>
  );
};

export default Overlay;
