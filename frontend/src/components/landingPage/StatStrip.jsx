const StatStrip = () => {
  const stats = [
    { val: "10k +", label: "Transaction Tracked" },
    { val: "92%", label: "Users Improved Savings" },
    { val: "24/7", label: "AI Financial Monitoring " },
    { val: "100%", label: "Responsive Dashboard Experience" },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((data, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="text-3xl font-bold text-sky-800 mb-2 ">
                {data.val}
              </h3>
              <p className="text-gray-500">{data.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatStrip;