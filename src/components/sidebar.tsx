const Sidebar = () => {
  return (
    <aside>
      <div className="fixed h-full bg-white heading flex justify-between z-50">
        <span className="inline-block w-4 h-4 my-auto"></span>
        <button className="my-auto border rounded-2xl font-proxima-bold">
          Close
        </button>
      </div>

      <div className="body">
        I am a full-stack web developer turning ideas into clean, sleek modern
      </div>
    </aside>
  );
};

export default Sidebar;
