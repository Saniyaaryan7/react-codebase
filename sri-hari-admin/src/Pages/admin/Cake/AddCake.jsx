import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/Topbar";

export default function AddCake() {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div className="flex h-screen bg-[#EFE6E2] overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1 min-w-0">
        <Topbar toggle={() => setOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#4B2E39]">
              Add Cake
            </h1>
            <p className="text-sm text-gray-500">
              Fill all information below
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Cake ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cake ID
                </label>
                <input
                  type="text"
                  placeholder="Enter cake id"
                  className="w-full border rounded-lg px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-[#1F4E5F] focus:outline-none"
                />
              </div>

              {/* Cake Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cake Name
                </label>
                <input
                  type="text"
                  placeholder="Enter cake name"
                  className="w-full border rounded-lg px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-[#1F4E5F] focus:outline-none"
                />
              </div>

              {/* Super Category */}
              <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
              Super Category
             </label>

  <select
    defaultValue=""
    className="
      w-full
      border
      rounded-lg
      px-4 py-2
      text-sm
      bg-white
      text-gray-700
      focus:ring-2 focus:ring-[#1F4E5F]
      focus:outline-none
    "
  >
    {/* Placeholder */}
    <option value="" disabled className="text-gray-400">
      Super Category
    </option>

    {/* Options */}
    <option value="eggless" className="text-gray-700">
      Cakes
    </option>

    <option value="with-egg" className="text-gray-700">
     Chocolates
    </option>

    <option value="premium" className="text-gray-700">
    Happy Birthday
    </option>
  </select>
</div>

              {/* Category */}
              <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
   Category
  </label>

  <select
    defaultValue=""
    className="
      w-full
      border
      rounded-lg
      px-4 py-2
      text-sm
      bg-white
      text-gray-700
      focus:ring-2 focus:ring-[#1F4E5F]
      focus:outline-none
    "
  >
    {/* Placeholder */}
    <option value="" disabled className="text-gray-400">
     Category
    </option>

    {/* Options */}
    <option value="eggless" className="text-gray-700">
      Eggless
    </option>

    <option value="with-egg" className="text-gray-700">
      With Egg
    </option>

    <option value="premium" className="text-gray-700">
      Premium Cakes
    </option>
  </select>
</div>


              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full border rounded-lg px-4 py-2 
                  text-sm bg-white
                  focus:ring-2 focus:ring-[#1F4E5F] 
                  focus:outline-none"
                />
              </div>

              {/* Strike Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Strike Price
                </label>
                <input
                  type="number"
                  placeholder="Strike price"
                  className="w-full border rounded-lg px-4 py-2
                   text-sm bg-white 
                   focus:ring-2 focus:ring-[#1F4E5F]
                   focus:outline-none"
                />
              </div>

              {/* Cake Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image
                </label>

                <div className="flex items-center gap-4 border rounded-lg px-3 py-2">
                  {/* Hidden input */}
                  <input
                    type="file"
                    id="cakeImage"
                    className="hidden"
                    onChange={(e) =>
                      setFileName(
                        e.target.files.length > 0
                          ? e.target.files[0].name
                          : "No file chosen"
                      )
                    }
                  />

                  {/* Choose File Button */}
                  <label
                    htmlFor="cakeImage"
                    className="cursor-pointer bg-gray-100 hover:bg-gray-200
                                text-sm px-4 py-2 rounded-md text-gray-700"
                  >
                    Choose File
                  </label>

                  {/* File name */}
                  <span className="text-sm text-gray-500 truncate">
                    {fileName}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button className="bg-[rgb(53,111,132)] hover:bg-[rgb(25,79,99)] 
                                 text-white px-6 py-2 rounded-lg text-sm font-medium">
                Save Cake
              </button>

              <button className="border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-lg
                                 text-sm font-medium">
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
