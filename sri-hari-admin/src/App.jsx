import {BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/admin/AdminLogin";
import Dashboard from "./Pages/admin/Dashboard";
import Cakes from "./Pages/admin/Cake/Cakes";
import AddCake from "./Pages/admin/Cake/AddCake";
import EditCake from "./Pages/admin/Cake/EditCake";
import SuperCategory from "./Pages/admin/SuperCategory/superCategory";
import AddSuperCategory from "./Pages/admin/SuperCategory/AddSuperCategory";
import Category from "./Pages/admin/Category/category";
import AddCategory from "./Pages/admin/Category/AddCategory";

function App() {
  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/cakes" element={<Cakes />} />
      <Route path="/admin/cakes/add" element={<AddCake />} />
      <Route path="/admin/cakes/edit/:id" element={<EditCake />} />
      <Route path="/admin/super-category" element={<SuperCategory />} />
    <Route path="/admin/add-super-category" element={<AddSuperCategory />} />
    <Route path="/admin/category" element={<Category />} />
<Route path="/admin/add-category" element={<AddCategory />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
