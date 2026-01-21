import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/Topbar";

export default function EditSuper() {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const [formData, setFormData] = useState({
    name: "Cakes",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400",
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
              EDIT SUPER CATEGORY
            </h1>
            <span className="text-sm text-gray-500">Edit Super Category</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Basic Information
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill all information below
            </p>

            {/* FORM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Super Category Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Super Category Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2
                   text-sm  bg-white text-gray-800
                   focus:ring-2 focus:ring-blue-500"
                            
                />
              </div>

             

              {/* Status */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 text-sm
                             bg-white text-gray-800"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

 {/* Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>

                <div className="flex items-center gap-4">
                  <img
                    src={formData.image}
                    alt="Super Category"
                    className="w-20 h-20 object-cover rounded-md border"
                  />

                  <div className="flex border rounded-md overflow-hidden">
                    <label className="px-4 py-2 
                                    bg-gray-100 text-sm text-gray-800 
                                      cursor-pointer border-r">
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
              </div>

            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                className="bg-[rgb(53,111,132)] hover:bg-[rgb(25,79,99)] 
                           px-6 py-2 rounded-md 
                           text-sm text-white font-medium"
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
