import { useLayoutEffect, useState } from "react";

import { SidebarProps } from "./navbar";
import gsap from "gsap";

const Overlay: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    if (isSidebarOpen) {
      setIsMounted(true);

      requestAnimationFrame(() => {
        gsap.to("#overlay", {
          opacity: 0.5,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    } else if (isMounted) {
      gsap.to("#overlay", {
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
        onComplete: () => setIsMounted(false),
      });
    }
  }, [isSidebarOpen]);

  if (!isMounted) return null;

  return (
    <div
      style={{ pointerEvents: isSidebarOpen ? "auto" : "none" }}
      onClick={() => {
        setIsSidebarOpen(false);
      }}
      id="overlay"
      className="bg-black fixed w-full inset-0 z-40"
    ></div>
  );
};

export default Overlay;
