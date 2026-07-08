import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AiAdvisor from "./pages/AiAdvisor";
import Budget from "./pages/Budget";
import Category from "./pages/Category";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-advisor" element={<AiAdvisor />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/category" element={<Category />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/income " element={<Income />} />
        <Route path="/login " element={<Login />} />
        <Route path="/register " element={<Register />} />
        <Route path="/report " element={<Report />} />
        <Route path="/settings " element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
