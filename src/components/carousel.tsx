import Marquee from "react-fast-marquee";

const messages = [
  "Based in Benin City, Nigeria",
  "Open for full-time roles",
  "Open to Freelance & Collaboration",
  "Remote and Onsite Friendly",
  "Driven by curiosity & code",
];

const Carousel = () => {
  return (
    <div className="fixed bottom-0 w-full py-2 bg-light-green font-proxima">
      <Marquee>
        <ul className="px-8 flex gap-8 list-disc">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default Carousel;
