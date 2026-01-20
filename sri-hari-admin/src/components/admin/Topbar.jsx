import React from "react";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Topbar({ toggle }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Dashboard par back button nahi dikhana
  const showBack = location.pathname !== "/admin/dashboard";

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4 sm:px-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Mobile menu */}
        <button
          onClick={toggle}
          className="md:hidden text-[#1F4E5F]"
        >
          <Menu size={24} />
        </button>

        {/* CIRCULAR BACK BUTTON */}
        {showBack && (
          <div
            onClick={() => navigate(-1)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div
              className="w-8 h-8 rounded-full hover:border border-gray-400
                         flex items-center justify-center
                         bg-gray-100 transition"
            >
              <span className="text-base font-semibold leading-none  mb-1">&lt;</span>
            </div>
           
          </div>
        )}

        <h2 className="text-lg sm:text-xl font-semibold text-[#4B2E39]">
          Admin Dashboard
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <span className="hidden sm:block">Admin</span>
        <div className="w-9 h-9 bg-[#1F4E5F] text-white rounded-full flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
}
