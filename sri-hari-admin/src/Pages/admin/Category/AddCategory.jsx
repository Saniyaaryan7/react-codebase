import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/Topbar";

function AddSuperCategory() {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="flex h-screen bg-[#EFE6E2] overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar toggle={() => setOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-gray-50 p-6 rounded-xl text-black">
            {/* PAGE HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold uppercase">
                Add Category
              </h1>
              <span className="text-gray-500">Add Category</span>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-1">
                Basic Information
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill all information below
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                   Category Name
                  </label>
                  <input
                    type="text"
                    placeholder="Category Name"
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* IMAGE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Image
                  </label>

                  <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                    <label className="px-4 py-2 bg-gray-100 border-r cursor-pointer text-sm">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="px-4 text-sm text-gray-600">
                      {fileName}
                    </span>
                  </div>
                </div>
              </div>

              {/* SAVE BUTTON */}
              <div className="mt-6">
                <button className="bg-[rgb(53,111,132)] hover:bg-[rgb(25,79,99)] text-white px-6 py-2 rounded-lg text-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddSuperCategory;
