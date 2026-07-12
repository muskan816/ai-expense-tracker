import { FaWallet, FaRobot, FaChartLine, FaBullseye  } from "react-icons/fa";
import { BiSolidReport  } from "react-icons/bi";
import { BsStack  } from "react-icons/bs";
const FeaturesSection = () => {
    const features = [
        {
            icon: <FaWallet/>,
            title: "Everything You Need For Smarter Control",
            desc: "IntelliSpend AI combines expense management, savings discipline and intelligent AI analytics into one easy dashboard."
        },
         {
            icon: <FaRobot/>,
            title: "AI Financial Advisory",
            desc: "Recieve smart montly analysis, saving opportunities, money waste alerts and AI generated budget suggestions."
        },
         {
            icon: <FaChartLine/>,
            title: "Budget & Categroy Insights",
            desc: "Understand where your money goes with category wise spending, limits, overspending warnings and montly control."
        },
         {
            icon: <FaBullseye/>,
            title: "Financial Goal Tracking",
            desc: "Create saving goals for emergency fund, gadgets, vacations or investments and monitor your progress visually."
        },
         {
            icon: <BiSolidReport/>,
            title: "Professional Monthly Reports",
            desc: "Generate financial summaries with total income, total expense, net savings and monthly behavioural observations."
        },
         {
            icon: <BsStack/>,
            title: "Unified Financial Dashboard",
            desc: "Everyhting form transactions or AI chat advisory stays in one responsive and centralized dashboard experience."
        },
    ]
  return (
    <>
      <section id="features" className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Everything You Need For Smarter Control
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-8">
            IntelliSpend AI combines expense management, savings discipline and
            intelligent AI analytics into one easy dashboard.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((data, i)=>(
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-xl bg-[#f4f1ff] text-sky-800 flex items-center justify-center text-xl mb-5 ">
              {data.icon}
            </div>
            <h3 className="font-semibold text-lg mb-3">{data.title}</h3>
            <p className="text-gray-500 text-sm leading-7">{data.desc}</p>
          </div>
            ))}
          
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
