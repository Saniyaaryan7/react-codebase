import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/Topbar";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Cakes() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();


  const handleDelete = (cakeName) => {
    if (window.confirm(`Are you sure you want to delete "${cakeName}"?`)) {
      alert("Cake deleted successfully (demo)");
    }
  };

  const cakes = [
    {
      id: 1,
      cakeId: "#sd897",
      name: "Butter Scotch 1 Pond",
      price: 768,
      strike: 876,
      img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fHww",
      status: "Active",
    },
    {
      id: 2,
      cakeId: "IQ0001",
      name: "Kitkat and Gems cake",
      price: 599,
      strike: 699,
      img: "https://ukraineflora.com/upload/products/115/cake-happy-birthday.jpeg",
      status: "Active",
    },
    {
      id: 3,
      cakeId: "1",
      name: "Butter stoch",
      price: 400,
      strike: 350,
      img: "https://tse1.mm.bing.net/th/id/OIP.RTaO4UwkN9yE-AnLyHsLwwHaHa?cb=defcache2defcache=1&w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",
      status: "InActive",
    },
    {
      id: 4,
      cakeId: "40",
      name: "Choco",
      price: 250,
      strike: 200,
      img: "https://tse1.mm.bing.net/th/id/OIP.tqyhr3Sva1luYASQYoGGhgAAAA?cb=defcache2defcache=1&w=360&h=360&rs=1&pid=ImgDetMain&o=7&rm=3",
      status: "InActive",
    },
  ];

  const filtered = cakes.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#EFE6E2] overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Right */}
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar toggle={() => setOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 className="text-2xl font-semibold text-[#4B2E39]">
              Cakes
            </h1>
<button
  onClick={() => navigate("/admin/cakes/add")}
  className="flex items-center gap-2 bg-[rgb(53,111,132)] hover:bg-[rgb(25,79,99)]
           text-white px-4 py-2 rounded-full font-medium"
>
  <Plus size={18} />
  Add New Cake
</button>

          </div>

          {/*------------ Table Card ------------------*/}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

            {/*-------------- Search -------------------*/}
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2 
                           text-sm bg-white
                           focus:outline-none focus:ring-2 focus:ring-[#1F4E5F]"
              />
            </div>

            {/* ============================= Table ================================*/}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="py-3 px-3 text-left">Sr No.</th>
                    <th className="py-3 px-3 text-left">Cake ID</th>
                    <th className="py-3 px-3 text-left">Name</th>
                    <th className="py-3 px-3 text-left">Price</th>
                    <th className="py-3 px-3 text-left">Strike Price</th>
                    <th className="py-3 px-3 text-left">Image</th>
                    <th className="py-3 px-3 text-left">Status</th>
                    <th className="py-3 px-3 text-left">Action</th>
                  </tr>
                </thead>

                <tbody className="text-gray-800">
                  {filtered.map((cake, index) => (
                    <tr
                      key={cake.id}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >
                      <td className="py-3 px-3">{index + 1}</td>
                      <td className="py-3 px-3 font-medium">
                        {cake.cakeId}
                      </td>
                      <td className="py-3 px-3 font-medium">
                        {cake.name}
                      </td>
                      <td className="py-3 px-3">Rs. {cake.price}</td>
                      <td className="py-3 px-3">Rs. {cake.strike}</td>
                      <td className="py-3 px-3">
                        <img
                          src={cake.img}
                          alt=""
                          className="w-14 h-14 object-cover rounded-lg border"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium
                          ${
                            cake.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {cake.status}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                 <div className="flex items-center gap-3">
    
    {/* =================================  Edit  =========================== */}
    <button
      type="button"
      title="Edit"
      onClick={() => navigate(`/admin/cakes/edit/${cake.id}`)}
      className="bg-transparent p-1 rounded-full
             text-emerald-500 hover:text-emerald-700
             hover:bg-emerald-50"
>
  <Pencil size={18} />
</button>


    {/* ================================ Delete =========================================*/}
    <button
      type="button"
      title="Delete"
      onClick={() => handleDelete(cake.name)}
      className="
        bg-transparent p-1 rounded-full
                 text-red-500 hover:text-red-700
                 hover:bg-red-50
                 focus:outline-none focus:ring-0
      "
    >
      <Trash2 size={16} />
    </button>
  </div>
</td>
    </tr>
         ))}
                </tbody>
              </table>
            </div>

            {/*============================ Footer ============================*/}
            <p className="text-sm text-gray-500 mt-4">
              Showing 1 to {filtered.length} of {filtered.length} rows
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
