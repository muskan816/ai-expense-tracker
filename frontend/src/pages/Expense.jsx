import DashboardLayout from "../components/layout/DashboardLayout";

const Expense = () => {
  const transactions = [
    {
      title: "Salary credited",
      category: "Income",
      amount: "50,000",
      date: "03 may",
    },
    {
      title: "Shopping ",
      category: "Food",
      amount: "10,000",
      date: "05 may",
    },
    {
      title: "Petrol",
      category: "Transport",
      amount: "5,000",
      date: "08 may",
    },
    {
      title: "K-drama",
      category: "Entertainment",
      amount: "2,000",
      date: "15 may",
    },
    {
      title: "Freelance",
      category: "Extra income",
      amount: "15,000",
      date: "20 may",
    },
  ];
  return (
    <>
      <DashboardLayout title={"Expense"}>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Add New Expense</h3>
              <form className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Expense Title
                  </label>
                  <input
                    type="text"
                    placeholder="Groceries/ Rent/ Petrol"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Enter expense amount"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Expense Category
                  </label>
                  <select className="w-full border border-gray-300 rounded-xl px-3 py-4 outline-none">
                    <option value="">Food & Dinning</option>
                    <option value="">Transport</option>
                    <option value="">Housing</option>
                    <option value="">Shopping</option>
                    <option value="">Entertainment</option>
                    <option value="">Bills</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Notes
                  </label>
                  <textarea
                    placeholder="Additional notes.."
                    rows={4}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none"
                  ></textarea>
                </div>
                <button className=" w-full py-3 bg-sky-700 text-white rounded-xl font-medium hover:bg-sky-800 transition cursor-pointer">
                  Save Expense
                </button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Expense Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500">This Month Expense</span>
                  <span className="font-semibold text-green-600">75000</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Top Category</span>
                  <span className="font-semibold">Housing</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Entries Added</span>
                  <span className="font-semibold ">12</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5 ">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold mb-6">
                  Recent Expense History
                </h3>
                <p className="text-sm text-sky-800">view all</p>
              </div>
              <div className="space-y-4">
                {transactions.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-gray-100 pb-4 last:border-0"
                  >
                    <div>
                      <h4 className="font-medium text-sm">{data.title}</h4>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold text-sm text-red-500`}>
                        {" "}
                        {data.type === "credit" ? "+" : "-"}₹ {data.amount}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{data.date}</p>
                    </div>
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

export default Expense;
