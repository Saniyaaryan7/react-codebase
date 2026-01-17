import {BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/admin/AdminLogin";
import Dashboard from "./Pages/admin/Dashboard";
import Cakes from "./Pages/admin/Cakes";


function App() {
  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/cakes" element={<Cakes />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
