const NavBar: React.FC = () => {
  return (
    <>
      <nav className="font-futura">
        <div className="px-16 py-8 flex justify-between">
          <a href="#" className="flex gap-1">
            <span className="w-3 h-3 rounded-full bg-gray-600 my-auto"></span>
            <span className="my-auto">Eghosa.</span>
          </a>
          <ul className="flex gap-4">
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Get in touch</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
