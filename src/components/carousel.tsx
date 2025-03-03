import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const messages = [
  "Based in Benin City, Nigeria",
  "Open for full-time roles",
  "Open to Freelance & Collaboration",
  "Remote and Onsite Friendly",
  "Driven by curiosity & code",
];

const Carousel = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return
    const items = container.children;

    for (let i = 0; i < items.length; i++) {
      const clone = items[i].cloneNode(true);
      container.appendChild(clone);
    }

    gsap.to(container, {
      x: "-50%",
      ease: "none",
      duration: 15,
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <div className="absolute bottom-0 w-full py-2 bg-light-green font-proxima">
      <ul ref={containerRef} className="flex gap-8 list-disc">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
