import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/Topbar";



export default function EditCake() {
 
  const [open, setOpen] = useState(false);

  const [fileName, setFileName] = useState("No file chosen");

  const [formData, setFormData] = useState({
    cakeId: "#sd897",
    name: "Butter Scotch 1 Pond",
    superCategory: "Cakes",
    category: "Eggless Cake",
    price: 768,
    strike: 876,
    status: "Active",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFormData({
        ...formData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F6FA] overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1">
        <Topbar toggle={() => setOpen(true)} />

        <main className="flex-1 overflow-y-auto px-8 py-6">
          {/* Page Title */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-800">
              EDIT CAKE
            </h1>
            <span className="text-sm text-gray-500">Edit Cake</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Basic Information
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill all information below
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cake ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cake Id
                </label>
                <input
                  type="text"
                  name="cakeId"
                  value={formData.cakeId}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Cake Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cake Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Super Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Super Category
                </label>
                <input
                  type="text"
                  name="superCategory"
                  value={formData.superCategory}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 text-sm bg-white text-gray-800"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 text-sm bg-white text-gray-800"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 text-sm bg-white text-gray-800
                             [&::-webkit-inner-spin-button]:opacity-100"
                />
              </div>

              {/* Strike Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Strike Price
                </label>
                <input
                  type="number"
                  name="strike"
                  value={formData.strike}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 text-sm bg-white text-gray-800
                             [&::-webkit-inner-spin-button]:opacity-100"
                />
              </div>

              {/* Image */}
              <div className="flex items-center gap-4">
                <img
                  src={formData.image}
                  alt="Cake"
                  className="w-20 h-20 object-cover rounded-md border"
                />

                <div className="flex border rounded-md overflow-hidden">
                  <label className="px-4 py-2 bg-gray-100 text-sm text-gray-800 cursor-pointer border-r">
                    Choose File
                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="px-4 py-2 text-sm text-gray-500">
                    {fileName}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 text-sm bg-white text-gray-800"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white
                           px-6 py-2 rounded-md text-sm font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
