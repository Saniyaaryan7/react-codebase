import {BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/admin/AdminLogin";
import Dashboard from "./Pages/admin/Dashboard";
import Cakes from "./Pages/admin/Cakes";
import AddCake from "./Pages/admin/AddCake";
import SuperCategory from "./Pages/admin/SuperCategory/superCategory";
import AddSuperCategory from "./Pages/admin/SuperCategory/AddSuperCategory";

function App() {
  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/cakes" element={<Cakes />} />
      <Route path="/admin/cakes/add" element={<AddCake />} />
      <Route path="/admin/super-category" element={<SuperCategory />} />
    <Route path="/admin/add-super-category" element={<AddSuperCategory />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
