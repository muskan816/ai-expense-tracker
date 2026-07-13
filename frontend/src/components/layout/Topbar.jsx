import { FaBars, FaBell } from "react-icons/fa";
const Topbar = ({ title, setIsOpen }) => {
  return (
    <>
      <div className="w-full bg-white border border-gray-100 rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 rounded-full border border-gray-100 lg:hidden items-center justify-center"
          >
            <FaBars size={14} />
          </button>
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
            <FaBell size={14} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-700 flex text-white items-center justify-center font-semibold">
              5
            </div>
            <span className="text-sm font-semibold hidden sm:block">
              SkillManthan
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
