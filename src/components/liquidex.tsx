interface DivRef {
  divRef: React.RefObject<HTMLDivElement | null>;
}

const Liquidex: React.FC<DivRef> = ({ divRef }) => {
  return (
    <>
      <section
        ref={divRef}
        className="fixed top-full w-full h-full font-proxima text-white z-30"
      >
        <div className="h-full bg-dark-1 px-8 py-16">
          <p className="text-sm">
            <span className="text-white">01</span>
            <span className="text-grey-2">/04</span>
          </p>
          <div className="heading flex justify-between mt-6">
            <div className="info w-1/2 grid gap-4">
              <h2 className="text-3xl text-white font-proxima">
                LiquiDex - Cryptocurrency Management & Trading System
              </h2>
              <div className="mt-8">
                <ul className="flex gap-8">
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Project</span>
                    <span className="text-sm">LiquiDex</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Role</span>
                    <span className="text-sm">Developer</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-grey-2">Date</span>
                    <span className="text-sm">2025</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tags text-[#727D73] mb-auto">
              <ul className="flex flex-col gap-3 text-sm font-proxima">
                <li className="project-li">
                  <span>Artificial Intelligence</span>
                </li>
                <li className="project-li">
                  <span>Web Development</span>
                </li>
                <li className="project-li">
                  <span>Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Liquidex;
