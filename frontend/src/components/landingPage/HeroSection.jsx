import { FaChartPie, FaPiggyBank, FaRobot } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";

const HeroSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-[3px] text-sky-800 ">
            AI powered personal finance platform
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Track Money Samrtly. Save better with AI.
          </h2>
          <p className="text-gray-600 text-lg leading-8 mb-8 max-w-xl">
            IntelliSense Ai helps you manage income, expenses, budgets, reports
            and financial goals while AI continously analyzes your habits to
            uncover money waste and saving opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="px-7 py-4 bg-sky-700 text-white rounded-lg text-sm font-medium hover:bg-sky-800 transition cursor-pointer">
              Create Free ACccount -&gt;
            </button>

            <button className="px-7 py-4 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
              Explore Features
            </button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-50 font-medium">
            <span>Income & Expense Tracking</span>
            <span>AI financial Advisory</span>
            <span>Monthly Reports</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
            <FaChartPie className="text-sky-800 text-2xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Expense Analytics</h3>
            <p className="text-gray-500 text-sm">
              Visual spending category breakdown with charts.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
            <FaPiggyBank className="text-sky-800 text-2xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Save Power</h3>
            <p className="text-gray-500 text-sm">
              Goal based monthly smart saving discipline.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
            <FaRobot className="text-sky-800 text-2xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">AI Insights</h3>
            <p className="text-gray-500 text-sm">
              AI detects money leakage and wasteful habits.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
            <BiSolidReport className="text-sky-800 text-2xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Monthly Reports</h3>
            <p className="text-gray-500 text-sm">
              Clear financial health summary every month.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
