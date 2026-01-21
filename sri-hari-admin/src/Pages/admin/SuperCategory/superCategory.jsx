import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/Topbar";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function SuperCategory() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();


  const handleDelete = (name) => {
    if (window.confirm(`Delete "${name}" ?`)) {
      alert("Deleted successfully (demo)");
    }
  };

  const categories = [
    {
      id: 1,
      name: "Cakes",
      image: "https://tse1.mm.bing.net/th/id/OIP.tqyhr3Sva1luYASQYoGGhgAAAA?cb=defcache2defcache=1&w=360&h=360&rs=1&pid=ImgDetMain&o=7&rm=3",
      status: "Active",
    },
    {
      id: 2,
      name: "Chocolate",
      image: "https://th.bing.com/th/id/OIP.ih8kZFQOqdSxr8bs5aWf_gHaEL?w=325&h=183&c=7&r=0&o=7&cb=defcache2&dpr=1.5&pid=1.7&rm=3&defcache=1",
      status: "Active",
    },
    {
      id: 3,
      name: "Happy Birthday",
      image: "https://i.pinimg.com/originals/68/8c/34/688c34749c505ac8afaae9ea95ca70b1.jpg",
      status: "Active",
    },
  ];

  const filtered = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#EFE6E2] overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1 min-w-0">
        <Topbar toggle={() => setOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-[#4B2E39]">
              SUPER CATEGORY
            </h1>

            <button
  onClick={() => navigate("/admin/add-super-category")}
  className="flex items-center gap-2 bg-[rgb(53,111,132)] hover:bg-[rgb(25,79,99)] text-white px-5 py-2 rounded-full text-sm font-medium"
>
  <Plus size={18} />
  New Super Category
</button>

          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            {/* Search */}
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-[#1F4E5F] focus:outline-none"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left">Sr. No.</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Image</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-black">{index + 1}</td>
                      <td className="py-4 px-4 font-medium text-black">{item.name}</td>

                      <td className="py-4 px-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-lg border"
                        />
                      </td>

                      <td className="py-4 px-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {item.status}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          {/* ==========================Edit ================================*/}
                          <button
                               type="button"
                               className="bg-transparent p-1 rounded-full
                                          text-emerald-500 hover:text-emerald-700
                                          hover:bg-emerald-50
                                          focus:outline-none focus:ring-0"
                               title="Edit"
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

            <p className="text-sm text-gray-500 mt-4">
              Showing 1 to {filtered.length} of {filtered.length} rows
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
