import {
  FaEdit,
  FaLaptop,
  FaMoneyBillWave,
  FaMoneyCheck,
  FaShoppingBag,
  FaWarehouse,
} from "react-icons/fa";
import DashboardLayout from "../components/layout/DashboardLayout";
import { IoFastFoodSharp } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Category = () => {
  const categories = [
    {
      name: "Food & Dining",
      type: "Expense",
      limit: "10000",
      icon: <IoFastFoodSharp />,
    },
    {
      name: "Transport",
      type: "Expense",
      limit: "5000",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Shopping",
      type: "Expense",
      limit: "8000",
      icon: <FaShoppingBag />,
    },
    { name: "Housing", type: "Expense", limit: "20000", icon: <FaWarehouse /> },
    {
      name: "Entertainment",
      type: "Expense",
      limit: "4000",
      icon: <FaLaptop />,
    },
    { name: "Salary", type: "Income", limit: "", icon: <FaMoneyCheck /> },
  ];
  return (
    <>
      <DashboardLayout title="Category">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold mb-6">Add New Category</h3>
                <form className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Category Name
                    </label>
                    <input
                      type="text"
                      placeholder="Food/ Transport/ Bills"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Category Type
                    </label>
                    <select className="w-full border border-gray-300 rounded-xl px-3 py-4 outline-none">
                      <option value="">Income</option>
                      <option value="">Expense</option>
                      <option value="">Budget</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Monthly Limit (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter monthly limit"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                  <button className=" w-full py-3 bg-sky-700 text-white rounded-xl font-medium hover:bg-sky-800 transition cursor-pointer">
                    Save Category
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Manage Categories</h3>
                <p className="text-sm text-gray-500"> {categories.length} Categories</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {categories.map((data, index) => (
                  <div
                    key={index}
                    className="border border-gray-500 rounded-2xl p-5 "
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#f4f1ff] text-sky-800 flex items-center justify-center">
                        {data.icon}
                      </div>
                      <div className="flex gap-3 text-gray-500">
                        <button>
                          <FaEdit />
                        </button>
                        <button>
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{data.title}</h4>
                    <p className="text-gray-500">Type: {data.type}</p>
                    <p className="text-gray-500">Monthly limit: {data.limit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Category;
