import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-sky-800 ">IntelliSpend</h1>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <a href="#features" className="hover:text-sky-800">Features</a>
                <a href="#howitworks" className="hover:text-sky-800">How It Works</a>
                <a href="#aiadvisor" className="hover:text-sky-800">Ai Advisor</a>
                <a href="#reviews" className="hover:text-sky-800">Reviews</a>
            </nav>
            <div className="flex items-center gap-3">
                <Link to='/login' className="px-5 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-100 transition cursor-pointer">Login</Li>
                <Link to='/register' className="px-5 py-2 bg-sky-700 text-white rounded-xl text-sm font-medium hover:bg-sky-800 transition cursor-pointer">Get Started</Li>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
