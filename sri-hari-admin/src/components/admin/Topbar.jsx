import React from "react";
import { Menu } from "lucide-react";

export default function Topbar({ toggle }) {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4 sm:px-6 ">
      
      {/* Mobile menu */}
      <button
        onClick={toggle}
        className="md:hidden text-[#1F4E5F]"
      >
        <Menu size={24} />
      </button>

      <h2 className="text-lg sm:text-xl font-semibold text-[#4B2E39]">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-2">
        <span className="hidden sm:block">Admin</span>
        <div className="w-9 h-9 bg-[#1F4E5F] text-white rounded-full flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
}
