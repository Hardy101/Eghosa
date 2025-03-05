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
  return (
    <div className="absolute bottom-0 w-full py-2 bg-light-green font-proxima">
      <ul className="flex gap-8 list-disc">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
