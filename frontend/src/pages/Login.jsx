import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f6f7fb] flex items-center justify-center px-5 py-10">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
          <div className="hidden lg:block">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Manage Every Expense With Complete Confidence
            </h1>
            <p className="text-gray-500 text-lg leading-8 max-w-xl">
              Access your smart dashboard, track all transactions, view monthly
              reports and get AI-powered saving insights in one place.
            </p>
          </div>

          <div className="max-w-md w-full mx-auto">
            <div className="w-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-gray-500 text-lg leading-8 max-w-xl mb-8">
                Login To access your financial dashboard
              </p>
              <form className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                <button className=" w-full py-3 bg-sky-700 text-white rounded-xl font-medium hover:bg-sky-800 transition cursor-pointer">
                  Login Account
                </button>
                <p className="text-sm text-gray-500 mt-6 text-center">
                  {" "}
                  Don't have an account? <Link to='/register' className="text-sky-700 font-medium">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
